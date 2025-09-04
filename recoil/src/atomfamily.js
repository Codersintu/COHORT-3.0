import { atomFamily, selectorFamily } from "recoil";
import axios from "axios"

export const TODOS=[
  {
    id:1,
    title:"morning 9-5",
    desc:"so jao bhai"
  },
  {
    id:2,
    title:"morning 90-5",
    desc:"so jao bahan"
  },
  {
    id:3,
    title:"morning 96-5",
    desc:"so jao nhi bhai"
  }
]

// this atom family find todo using id from array TODOS
// export const todoAtomFamily=atomFamily({
//     key:"todosAtomFamily",
//     default: id=>{
//       return TODOS.find(x=>x.id===id)
//     }
       
// })

// now creating todoatomfamily how data will get from backend
export const todoAtomFamily=atomFamily({
    key:"todosAtomFamily",
    default:selectorFamily({
      key:"selectorfamily",
      get:(id)=>async ({get})=>{
        const res=await axios.get(`http://sum-server...`)
        return res.data.todoAtomFamily;
      },
    })
       
});

