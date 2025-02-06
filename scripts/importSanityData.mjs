import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'pqnqe3h5',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2025-01-13',
  token: 'sk266hfEKijsgW6jSFTTwnuPa1zeNSTPbn9umLuLtF9b7L6tpmLyRj00RnVGwyXq2f61I5nVX6aijJ6KdpPk8StZ59QZ2MK9CPMAiHMo8yGESAMmGH3nRxZWLteXwXTATEjD5VcG5SsBr7lHfTGTRWmI3IZCE1dGsV7ntaZsclALIh4JT4kb',
});

async function uploadImageToSanity(imageUrl) {
  if (!imageUrl) {
    console.error('No image URL provided.');
    return null;
  }
  try {
    console.log(`Uploading image: ${imageUrl}`);

    const response = await fetch(imageUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${imageUrl}`);
    }

    const buffer = await response.arrayBuffer();
    const bufferImage = Buffer.from(buffer);

    const asset = await client.assets.upload('image', bufferImage, {
      filename: imageUrl.split('/').pop(),
    });

    console.log(`Image uploaded successfully: ${asset._id}`);
    return asset._id;
  } catch (error) {
    console.error('Failed to upload image:', imageUrl, error);
    return null;
  }
}

async function uploadProduct(product) {
  try {
    // Use the correct field for the image URL
    const imageId = await uploadImageToSanity(product.imagePath);

    if (imageId) {
      const document = {
        _type: 'product',
        id: product.id,
        name: product.name,
        image: {
          _type: 'image',
          asset: {
            _ref: imageId,
          },
        },
        price: parseFloat(product.price), // Ensure price is a number
        description: product.description,
        discountPercentage: product.discountPercentage,
        isFeaturedProduct: product.isFeaturedProduct,
        stockLevel: product.stockLevel,
        category: product.category,
      };

      const createdProduct = await client.create(document);
      console.log(`Product ${product.name} uploaded successfully:`, createdProduct);
    } else {
      console.log(`Product ${product.name} skipped due to image upload failure.`);
    }
  } catch (error) {
    console.error('Error uploading product:', error);
  }
}

async function importProducts() {
  try {
    const response = await fetch('https://template-0-beta.vercel.app/api/product');
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const products = await response.json();

    for (const product of products) {
      await uploadProduct(product);
    }
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}

importProducts();
