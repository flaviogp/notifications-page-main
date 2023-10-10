import ImageMarkWebber from '../assets/images/avatar-mark-webber.webp'
import ImageAngelaGray from '../assets/images/avatar-angela-gray.webp'
import ImageJacobThompson from '../assets/images/avatar-jacob-thompson.webp'
import ImageRiskyHasamuddin from '../assets/images/avatar-rizky-hasanuddin.webp'
import ImageKimberlySmith from '../assets/images/avatar-kimberly-smith.webp'
import ImageNathanPeterson from '../assets/images/avatar-nathan-peterson.webp'
import ImageAnnaKim from '../assets/images/avatar-anna-kim.webp'
import Imagechess from '../assets/images/image-chess.webp'


export const data = [
    {
        user: 'Mark Webber',
        userImage: ImageMarkWebber,
        action: 'reacted to your recent post',
        act: 'My first tournament today!',
        dateTime: '1m ago',
        read: false
    },
    {
        user: 'Angela Gray',
        userImage: ImageAngelaGray,
        action: 'followed you',
        dateTime: '5m ago',
        read: false
    },
    {
        user: 'Jacob Thompson',
        userImage: ImageJacobThompson,
        action: 'has joined your group',
        act: 'Chess Club',
        dateTime: '1 day ago',
        read: false
    },
    {
        user: 'Risky Hasamuddin',
        action: 'send dyou a private message',
        userImage: ImageRiskyHasamuddin,
        content: {
            item: 'message',
            content: "Hello thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game",
        },
        dateTime: '5 days ago',
        read: false
    },
    {
        user: 'Kimberly Smith',
        userImage: ImageKimberlySmith,
        action: 'comment your picture',
        content: {
            item: 'image',
            content: Imagechess
        },
        dateTime: '1 week ago',
        read: false
    },
    {
        user: 'Nathan Peterson',
        userImage: ImageNathanPeterson,
        action: 'reacted to your recent post',
        act: '5 end-game strategies to increase your win rate',
        dateTime: '2 weeks ago',
        read: false
    },
    {
        user: 'Anna Kim',
        userImage: ImageAnnaKim,
        action: 'left the group',
        act: 'Chess Club',
        dateTime: '2 weeks ago',
        read: false
    }
]