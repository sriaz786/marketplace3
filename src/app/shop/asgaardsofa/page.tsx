'use client';

import Image from 'next/image';
import Link from 'next/link';

const AsgaardSofaPage = () => {
  return (
    <div className="container mx-auto px-4">
      {/* Breadcrumb Bar */}
      <div className="text-gray-500 text-sm my-4">
        <Link href="/" className="hover:text-black">Home</Link> &gt; 
        <Link href="/shop" className="hover:text-black">Shop</Link> &gt; 
        <span className="font-semibold">Asgaard Sofa</span>
      </div>

      {/* 1st Section with Three Columns */}
      <section className="grid grid-cols-3 gap-8">
        {/* First Column: Four Images */}
        <div className="flex flex-col gap-4">
          <Image
            src="/image/s2p1c1r1.png"
            alt="Product 1"
            width={150}
            height={150}
            className="object-contain mx-auto"
          />
          <Image
            src="/image/s2p1c1r2.png"
            alt="Product 2"
            width={150}
            height={150}
            className="object-contain mx-auto"
          />
          <Image
            src="/image/s2p1c1r3.png"
            alt="Product 3"
            width={150}
            height={150}
            className="object-contain mx-auto"
          />
          <Image
            src="/image/asgaardsofa.jpeg"
            alt="Product 4"
            width={150}
            height={150}
            className="object-contain mx-auto"
          />
        </div>

        {/* Second Column: Large Image */}
        <div>
          <Image
            src="/image/asgaardsofa.jpeg"
            alt="Asgaard Sofa Large Image"
            width={1000}
            height={1000}
            className="object-contain"
          />
        </div>

        {/* Third Column: Product Details */}
        <div className="flex flex-col gap-4">
          {/* Product Name */}
          <h1 className="text-3xl font-bold">Asgaard Sofa</h1>

          {/* Price */}
          <p className="text-xl text-gray-500">Rs 25000000</p>

          {/* Rating */}
          <div className="flex items-center">
            {[...Array(4)].map((_, index) => (
              <span key={index} className="text-yellow-500">&#9733;</span> // Filled stars
            ))}
            <span className="text-gray-300">&#9733;</span> {/* Half star */}
            <span className="ml-2 text-sm text-gray-500">5 Customer Review</span>
          </div>

          {/* Descriptive Text */}
          <div className="flex flex-col gap-2">
            
            <p className="text-sm text-gray-600">Setting the bar as one of the loudest speakers in its class the Kilburn is a compact stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
            </p>
        
          </div>

          {/* Size Options */}
          <div className="flex items-center gap-2">
            <span className="font-bold">Size:</span>
            <button className="px-4 py-2 border rounded">XS</button>
            <button className="px-4 py-2 border rounded">L</button>
            <button className="px-4 py-2 border rounded">XL</button>
          </div>

          {/* Color Options */}
          <div className="flex items-center gap-2">
            <span className="font-bold">Color:</span>
            <button className="w-8 h-8 rounded-full border bg-blue-500"></button>
            <button className="w-8 h-8 rounded-full border bg-black"></button>
            <button className="w-8 h-8 rounded-full border bg-beige-500"></button>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="flex gap-4">
            <input
              type="number"
              min="1"
              defaultValue="1"
              className="w-16 border rounded text-center"
            />
            <button className="bg-black text-white px-4 py-2 rounded">Add to Cart</button>
          </div>

          {/* Additional Text in Two Columns */}
          <div className="grid grid-cols-2 gap-4 mt-4">
           <ul> <li className="text-sm text-gray-600">SKU  SS001</li>
            <li className="text-sm text-gray-600">categorofa</li>
            <li className="text-sm text-gray-600">Tags: Sofa Chair, Home, Shop</li>
            <li className="text-sm text-gray-600 flex gap-3">Share: <Link href="#" className="social-btn facebook">f</Link>
      <Link href="#" className="social-btn linkedin">in</Link>
      <Link href="#" className="social-btn twi">t</Link> </li></ul>
          </div>
        </div>
      </section>
{/* 2nd section */}
      <section className="bg-white py-10">
  <div className="container mx-auto px-4">
    {/* First Row: Three Text Boxes */}
    <div className="grid grid-cols-3 gap-4 mb-8">
      <div className="p-4 border rounded text-center">
        <h3 className="text-xl font-bold">Description</h3>
        
      </div>
      <div className="p-4 border rounded text-center">
        <h3 className="text-xl font-bold">Additional Information</h3>
       
      </div>
      <div className="p-4 border rounded text-center">
        <h3 className="text-xl font-bold">Reviews [5]</h3>
        
      </div>
    </div>

    {/* Second Row: Two Large Images */}
    <div className="grid grid-cols-2 gap-4 mb-8">
      <div>
        <Image
          src="/image/s2p1s3c3.png" 
          alt="Second Row Image 1"
          width={600}
          height={400}
          className="object-cover rounded"
        />
      </div>
      <div>
        <Image
          src="/image/s2p1s3c2.png" 
          alt="Second Row Image 2"
          width={600}
          height={400}
          className="object-cover rounded"
        />
      </div>
    </div>

    {/* Third Row: Two Columns with Text */}
    <div className="grid grid-cols-2 gap-4">
      <div className="p-4">
         <p className="text-gray-600">
        Embodying the row wayward spirit of rock n roll the Kilburn portable active stereo speaker takes the unmistakable look sound of Marshall unplugs the chords and takes the show on the road.

        </p>
      </div>
      <div className="p-4">
                <p className="text-gray-600">
                Weighing in under 7 pounds the Kilburn is a lightweight piece of vintage styled engineering Setting the bar as one of the loud speakers in its class the Kilburn is a compact stout-hearted hete with a well-balanced audio which boasts a clear midrom and extended mhighs for a sound that is both articulate and pronounced. Ine analogue knobs allow you to fine tune the contr to your personcar preferences while the gutor influenced lecther strop enables easy and stylish travel
        </p>
      </div>
    </div>
  </div>
</section>
{/* Third Section: Product Grid */}
<section className="bg-white text-black py-10">
        <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold mb-6 ">Related Products</h2>
        
          <div className="grid grid-cols-4 gap-4">
            <div className="text-center">
              <Image
                src="/image/product1.jpeg"
                alt="Product 1"
                width={150}
                height={150}
                className="object-contain mx-auto"
              />
              <h3 className="text-sm font-semibold mt-2">Trenton modular sofa_3</h3>
              <p className="text-lg font-bold">Rs 25000.00</p>
            </div>
            <div className="text-center">
              <Image
                src="/image/product2.jpeg"
                alt="Product 2"
                width={150}
                height={150}
                className="object-contain mx-auto"
              />
              <h3 className="text-sm font-semibold mt-2">Granite dinning table with dining chair</h3>
              <p className="text-lg font-bold">Rs 25000.00</p>
            </div>
            <div className="text-center">
              <Image
                src="/image/product3.jpeg"
                alt="Product 3"
                width={150}
                height={150}
                className="object-contain mx-auto"
              />
              <h3 className="text-sm font-semibold mt-2">Outdoor bar table and stool </h3>
              <p className="text-lg font-bold">Rs 25000.00</p>
            </div>
            <div className="text-center">
              <Image
                src="/image/product4.jpeg"
                alt="Product 4"
                width={150}
                height={150}
                className="object-contain mx-auto"
              />
              <h3 className="text-sm font-semibold mt-2 ">Plain console with teak mirror</h3>
              <p className="text-lg font-bold">Rs 25000.00</p>
            </div>
            <div ><a href="#" className=" text-center underline text-sm mb-4">
              View More
            </a></div>
          </div>
        </div>
      </section>






    </div>
  );
};

export default AsgaardSofaPage;