import Image from "next/image"
import { Button } from "./ui/button"

const Slider = () =>{
 return (
    <div className="bg-yellow relative h-[calc(65vh)]">
        Hello
       <Image alt="slider shopping"   fill src="/assets/slider1.webp" />
       <div className="absolute  top-1/3 p-8  m-auto w-full">
        <p className="text-white">Sale 45% off</p>
        <h1 className=" scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4 text-white">Exlucive New <br/> Offer 2024</h1>
        <Button variant="default">Shop Now</Button>
        </div> 
    </div>
 )
}

export default Slider