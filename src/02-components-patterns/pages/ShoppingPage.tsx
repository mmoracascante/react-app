import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"
import '../styles/custom-styles.css'


const product = {
    id: '1',
    title: 'Coffe mug - Card',
    img: './coffee-mug.png'
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

                <ProductCard
                    className='bg-dark text-white'
                    product={product}
                >
                    <ProductImage className='custom-image' />
                    <ProductTitle />
                    <ProductButtons className='custom-buttons' />
                </ProductCard>

                <ProductCard
                    product={product}
                    style={{
                        background: 'red'
                    }}
                >
                    <ProductImage />
                    <ProductTitle />
                    <ProductButtons />
                </ProductCard>

            </div>
        </div>
    )
}
