export interface IContent {item: string, content: string}

export interface INotification {
    user: string
    userImage: string
    action: string
    act?: string,
    content?: IContent
    dateTime: string
    read: boolean
}
export type IData = INotification[] 
