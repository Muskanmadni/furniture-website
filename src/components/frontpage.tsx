import Image from "next/image"
import frontpage from "@/images/front-image.png"

export default function Frontpage() {
    return (
        <section className="relative w-full">
            <div className="relative">
                <Image 
                    src={frontpage} 
                    alt="frontpage" 
                    className="w-full h-[300px] md:h-[400px] lg:h-[600px] object-cover" 
                />
                <div className="w-full md:w-[500px] lg:w-[643px] h-auto bg-[#FFF3E3] absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 md:left-auto md:right-[5%] md:transform-none p-6 md:p-10"> 
                    <h5 className="text-[#000000] font-bold text-lg md:text-xl">New Arrivals</h5>
                    <p className="text-[#B88E2F] font-extrabold text-2xl md:text-3xl lg:text-[40px] pt-2">Discover Our</p>
                    <p className="text-[#B88E2F] font-extrabold text-2xl md:text-3xl lg:text-[40px]">New Collection</p>
                    <p className="text-[#000000] text-sm md:text-base mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                    <button className="text-[#000000] text-lg md:text-2xl bg-[#B88E2F] w-[120px] md:w-[150px] h-[40px] md:h-[50px] mt-6">
                        Shop Now
                    </button>
                </div>
            </div>
        </section>
    )
}
