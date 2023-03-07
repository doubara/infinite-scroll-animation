import { createContext } from "react"

const UpdateProgressContext = createContext({
    progress: '',
    setProgress: ()=>{},
})

export default UpdateProgressContext