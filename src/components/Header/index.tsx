import { ReactHTMLElement, ReactNode } from "react";
import { DropDown, } from "../DropDown";
import { Logo } from "../Logo";
import { SearchBar } from "../SearchBar";
import { MenuElement } from "../../models/Types/types";
import { AsideMenu } from "../AsideMenu";

import * as style from "../../styles/header/header.module.scss"

export const Header = () => {
    const dropDownElements: MenuElement[] = [{text: "huy", body: "pizdos"}, {text: "sans", body: "bad time ya know"}]
    return (
        <div className={style.header}>
            <Logo/>
            <SearchBar onSearch={(s) => alert(s)} clearOnSearch={true}/>
            <DropDown onElementClicked={(v: string) => alert(v)} items={dropDownElements}/>
        </div>
    );
}