import { CSSProperties, useCallback, useContext } from "react"
import { ProductContext } from "./ProductCard"
import styles from '../styles/styles.module.css'



export interface Props {
    className?: string
    style?: CSSProperties
}

export const ProductButtons = ({ className, style }: Props) => {

    // TODO: maxCount
    const { increaseBy, counter, maxCount } = useContext(ProductContext)

    // TODO: isMaxReached = useCallback, dependencias [counter, maxCount]
    const isMaxReached = useCallback(
        () => !!maxCount && counter === maxCount,
        [counter, maxCount])

    return (
        <div
            style={style}
            className={`${styles.buttonsContainer} ${className}`}>

            <button
                onClick={() => increaseBy(-1)}
                className={styles.buttonMinus}>-</button>

            <div className={styles.countLabel}>{counter}</div>

            <button
                className={`${styles.buttonAdd} ${isMaxReached() ? styles.disabled : ''}`}
                onClick={() => increaseBy(+1)}
            >+</button>

        </div>
    )
}