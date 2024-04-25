import styles from '../styles/styles.module.css'

import { createContext } from 'react'
import { useProduct } from '../hooks/useProduct'
import { ProductContextProps, ProductCardProps } from '../interfaces/interfaces'
import { ProductTitle } from './ProductTitle'
import { ProductImage } from './ProductImage'
import { ProductButtons } from './ProductButtons'





export const ProductContext = createContext({} as ProductContextProps)

const { Provider } = ProductContext




export const ProductCard = ({ product, children }: ProductCardProps) => {


    const { handleAddCounter, handleMinusCounter, counter } = useProduct()



    return (
        <Provider value={{
            handleAddCounter,
            handleMinusCounter,
            counter,
            product,
        }}>
            <div className={styles.productCard}>
                {children}
            </div>
        </Provider>
    )
}


ProductCard.Title = ProductTitle
ProductCard.Image = ProductImage
ProductCard.Buttons = ProductButtons
