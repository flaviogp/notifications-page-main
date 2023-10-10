import Header from "../../components/Header/Header";
import Notification from "../../components/Notification/Notification";
import { IData } from "../../interfaces/interfaces";

interface MainProps{
    notifications: IData
    setNotifications: (args: IData) => void
}

export default function Main({notifications, setNotifications}: MainProps) {
    const handleClick = (user: string, action: string) => {

        const newNotifications = [...notifications]
        const notification = notifications.find(item => item.user === user && item.action === action)

        if(!notification) return;

        const notificationIndex = notifications.indexOf(notification)
        const newNotification = {...notification, read: true}

        newNotifications[notificationIndex] = newNotification

        setNotifications(newNotifications)
    }

  return (
    <main role='main'>
        <Header notifications={notifications} setNotifications={setNotifications}/>
        <div className="content">

        {
            notifications.map(item => {
                return(
                    <Notification 
                        key={`${item.user}${item.action}`}
                        user={item.user}
                        userImage={item.userImage}
                        action={item.action}
                        act={item.act}
                        content={item.content}
                        dateTime={item.dateTime}
                        read={item.read}
                        handleClick={handleClick}
                    />

                )
            })
        }

        </div>
    </main>
  )
}
