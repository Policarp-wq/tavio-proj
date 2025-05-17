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
import { ILogininfo } from "../../models/ILoginInfo";
import { useNavigate } from "react-router-dom";

export type THeaderProps = {
    onSearchChange: (s: string) => void
}

export const Header = ({onSearchChange} : THeaderProps) => {
    const navigate = useNavigate();
    const handleSearch = (s: string) =>{
        onSearchChange(s);
        navigate("/");
    };
    return (
        <header className={style.header}>
            <Logo/>
            <SearchBar onSearch={handleSearch} clearOnSearch={true}/>
            <ProfileSection></ProfileSection>
        </header>
    );
}            