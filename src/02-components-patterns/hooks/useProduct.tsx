import { useState } from "react"

export const useProduct = () => {
    const [counter, setCounter] = useState(0)


    const handleAddCounter = () => {
        setCounter(counter + 1)
    }

    const handleMinusCounter = () => {
        if (counter === 0) return
        setCounter(counter - 1)
    }




    return {
        counter,
        handleAddCounter,
        handleMinusCounter
    }
}