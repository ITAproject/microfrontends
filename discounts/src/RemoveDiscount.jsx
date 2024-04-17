import React, { useState } from 'react';
import axios from 'axios';

const RemoveDiscount = () => {
    const [productId, setProductId] = useState('');

    const handleChange = e => {
        setProductId(e.target.value);
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const response = await axios.delete(process.env.REACT_APP_WEB_API_GATEWAY_URL + `/discounts/${productId}`);
            console.log('Discount removed:', response.data);
            alert('Popust odstranjen');
            // reload page if necessary
            window.location.reload();

        } catch (error) {
            console.error('Error removing discount:', error);
        }
    };

    return (
        <div>
            <h2 style={{ color: 'red'}}>Odstrani popust</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Produkt ID:
                    <input
                        type="text"
                        value={productId}
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
                <button style={{ backgroundColor: 'grey', color: '#fff', border: 'none', padding: '5px 10px', cursor: 'pointer' }} type="submit">Odstrani</button>
            </form>
        </div>
    );
};

export default RemoveDiscount;
