import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, getUserState } from "../../store/store";
import { loginUser } from "../../slices/userSlice";

export type TProfileSectionProps = {

} 

export const ProfileSection = ({} : TProfileSectionProps) =>{
    const user = useSelector(getUserState);
    return (
        <div>
            <img src={user.authed? user.user?.iconUrl : "none"}/>
            <h3>{user.authed ? user.user?.name : "pizda"}</h3>
        </div>
    );
}