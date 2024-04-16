import React, { useEffect, useState } from "react";

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(`http://localhost:3003/products`);
                const data = await response.json();
                const productsWithDiscounts = await Promise.all(data.map(async product => {
                    const discountResponse = await fetch(`http://localhost:3003/discounts/${product.id}`);
                    const discountData = await discountResponse.json();
                    return { ...product, discount: discountData.discount };
                }));
                setProducts(productsWithDiscounts);
            } catch (error) {
                console.error('Error fetching products', error);
            }
        };
        fetchProducts();
    }, []);

    const deleteProduct = async (productId) => {
        try {
            await fetch(`http://localhost:3003/products/${productId}`, {
                method: 'DELETE',
            });
            setProducts(products.filter(product => product.id !== productId));
            alert('Produkt izbrisan');
        } catch (error) {
            console.error('Error deleting product', error);
        }
    };

    return (
        <div>
            <h1>Produkti:</h1>
            {products.map(product => (
                <div key={product.id}>
                    <h2>{product.name}</h2>
                    <p>Opis: {product.description}</p>
                    <p>Cena: {product.price}</p>
                    {product.discount > 0 ? <p>Popust: {product.discount}%</p>: null}
                    <button onClick={() => deleteProduct(product.id)}>IZBRIŠI PRODUKT</button>
                </div>
            ))}
        </div>
    );
}

export default Products;
