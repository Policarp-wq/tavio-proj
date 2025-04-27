import { useState } from "react"
import { MenuElement } from "../../models/Types/types"
import clsx from "clsx"
import * as style from "../../styles/aside/aside.module.scss"

export type TAsideMenuProps = {
    items: MenuElement[]
}

export const AsideMenu = ({items} : TAsideMenuProps) => {
    const [opened, setOpened] = useState(false);
    console.log(style)
    return(
    <aside className={clsx(style.aside)}>
        <h2 className={style.aside__title}>Категории</h2>
        <ul className={style.aside__list}>
        {
            items.map((item, index) => (
                <li key={index} onClick={() => setOpened(true)}>{item.text}</li>
            ))
        }
        </ul>
    </aside>
    )
    
}