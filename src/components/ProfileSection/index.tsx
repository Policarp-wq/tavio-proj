import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, getUserState } from "../../store/store";
import { loginUser } from "../../slices/userSlice";
import * as style from "../../styles/profile_section/profile_section.module.scss"
import { Avatar } from "../Avatar";
import { Link } from "react-router-dom";

export type TProfileSectionProps = {

} 

export const ProfileSection = ({} : TProfileSectionProps) =>{
    const user = useSelector(getUserState);
    return (
        <div className={style["profile-section"]}>
            {user.authed ?
               <>
                <Link to="/offer-edit/" className={style["profile-section__offer-create"]}>Создать объявление</Link>
               <h1 className={style["profile-section__name"]}>{user.user?.name}</h1>
                <Avatar src={user.user!.iconUrl}/>
               </>
              : <Link to="/login" className={style["profile-section__name"]}>Авторизоваться</Link>}
        </div>
    );
}