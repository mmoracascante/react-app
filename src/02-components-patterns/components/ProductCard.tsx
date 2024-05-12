import styles from '../styles/styles.module.css'

import { CSSProperties, ReactElement, createContext } from 'react'
import { useProduct } from '../hooks/useProduct'
import { ProductContextProps, Product, onChangeArgs } from '../interfaces/interfaces'
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
    onChange?: (args: onChangeArgs) => void
    value?: number
}




export const ProductCard = ({ product, children, className, style, onChange, value }: Props) => {


    const { increaseBy, counter } = useProduct({
        onChange,
        product,
        value,
    })



    return (
        <Provider value={{
            increaseBy,
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
