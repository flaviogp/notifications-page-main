import { INotification } from "../../interfaces/interfaces";

export interface NotificationProps extends INotification {
    handleClick: (user: string, action: string) => void;
}

export default function Notification({ 
    user,
    userImage,
    action,
    act,
    content,
    dateTime,
    read,
    handleClick
}: NotificationProps
) {
    return (
        <div className={!read ? 'notification notification-notread' : 'notification notification-read'} onClick={() => handleClick(user, action)}>
            <img src={userImage} alt="user image" />

            <div className="notification-content">
                <div className="notification-status">
                    <p>
                        <b>{user}</b>
                        {action}
                        {act && <span className='act'>{act}</span>}
                        {!read && <span className="new-notification"></span>}
                    </p>
                    <span className="date-time">{dateTime}</span>
                </div>
            
                <div className="content">
                {
                    content?.item === 'image'
                    ?
                    <div className="image">
                        <img src={content?.content} alt="" />
                    </div>
                    : content?.item === 'message' &&
                    <div className="message">
                        <p>{content?.content}</p>
                    </div>
                    
                }
                </div>

            </div>
        </div>
    )
}


