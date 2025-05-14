
import { IUser } from "../../models/IUser";
import * as style from "../../styles/user_stats/user_stats.module.scss"
import { Avatar } from "../Avatar";

export type TUserStats = {
    user: IUser
}

export const UserStats = ({user} : TUserStats) => {
    // Преобразуем строку в Date, если это строка
    const regDate = typeof user.registerDate === "string"
        ? new Date(user.registerDate)
        : user.registerDate;

    return (
        <>
            <div className={style["user-stats"]}>
                <div className={style["user-stats__title"]}>
                    <h4 className={style["user-stats__name"]}>{user.name}</h4>
                    <Avatar src={user.iconUrl}/>
                 </div>
                <p>{"Рейтинг: " + user.rating}</p>
                <p>{"Помогает экологии с " + regDate.getFullYear()}</p>
            </div>
        </>
    )
}