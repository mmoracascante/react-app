import { CSSProperties, useContext } from "react"
import { ProductContext } from "./ProductCard"
import styles from '../styles/styles.module.css'



export interface Props {
    className?: string
    style?: CSSProperties
}

export const ProductButtons = ({ className, style }: Props) => {

    const { handleAddCounter, handleMinusCounter, counter } = useContext(ProductContext)

    return (
        <div
            style={style}
            className={`${styles.buttonsContainer} ${className}`}>
            <button
                onClick={handleMinusCounter}
                className={styles.buttonMinus}>-</button>
            <div className={styles.countLabel}>{counter}</div>
            <button
                onClick={handleAddCounter}
                className={styles.buttonAdd}>+</button>

        </div>
    )
}