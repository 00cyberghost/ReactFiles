import { ChangeProfile } from "./ChangeProfile"

export const Menu = (props) => {

   


    return (
        <div>
            <h1>This is the Menu page and the name is : {props.username}</h1>
            <ChangeProfile setUsername={props.setUsername} />
        </div>
    )
}