import React, { useState } from 'react';
import axios from 'axios';

const AddNotification = () => {
    const [notification, setNotification] = useState({
        message: ''
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setNotification(prevNotification => ({
            ...prevNotification,
            [name]: value
        }));
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const response = await axios.post(process.env.REACT_APP_WEB_API_GATEWAY_URL + '/notifications', notification);
            console.log('Notification added:', response.data);
            alert('Obvestilo dodano');
            // reload page if necessary
            window.location.reload();

        } catch (error) {
            console.error('Error adding notification:', error);
        }
    };

    return (
        <div>
            <h2  style={{ color: 'grey'}}>Objavi obvestilo</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Sporočilo:
                    <input
                        type="text"
                        name="message"
                        value={notification.message}
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
                <button style={{ backgroundColor: '#1ca0ea', color: '#fff', border: 'none', padding: '5px 10px', cursor: 'pointer' }} type="submit">Objavi</button>
            </form>
        </div>
    );
};

export default AddNotification;
