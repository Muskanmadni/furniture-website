"use client"
import Image from "next/image"
import { CgShoppingCart } from "react-icons/cg"

const featuredProducts = [
    {
        id: 1,
        name: "Modern Sofa",
        price: 299.99,
        image: "/images/sofa.jpg",
        category: "Living Room"
    },
    {
        id: 2,
        name: "Dining Table",
        price: 199.99,
        image: "/images/table.jpg",
        category: "Dining Room"
    },
    {
        id: 3,
        name: "Bed Frame",
        price: 399.99,
        image: "/images/bed.jpg",
        category: "Bedroom"
    },
    {
        id: 4,
        name: "Office Chair",
        price: 149.99,
        image: "/images/chair.jpg",
        category: "Office"
    }
]

export default function Product() {
    return (
        <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Products</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Discover our handpicked selection of premium furniture pieces that combine style, comfort, and quality.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {featuredProducts.map(product => (
                    <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden group">
                        <div className="relative h-64">
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                            <p className="text-gray-600 mb-4">{product.category}</p>
                            <div className="flex justify-between items-center">
                                <span className="text-2xl font-bold text-[#B88E2F]">${product.price}</span>
                                <button className="bg-[#B88E2F] text-white p-3 rounded-full hover:bg-[#9a7a2a] transition-colors">
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
