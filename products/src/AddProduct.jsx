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
            <h2  style={{ color: 'grey'}}>Dodaj produkt</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Ime:
                    <input
                        type="text"
                        name="name"
                        value={product.name}
                        onChange={handleChange}
                        required
                        style={{
                            padding: '8px 12px',
                            borderRadius: '5px',
                            border: '1px solid #ccc',
                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                            boxSizing: 'border-box',
                            width: '100%',
                            marginTop: '5px',
                            marginBottom: '10px'
                        }}
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
                        style={{
                            padding: '8px 12px',
                            borderRadius: '5px',
                            border: '1px solid #ccc',
                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                            boxSizing: 'border-box',
                            width: '100%',
                            marginTop: '5px',
                            marginBottom: '10px'
                        }}
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
                        min={0}
                        style={{
                            padding: '8px 12px',
                            borderRadius: '5px',
                            border: '1px solid #ccc',
                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                            boxSizing: 'border-box',
                            width: '100%',
                            marginTop: '5px',
                            marginBottom: '10px'
                        }}
                    />
                </label>
                <br />
                <button style={{ backgroundColor: '#1ca0ea', color: '#fff', border: 'none', padding: '5px 10px', cursor: 'pointer' }} type="submit">Dodaj</button>
            </form>
        </div>
    );
};

export default AddProduct;
