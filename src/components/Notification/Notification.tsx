import { INotification } from "../../interfaces/interfaces";



export default function Notification({ 
    user,
    userImage,
    action,
    act,
    content,
    dateTime,
    read
}: INotification
) {
    return (
        <div className="notification">
            <img src={userImage} alt="user image" />
            <div className="notification-content">
                <h3>{user}</h3>
                <p>{action}</p>
                {act && <p>{act}</p>}
            </div>
            <span className="date-time">{dateTime}</span>
            {
                typeof content !== 'undefined' &&
                content.item === 'image'
                ?
                <div className="image">
                    <img src={content.content} alt="" />
                </div>
                :
                <div className="message">
                    <img src={content?.content} alt="" />
                    <p>{content?.content}</p>
                </div>
                
            }
        </div>
    )
}


