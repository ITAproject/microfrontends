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
            <h1>Obvestila:</h1>
            {notifications.map(notification => (
                <div key={notification.id}>
                    <h2>{notification.message}</h2>
                    <button onClick={() => deleteNotification(notification.id)}>IZBRIŠI OBVESTILO</button>
                </div>
            ))}
        </div>
    );
}

export default Notifications