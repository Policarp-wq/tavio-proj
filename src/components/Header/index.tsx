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

export type THeaderProps = {
    onSearchChange: (s: string) => void
}

export const Header = ({onSearchChange} : THeaderProps) => {
    const dispatch = useDispatch<AppDispatch>();
    dispatch(loginUser(User));
    const handleSearch = (s: string) =>{
        onSearchChange(s);
    };
    return (
        <header className={style.header}>
            <Logo/>
            <SearchBar onSearch={handleSearch} clearOnSearch={true}/>
            <ProfileSection></ProfileSection>
        </header>
    );
}