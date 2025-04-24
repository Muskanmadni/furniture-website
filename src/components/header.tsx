"use client"
import {useState} from "react"
import Image from "next/image"
import { CgSearch, CgShoppingCart, CgUser, CgMenu } from "react-icons/cg"
import logo from "@/images/logo (1).png"
import Link from "next/link"

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <section className="bg-[#FFFFFF] w-full h-[80px] px-4 md:px-6 lg:px-10">
            <div className="flex items-center justify-between pt-[30px]">
                <div className="flex items-center">
                    <Image src={logo} alt="logo" width={30} height={50} />
                    <h1 className="text-xl md:text-2xl font-bold text-[#000000] pl-2">Furniro</h1>
                </div>
                
                <div className="hidden md:flex items-center justify-between">
                    <ul className="flex items-center gap-4 lg:gap-20">
                        <Link href="/">
                        <li className="text-[#000000]">Home</li>
                        </Link>
                        <Link href="/about">
                        <li className="text-[#000000]">About</li>
                        </Link>
                        <Link href="/allproduct">
                        <li className="text-[#000000]">Products</li>
                        </Link>
                        <li className="text-[#000000]">Contact</li>
                    </ul>
                    <div className="flex items-center gap-4 lg:gap-10 pl-4 lg:pl-[200px]">
                        <CgUser className="text-[#000000] text-xl lg:text-2xl" />

                        <CgSearch className="text-[#000000] text-xl lg:text-2xl" />
                        <Link href="/cartPage">
                        <CgShoppingCart className="text-[#000000] text-xl lg:text-2xl" />
                        </Link>
                    </div>
                </div>

                {/* Mobile menu button */}
                <div className="md:hidden flex items-center gap-4">
                    <CgUser className="text-[#000000] text-xl" />
                    <CgSearch className="text-[#000000] text-xl" />
                    <CgShoppingCart className="text-[#000000] text-xl" />
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-[#000000] text-xl"
                    >
                        <CgMenu />
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-[80px] left-0 w-full bg-white shadow-lg">
                    <ul className="flex flex-col items-center py-4">
                        <li className="text-[#000000] py-2">Home</li>
                        <Link href="/about">
                        <li className="text-[#000000] py-2">About</li>
                        </Link>
                        <Link href="/allproduct">
                        <li className="text-[#000000] py-2">Products</li>
                        </Link>
                        <li className="text-[#000000] py-2">Contact</li>
                    </ul>
                </div>
            )}
        </section>
    )
}

