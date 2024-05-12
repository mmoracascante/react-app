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
                            onChange={onProductCountChange}
                            value={shoppingCart[product.id]?.count || 0}
                        >
                            <ProductImage className='custom-image' style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
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
                            className='bg-dark text-white'
                            style={{ width: '100px' }}
                            value={product.count}
                            onChange={onProductCountChange}
                        >
                            <ProductImage className='custom-image' style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
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
