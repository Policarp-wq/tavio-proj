import { useSelector } from "react-redux"
import * as style from "../../styles/avatar/avatar.module.scss"
import { getUserState } from "../../store/store"

export type TAvatarProps = {
}

export const Avatar = () => {
    const user = useSelector(getUserState);
    return user.authed ? 
        <img className={style.avatar} src={user.user?.iconUrl} alt="user icon"/>
        :
        <div className={style["no-image"]}/>
}