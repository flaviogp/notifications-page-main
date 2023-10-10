import { IData } from "../../interfaces/interfaces"

interface HeaderProps {
  notifications: IData
  setNotifications: (arg: IData) => void
}

export default function Header({notifications, setNotifications}: HeaderProps) {

    const handleClick = () => {

      const newNotifications = [...notifications]
      newNotifications.map(item => item.read = true)

      setNotifications(newNotifications);
    }

    const countNotificationsNotRead = (): number => {
      let count = 0;
      notifications.map(item => !item.read && count++);
      return count
    }
    return (
      <header role='banner'>

        <div className="notifications-count">
          <h1>Notifications</h1>
          <span>{countNotificationsNotRead()}</span>
        </div>

        <button onClick={() => handleClick()}>Mark all as read</button>

      </header>
    )
  }
  