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
            const response = await axios.post('http://localhost:3003/discounts', discount);
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
            <h2 style={{ color: 'blue'}}>Dodaj popust</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Produkt ID:
                    <input
                        type="text"
                        name="productId"
                        value={discount.productId}
                        onChange={handleChange}
                        required
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
                    />
                </label>
                <br />
                <button type="submit">Dodaj</button>
            </form>
        </div>
    );
};

export default AddDiscount;
