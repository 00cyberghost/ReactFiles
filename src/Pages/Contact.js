import { useContext } from "react"
import { AppContext } from "../App"

export const Contact = () => {

    const {username} = useContext(AppContext)

    return (
        <div>
            <h1>This is the Contact page and the name is : {username}</h1>
        </div>
    )
}