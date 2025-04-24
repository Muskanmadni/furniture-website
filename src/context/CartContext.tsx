"use client"
import { createContext, useContext, useState, ReactNode } from 'react'
import { StaticImageData } from 'next/image'

interface Product {
    id: number
    name: string
    price: number
    image: string | StaticImageData
    category: string
    quantity?: number
}

interface CartContextType {
    cart: Product[]
    addToCart: (product: Product) => void
    removeFromCart: (productId: number) => void
    updateQuantity: (productId: number, quantity: number) => void
    clearCart: () => void
    totalItems: number
    totalPrice: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
    const [cart, setCart] = useState<Product[]>([])

    const addToCart = (product: Product) => {
        console.log('Adding to cart:', product)
        setCart(prevCart => {
            const existingProduct = prevCart.find(item => item.id === product.id)
            if (existingProduct) {
                return prevCart.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: (item.quantity || 1) + 1 }
                        : item
                )
            }
            return [...prevCart, { ...product, quantity: 1 }]
        })
    }

    const removeFromCart = (productId: number) => {
        console.log('Removing from cart:', productId)
        setCart(prevCart => prevCart.filter(item => item.id !== productId))
    }

    const updateQuantity = (productId: number, quantity: number) => {
        if (quantity < 1) return
        console.log('Updating quantity:', productId, quantity)
        setCart(prevCart =>
            prevCart.map(item =>
                item.id === productId ? { ...item, quantity } : item
            )
        )
    }

    const clearCart = () => {
        setCart([])
    }

    const totalItems = cart.reduce((total, item) => total + (item.quantity || 1), 0)
    const totalPrice = cart.reduce((total, item) => total + (item.price * (item.quantity || 1)), 0)

    console.log('Current cart state:', cart)

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart,
            totalItems,
            totalPrice
        }}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart() {
    const context = useContext(CartContext)
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider')
    }
    return context
} 