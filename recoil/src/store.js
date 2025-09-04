import { atom, selector } from "recoil";

export const notificationAtom=atom({
    key:"notification",
    default:"102"
})


export const messageAtom=atom({
    key:"message",
    default:"10"
})


export const jobAtom=atom({
    key:"job",
    default:"0"
})


export const mynetworkAtom=atom({
    key:"network",
    default:"12"
})

// selector
export const sumSelector=selector({
    key:"sumSelector",
    get:function ({get}) {
        const notificationselector=get(notificationAtom)
        const meesageselector=get(messageAtom)
        let sum=notificationselector+meesageselector;
        return sum;
    }
})


