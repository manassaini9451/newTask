import {v4 as uuidv4} from "uuid"

const initialData =[
    {
        id:uuidv4(),
        name:"root",
        type:"folder",
        isOpen:false,
        children:[],
    }
]

export default initialData