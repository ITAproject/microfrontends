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
            const response = await axios.post('http://localhost:3003/notifications', notification);
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
            <h2  style={{ color: 'blue'}}>Objavi obvestilo</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Sporočilo:
                    <input
                        type="text"
                        name="message"
                        value={notification.message}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                <button type="submit">Objavi</button>
            </form>
        </div>
    );
};

export default AddNotification;
