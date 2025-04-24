"use client"
import { useState } from "react"
import Image from "next/image"
import { CgShoppingCart } from "react-icons/cg"
import { useCart } from "@/context/CartContext"
import { useRouter } from "next/navigation"
import sofa from "@/images/sofa.png"
import table from "@/images/table.png"
import chair from "@/images/chair (1).jpg"
import bed from "@/images/bed.jpg"

// Sample product data
const products = [
    {
        id: 1,
        name: "Modern Sofa",
        price: 299.99,
        image: sofa,
        category: "Living Room"
    },
    {
        id: 2,
        name: "Dining Table",
        price: 199.99,
        image: table,
        category: "Dining Room"
    },
    {
        id: 3,
        name: "Bed Frame",
        price: 399.99,
        image: bed,
        category: "Bedroom"
    },
    {
        id: 4,
        name: "Office Chair",
        price: 149.99,
        image: chair,
        category: "Office"
    },
    {
        id: 5,
        name: "Desk",
        price: 249.99,
        image: sofa,
        category: "Office"
    },
    {
        id: 6,
        name: "Dining Chair",
        price: 129.99,
        image: chair,
        category: "Dining Room"
    },

    // Add more products as
    // needed
]

export default function ProductListing() {
    const { addToCart } = useCart()
    const router = useRouter()

    return (
        <section className="container mx-auto px-4 py-8">
            <div className="mb-8">
                <h1 className="text-2xl md:text-3xl font-bold text-[#B88E2F]">Our Products</h1>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map(product => (
                    <div 
                        key={product.id} 
                        className="bg-white rounded-lg shadow-md overflow-hidden group cursor-pointer"
                        onClick={() => router.push(`/product/${product.id}`)}
                    >
                        <div className="relative h-48">
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>
                        <div className="p-4">
                            <h3 className="text-lg font-semibold mb-2 text-[#B88E2F]">{product.name}</h3>
                            <p className="text-gray-600 mb-2">{product.category}</p>
                            <div className="flex justify-between items-center">
                                <span className="text-xl font-bold text-[#B88E2F]">${product.price}</span>
                                <button 
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        addToCart(product)
                                    }}
                                    className="bg-[#B88E2F] text-white p-2 rounded-full hover:bg-[#9a7a2a] transition-colors"
                                >
                                    <CgShoppingCart className="text-xl" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}