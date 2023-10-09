import Header from "../../components/Header/Header";
import Notification from "../../components/Notification/Notification";
import { IData } from "../../interfaces/interfaces";

interface MainProps{
    notifications: IData
    setNotifications: (args: IData) => void
}

export default function Main({notifications, setNotifications}: MainProps) {
  return (
    <main role='main'>
        <Header notifications={notifications}/>
        <div className="content">

        {
            notifications.map(item => {
                return(
                    <Notification 
                        user={item.user}
                        userImage={item.userImage}
                        action={item.action}
                        act={item.act}
                        content={item.content}
                        dateTime={item.dateTime}
                        read={item.read}
                    />

                )
            })
        }

        </div>
    </main>
  )
}
