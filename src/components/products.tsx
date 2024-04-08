import Image from "next/image";
import Link from "next/link";

const Product = () => {
  return (
    <div className="relative m-10">
      <h2 className="text-center text-2xl font-semibold mb-5">Products</h2>
      <div className="flex justify-between items-center">

      {
        [0,1,2].map((s,i)=>(
            <div className="lg:w-1/4 md:w-1/3 p-4 border shadow-yellow-50">
            <Link href="/" className="block relative h-48 ">
              <Image
                alt="product"
                fill
                src={`/assets/prod${i+1}.jpg`}
                className="object-cover object-center w-full h-full block"
              />
            </Link>
    
            <div className="mt-4 ">
              <h3 className="text-gray-500 ">CATEGORY</h3>
              <h2 className="text-gray-900">The Catalyzer</h2>
              <p>$16</p>
            </div>
          </div>
        ))
      }
      </div>

     
    </div>
  );
};
export default Product;
