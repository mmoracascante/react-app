import styles from '../styles/styles.module.css'

import { CSSProperties, ReactElement, createContext } from 'react'
import { useProduct } from '../hooks/useProduct'
import { ProductContextProps, Product } from '../interfaces/interfaces'
import { ProductTitle } from './ProductTitle'
import { ProductImage } from './ProductImage'
import { ProductButtons } from './ProductButtons'





export const ProductContext = createContext({} as ProductContextProps)

const { Provider } = ProductContext

export interface Props {
    product: Product
    children?: ReactElement | ReactElement[]
    className?: string
    style?: CSSProperties
}




export const ProductCard = ({ product, children, className, style }: Props) => {


    const { handleAddCounter, handleMinusCounter, counter } = useProduct()



    return (
        <Provider value={{
            handleAddCounter,
            handleMinusCounter,
            counter,
            product,
        }}>
            <div
                style={style}
                className={`${styles.productCard} ${className}`}
            >
                {children}
            </div>
        </Provider>
    )
}


ProductCard.Title = ProductTitle
ProductCard.Image = ProductImage
ProductCard.Buttons = ProductButtons
