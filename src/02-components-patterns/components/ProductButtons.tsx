import { useContext } from "react"
import { ProductContext } from "./ProductCard"
import styles from '../styles/styles.module.css'

export const ProductButtons = () => {

    const { handleAddCounter, handleMinusCounter, counter } = useContext(ProductContext)

    return (
        <div className={styles.buttonsContainer}>
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