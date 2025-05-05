import React, { ReactNode, useState } from "react"
import * as style from "../../styles/selectable_list/selectable_list.module.scss"

export type TSelectableListProps = {
    children: ReactNode,
    onItemSelected? : (el : HTMLLIElement, ind: number, prev?: HTMLLIElement) => void;
    className?: string,
    selectFirst? : boolean;
}

export const SelectableList = ({children, onItemSelected,  className="", selectFirst = false} : TSelectableListProps) => {
    const items: HTMLLIElement[] = [];
    const [lastSelected, setLast] = useState(-1);
    const onChildSelected = (ind: number) => {
        if(items.length == 0)
            return;
        if(ind != lastSelected && onItemSelected){
            console.log(lastSelected)
            onItemSelected(items[ind], ind, lastSelected != -1 ? items[lastSelected] : undefined);
        }
        setLast(ind);
    }
    if(selectFirst){
        onChildSelected(0);
    }
    return (
        <ul className={className}>
            {React.Children.map(children, (child, ind) => (
                <li className={style.item} ref={el => { if (el) items.push(el); }} key={ind} onClick={() => onChildSelected(ind)}>{child}</li>
            ))}
        </ul>
    )
}