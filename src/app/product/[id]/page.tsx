"use client"
import Image from "next/image"
import { useCart } from "@/context/CartContext"
import { CgShoppingCart } from "react-icons/cg"
import { useParams, useRouter } from "next/navigation"
import sofa from "@/images/sofa.png"
import table from "@/images/table.png"
import bed from "@/images/bed.jpg"
import chair from "@/images/chair (1).jpg"
// Sample product data (move this to a separate file in a real app)
const products = [
    {
        id: 1,
        name: "Modern Sofa",
        price: 299.99,
        image: sofa,
        category: "Living Room",
        description: "A comfortable and stylish modern sofa perfect for your living room. Features premium materials and elegant design.",
        features: [
            "Premium fabric upholstery",
            "Sturdy wooden frame",
            "High-density foam cushions",
            "Easy to clean"
        ]
    },
    {
        id: 2,
        name: "Dining Table",
        price: 199.99,
        image: table,
        category: "Dining Room",
        description: "Elegant dining table that combines style and functionality. Perfect for family gatherings and dinner parties.",
        features: [
            "Solid wood construction",
            "Seats 6-8 people",
            "Scratch-resistant surface",
            "Easy assembly"
        ]
    },
    {
        id: 3,
        name: "Bed Frame",
        price: 399.99,
        image: bed,
        category: "Bedroom",
        description: "Modern bed frame with a sleek design. Provides excellent support and enhances your bedroom's aesthetics.",
        features: [
            "Metal frame construction",
            "Noise-free design",
            "Easy assembly",
            "Compatible with standard mattress sizes"
        ]
    },
    {
        id: 4,
        name: "Office Chair",
        price: 149.99,
        image: chair,
        category: "Office",
        description: "Ergonomic office chair with adjustable features. Provides comfort and support during long working hours.",
        features: [
            "Adjustable height",
            "Swivel seat",
            "Comfortable padding"
        ]
    },
    {
        id: 5,
        name: "Desk",
        price: 249.99,
        image: chair,
        category: "Office",
        description: "Ergonomic office chair with adjustable features. Provides comfort and support during long working hours.",
        features: [
            "Adjustable height",
            "Swivel seat",
            "Comfortable padding"
        ]
    }
]

export default function ProductDetails() {
    const params = useParams()
    const router = useRouter()
    const { addToCart } = useCart()
    const product = products.find(p => p.id === Number(params.id))

    if (!product) {
        return (
            <div className="container mx-auto px-4 py-16 text-center">
                <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
                <button 
                    onClick={() => router.push('/')}
                    className="text-[#B88E2F] hover:underline"
                >
                    Return to Home
                </button>
            </div>
        )
    }

    const handleAddToCart = () => {
        addToCart(product)
        router.push('/cartPage')
    }

    return (
        <div className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative h-[400px] md:h-[600px]">
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover rounded-lg"
                    />
                </div>

                <div className="space-y-6">
                    <h1 className="text-3xl md:text-4xl font-bold text-black">{product.name}</h1>
                    <p className="text-2xl font-bold text-[#B88E2F]">${product.price}</p>
                    <p className="text-gray-600">{product.description}</p>

                    <div>
                        <h2 className="text-xl font-semibold mb-2 text-black">Features:</h2>
                        <ul className="list-disc list-inside space-y-2">
                            {product.features.map((feature, index) => (
                                <li key={index} className="text-gray-600">{feature}</li>
                            ))}
                        </ul>
                    </div>

                    <button
                        onClick={handleAddToCart}
                        className="bg-[#B88E2F] text-white px-8 py-3 rounded-md hover:bg-[#9a7a2a] transition-colors flex items-center gap-2"
                    >
                        <CgShoppingCart className="text-xl" />
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    )
} 