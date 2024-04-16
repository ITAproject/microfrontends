import React, { useState } from 'react';
import axios from 'axios';

const AddProduct = () => {
    const [product, setProduct] = useState({
        name: '',
        description: '',
        price: 0
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setProduct(prevProduct => ({
            ...prevProduct,
            [name]: value
        }));
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3003/products', product);
            console.log('Product added:', response.data);
            alert('Produkt dodan')
            // reload page
            window.location.reload();

        } catch (error) {
            console.error('Error adding product:', error);
        }
    };

    return (
        <div>
            <h2  style={{ color: 'blue'}}>Dodaj produkt</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Ime:
                    <input
                        type="text"
                        name="name"
                        value={product.name}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                <label>
                    Opis:
                    <textarea
                        name="description"
                        value={product.description}
                        onChange={handleChange}
                        required
                    ></textarea>
                </label>
                <br />
                <label>
                    Cena:
                    <input
                        type="number"
                        name="price"
                        value={product.price}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                <button type="submit">Dodaj</button>
            </form>
        </div>
    );
};

export default AddProduct;
