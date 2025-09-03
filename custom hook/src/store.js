// # Atom
// Atoms are units of state that can be read from and written to from any component. When an atom’s state changes, all components that subscribe to that atom will re-render.

import { atom, selector } from "recoil";

export const counterAtom=atom({
    key:"counter",
    default:0
})

// derived selector
export const evenSelector=selector({
    key:"isEvenSelector",
    get:function ({get}) {
        const currentselector=get(counterAtom)
        const isEven=(currentselector % 2==0)
        return isEven;
    }
})