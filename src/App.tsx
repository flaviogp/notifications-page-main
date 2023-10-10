import { useState } from "react";
import Main from "./containers/Main/Main";
import {data} from './data/data'
import { IData } from "./interfaces/interfaces";
export default function App() {

  const [notifications, setNotifications] = useState<IData>([...data])

  return (
      <Main notifications={notifications} setNotifications={setNotifications}/>
  )
}