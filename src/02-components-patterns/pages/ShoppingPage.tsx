import { useState } from "react"
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"
import { useShoppingCart } from "../hooks/useShoppingCart";
import { products } from "../data/products";
import '../styles/custom-styles.css'








export const ShoppingPage = () => {


    const { onProductCountChange, shoppingCart } = useShoppingCart()


    return (
        <div>
            <h1>ShoppingPage</h1>
            <hr />

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                {
                    products.map(product => (
                        <ProductCard
                            key={product.id}
                            className='bg-dark text-white'
                            product={product}
                            value={shoppingCart && shoppingCart[product.id] && shoppingCart[product.id]?.count || 0}
                            onChange={onProductCountChange}
                        >
                            <ProductImage className='custom-image' />
                            <ProductTitle />
                            <ProductButtons className='custom-buttons' />
                        </ProductCard>

                    ))
                }



            </div>
            <div className="shopping-card">


                {
                    Object.entries(shoppingCart).map(([key, product]) => (
                        <ProductCard
                            key={key}
                            product={product}
                            value={product.count}
                            onChange={(event) => onProductCountChange(event)}
                            style={{
                                width: '100px'
                            }}
                            className='bg-dark text-white'
                        >
                            <ProductImage className='custom-image' />
                            <ProductButtons
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}
                                className='custom-buttons'
                            />
                        </ProductCard>
                    ))
                }


            </div>


        </div>
    )
}
