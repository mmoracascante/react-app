import { useState } from "react"
import { Product, ProductInCart } from "../interfaces/interfaces"



export const useShoppingCart = () => {



    const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({})

    const onProductCountChange = ({ count, product }: { count: number, product: Product }) => {


        setShoppingCart(oldState => {

            if (count === 0) {
                const { [product.id]: toDelete, ...rest } = oldState
                return { ...rest }

            }

            return {
                ...oldState,
                [product.id]: { count, ...product }
            }
        })

    }



    return {
        shoppingCart,
        onProductCountChange,
    }


}