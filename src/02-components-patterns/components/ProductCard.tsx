import styles from '../styles/styles.module.css'

import { CSSProperties, ReactElement, ReactNode, createContext } from 'react'
import { useProduct } from '../hooks/useProduct'
import { ProductContextProps, Product, onChangeArgs, InitialValues, ProductCardHandlers } from '../interfaces/interfaces'
import { ProductTitle } from './ProductTitle'
import { ProductImage } from './ProductImage'
import { ProductButtons } from './ProductButtons'





export const ProductContext = createContext({} as ProductContextProps)

const { Provider } = ProductContext

export interface Props {
    // children?: ReactElement | ReactElement[]
    children: (args: ProductCardHandlers) => JSX.Element
    className?: string
    initialValues?: InitialValues
    onChange?: (args: onChangeArgs) => void
    product: Product
    style?: CSSProperties
    value?: number
}




export const ProductCard = ({ product, children, className, style, onChange, value, initialValues }: Props) => {


    const { increaseBy, counter, maxCount, isMaxCountReached, reset } = useProduct({
        onChange,
        product,
        value,
        initialValues,
    })



    return (
        <Provider value={{
            increaseBy,
            counter,
            product,
            maxCount
        }}>
            <div
                style={style}
                className={`${styles.productCard} ${className}`}
            >
                {
                    children({
                        count: counter,
                        isMaxCountReached,
                        maxCount: initialValues?.count,
                        product,

                        increaseBy,
                        reset,
                    })}
            </div>
        </Provider>
    )
}


ProductCard.Title = ProductTitle
ProductCard.Image = ProductImage
ProductCard.Buttons = ProductButtons
