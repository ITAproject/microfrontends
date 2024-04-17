import {useEffect, useState} from "react";

const Notifications = () => {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        const fetchNotifications = async () => {
            try {
                const response = await fetch(`http://localhost:3003/notifications`);
                const data = await response.json();
                console.log(data)
                setNotifications(data);
            } catch (error) {
                console.error('Error fetching notifications', error);
            }
        };
        fetchNotifications();
    }, []);

    const deleteNotification = async (notificationId) => {
        try {
            await fetch(`http://localhost:3003/notifications/${notificationId}`, {
                method: 'DELETE',
            });
            setNotifications(notifications.filter(notification => notification.id !== notificationId));
            alert('Obvestilo izbrisano')
        } catch (error) {
            console.error('Error deleting notifications', error);
        }
    };

    return (
        <div>
            <h1 style={{ color: 'grey', marginTop: '30px' }}>Obvestila:</h1>
            {notifications.map(notification => (
                <div key={notification.id} style={{ marginBottom: '20px', padding: '10px', backgroundColor: '#f7f7f7', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                    <h2 style={{ color: '#333', marginBottom: '10px' }}>{notification.message}</h2>
                    <button style={{ backgroundColor: '#ff5f5f', color: '#fff', border: 'none', padding: '8px 12px', borderRadius: '5px', cursor: 'pointer' }} onClick={() => deleteNotification(notification.id)}>IZBRIŠI OBVESTILO</button>
                </div>

            ))}
        </div>
    );
}

export default Notifications