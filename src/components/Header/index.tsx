import { ReactHTMLElement, ReactNode } from "react";
import { DropDown, } from "../DropDown";
import { Logo } from "../Logo";
import { SearchBar } from "../SearchBar";
import { MenuElement } from "../../models/Types/types";
import { AsideMenu } from "../AsideMenu";

import * as style from "../../styles/header/header.module.scss"
import { ProfileSection } from "../ProfileSection";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { loginUser } from "../../slices/userSlice";
import { User } from "../../models/constants";

export const Header = () => {
    const dropDownElements: MenuElement[] = [{text: "huy", body: "pizdos"}, {text: "sans", body: "bad time ya know"}]
    const dispatch = useDispatch<AppDispatch>();
    dispatch(loginUser(User));
    return (
        <div className={style.header}>
            <Logo/>
            <SearchBar onSearch={(s) => alert(s)} clearOnSearch={true}/>
            <DropDown onElementClicked={(v: string) => alert(v)} items={dropDownElements}/>
            <ProfileSection></ProfileSection>
        </div>
    );
}