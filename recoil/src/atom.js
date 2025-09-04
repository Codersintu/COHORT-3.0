import { atom, selector } from "recoil";
import {axios} from "axios"
export const notification=atom({
    key:"networkAtom",
//     If default is a selector → atom asks the selector “hey, what’s my initial value?”.
// That’s why Recoil allows selectors inside default.
    default:selector({
        key:"networkatomselector",
        get:async ()=>{
            const res=await axios.get("https://sum-server.100xdevs.com/notifications")
            return res.data;
        }
    })
})

export const sumSelector=selector({
    key:"sumSelector",
    get:function ({get}) {
        const notificationselector=get(notification.notification)
        const meesageselector=get(messageAtom.message)
        let sum=notificationselector+meesageselector;
        return sum;
    }
})