import { useContext } from "react"
import { AppContext } from "../App"
import { ChangeProfile } from "./ChangeProfile"

export const Menu = () => {

   
    const {username} = useContext(AppContext)

    return (
        <div>
            <h1>This is the Menu page and the name is : {username}</h1>
            <ChangeProfile />
        </div>
    )
}