"use client"
import Image from "next/image"
import { useCart } from "@/context/CartContext"
import { CgTrash } from "react-icons/cg"
import { useRouter } from "next/navigation"

export default function CartPage() {
    const { cart, removeFromCart, updateQuantity, totalPrice } = useCart()
    const router = useRouter()

    if (cart.length === 0) {
        return (
            <div className="container mx-auto px-4 py-16 text-center">
                <h1 className="text-3xl font-bold mb-4 text-black">Your Cart is Empty</h1>
                <p className="text-black mb-8">Add some products to your cart to see them here.</p>
                <button 
                    onClick={() => router.push('/')}
                    className="bg-[#B88E2F] text-white px-6 py-3 rounded-md hover:bg-[#9a7a2a] transition-colors"
                >
                    Continue Shopping
                </button>
            </div>
        )
    }

    return (
        <div className="container mx-auto px-4 py-16">
            <h1 className="text-3xl font-bold mb-8 text-black">Shopping Cart</h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    {cart.map(item => (
                        <div key={item.id} className="flex items-center gap-4 mb-6 p-4 bg-white rounded-lg shadow-md">
                            <div className="relative w-24 h-24">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    fill
                                    className="object-cover rounded-md"
                                />
                            </div>
                            
                            <div className="flex-grow">
                                <h3 className="text-lg font-semibold text-black">{item.name}</h3>
                                <p className="text-black">{item.category}</p>
                                <div className="flex items-center gap-4 mt-2">
                                    <div className="flex items-center border rounded-md">
                                        <button
                                            onClick={() => updateQuantity(item.id, (item.quantity || 1) - 1)}
                                            className="px-3 py-1 hover:bg-gray-100 text-black"
                                        >
                                            -
                                        </button>
                                        <span className="px-3 py-1 text-black">{item.quantity}</span>
                                        <button
                                            onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)}
                                            className="px-3 py-1 hover:bg-gray-100 text-black"
                                        >
                                            +
                                        </button>
                                    </div>
                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="text-red-500 hover:text-red-700"
                                    >
                                        <CgTrash className="text-xl" />
                                    </button>
                                </div>
                            </div>
                            
                            <div className="text-right">
                                <p className="text-xl font-bold text-[#B88E2F]">
                                    ${(item.price * (item.quantity || 1)).toFixed(2)}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="lg:col-span-1">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-bold mb-4 text-black">Order Summary</h2>
                        <div className="space-y-2 mb-4">
                            <div className="flex justify-between">
                                <span className="text-black">Subtotal</span>
                                <span className="text-black">${totalPrice.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-black">Shipping</span>
                                <span className="text-black">Free</span>
                            </div>
                            <div className="border-t pt-2 mt-2">
                                <div className="flex justify-between font-bold">
                                    <span className="text-black">Total</span>
                                    <span className="text-black">${totalPrice.toFixed(2)}</span>
                                </div>
                            </div>
                        </div>
                        <button className="w-full bg-[#B88E2F] text-white py-3 rounded-md hover:bg-[#9a7a2a] transition-colors">
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
