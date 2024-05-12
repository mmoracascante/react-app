import { useState } from "react"
import { Product, ProductInCart } from "../interfaces/interfaces"



export const useShoppingCart = () => {



    const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({})

    const onProductCountChange = ({ count, product }: { count: number, product: Product }) => {


        setShoppingCart(oldState => {

            // Con esta constante evaluamos si existe el producto para no agregarlo y sino
            // existe se agrega
            const productInCart: ProductInCart = oldState[product.id] || { count: 0, ...product }
            if (Math.max(productInCart.count + count, 0) > 0) {
                productInCart.count += count
                return {
                    ...oldState,
                    [product.id]: productInCart
                }
            }




            const { [product.id]: toDelete, ...rest } = oldState
            return { ...rest }




            // if (count === 0) {
            //     const { [product.id]: toDelete, ...rest } = oldState
            //     return { ...rest }

            // }

            // return {
            //     ...oldState,
            //     [product.id]: { count, ...product }
            // }
        })

    }



    return {
        shoppingCart,
        onProductCountChange,
    }


}