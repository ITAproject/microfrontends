import React, { useState } from 'react';
import axios from 'axios';

const AddDiscount = () => {
    const [discount, setDiscount] = useState({
        productId: '',
        discount: ''
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setDiscount(prevDiscount => ({
            ...prevDiscount,
            [name]: value
        }));
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const response = await axios.post(process.env.REACT_APP_WEB_API_GATEWAY_URL + '/discounts', discount);
            console.log('Discount added:', response.data);
            alert('Popust dodan');
            // reload page if necessary
            window.location.reload();

        } catch (error) {
            console.error('Error adding discount:', error);
        }
    };

    return (
        <div>
            <h2 style={{ color: 'grey'}}>Dodaj popust</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Produkt ID:
                    <input
                        type="text"
                        name="productId"
                        value={discount.productId}
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
                    Popust:
                    <input
                        type="number"
                        name="discount"
                        value={discount.discount}
                        min={0}
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
                <button style={{ backgroundColor: '#1ca0ea', color: '#fff', border: 'none', padding: '5px 10px', cursor: 'pointer' }} type="submit">Dodaj</button>
            </form>
        </div>
    );
};

export default AddDiscount;
