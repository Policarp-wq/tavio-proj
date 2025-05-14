import { useSelector } from "react-redux"
import * as style from "../../styles/avatar/avatar.module.scss"
import { getUserState } from "../../store/store"
import { NO_IMAGE } from "../../models/constants"

export type TAvatarProps = {
    src: string
}

export const Avatar = ({ src } : TAvatarProps) => {
    return <img className={style.avatar} src={src.length > 0 ? src : NO_IMAGE} alt="user icon"/>;
        
        
}