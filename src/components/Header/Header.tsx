import { IData } from "../../interfaces/interfaces"

interface HeaderProps {
  notifications: IData
}

export default function Header({notifications}: HeaderProps) {

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

        <button>Mark all as read</button>

      </header>
    )
  }
  