import { Props as ProductButtonsProps } from "../components/ProductButtons";
import { Props as ProductCardProps } from "../components/ProductCard";
import { Props as ProductImageProps } from "../components/ProductImage";
import { Props as ProductTitleProps } from "../components/ProductTitle";




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
    Title: (Props: ProductTitleProps) => JSX.Element
    Image: (Props: ProductImageProps) => JSX.Element
    Buttons: (Props: ProductButtonsProps) => JSX.Element
}