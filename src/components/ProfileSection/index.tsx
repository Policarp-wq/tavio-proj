import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, getUserState } from "../../store/store";
import { loginUser } from "../../slices/userSlice";
import * as style from "../../styles/profile_section/profile_section.module.scss"

export type TProfileSectionProps = {

} 

export const ProfileSection = ({} : TProfileSectionProps) =>{
    const user = useSelector(getUserState);
    return (
        <div className={style["profile-section"]}>
            <a href="#" className={style["profile-section__offer-create"]}>Создать объявление</a>
            <img className={style["profile-section__avatar"]} src={user.authed? user.user?.iconUrl : "none"}/>
            <a href="#" className={style["profile-section__name"]}>{user.authed ? user.user?.name : "pizda"}</a>
        </div>
    );
}