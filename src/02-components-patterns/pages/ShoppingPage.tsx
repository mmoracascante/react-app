import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"



const product = {
    id: '1',
    title: 'Coffe mug - Card'
}


export const ShoppingPage = () => {
    return (
        <div>
            <h1>ShoppingPage</h1>
            <hr />

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>

                {/* //? Esto es el compount component pattern */}
                <ProductCard product={product}>
                    <ProductCard.Image />
                    <ProductCard.Title />
                    <ProductCard.Buttons />

                </ProductCard>

            </div>
        </div>
    )
}
