import { ReactElement } from "react"

export interface ProductCardProps {
    product: Product
    children?: ReactElement | ReactElement[]
}


export interface Product {
    id: string
    title: string
    img?: string
}



export interface ProductContextProps {
    handleAddCounter: () => void,
    handleMinusCounter: () => void,
    counter: number,
    product: Product,
}


export interface ProductCardMainProps {
    ({ product, children }: ProductCardProps): JSX.Element;
    Title: ({ title }: { title?: string; }) => JSX.Element
    Image: ({ img }: { img?: string; }) => JSX.Element
    Buttons: () => JSX.Element
}