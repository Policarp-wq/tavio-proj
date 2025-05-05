import { User } from "../../models/constants";
import { IUser } from "../../models/IUser";
import * as style from "../../styles/user_stats/user_stats.module.scss"
import { Avatar } from "../Avatar";

export type TUserStats = {
    user: IUser
}

export const UserStats = ({user} : TUserStats) => {
    return (
        <>
            <div className={style["user-stats"]}>
                <a href="#" className={style["user-stats__title"]}>
                    <h4 className={style["user-stats__name"]}>{user.name}</h4>
                    <Avatar/>
                 </a>
                <p>{"Рейтинг: " + user.rating}</p>
                <p>{"Помогает экологии с " + user.registerDate.getFullYear()}</p>
                <p>Продаж???</p>
            </div>
                    
        </>
    )
}