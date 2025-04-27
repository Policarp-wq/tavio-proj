import { MouseEventHandler, ReactNode, SyntheticEvent } from "react";
import { MenuElement } from "../../models/Types/types";
export type TDropDownProps = {
    items: MenuElement[];
    onElementClicked: (element: any) => void;
}


export const DropDown = ({items, onElementClicked} : TDropDownProps) =>{
    return (
        <ul>
            {items.map((item,index) => (
                <li key={index} onClick={() => onElementClicked(item.body)}>{item.text}</li>
            ))}
        </ul>
    )
}