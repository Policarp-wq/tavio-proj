import { ReactHTMLElement, ReactNode, useEffect } from "react";
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
    const dispatch = useDispatch<AppDispatch>();
    dispatch(loginUser(User));
    return (
        <header className={style.header}>
            <Logo/>
            <SearchBar onSearch={(s) => alert(s)} clearOnSearch={true}/>
            <ProfileSection></ProfileSection>
        </header>
    );
}