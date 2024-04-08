import Navbar from "@/components/Navbar";
import Product from "@/components/products";
import Slider from "@/components/slider";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Slider/>
      <Product/>
    </main>
  );
}
