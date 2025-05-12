import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "../components/Header";
import { SearchBar } from "../components/SearchBar";
import clsx from 'clsx';
import { Main } from "../components/Main";
import * as style from "../styles/index.module.scss"
import { Provider } from "react-redux";
import { store } from "../store/store";
import { useState } from "react";

export const App = () => {
    // window.innerWidth | order in css
    const [searchQuery, setQuery] = useState("");
    return (
        <div className={style.root}>
            <Provider store={store}>
                <Header onSearchChange={setQuery}>
                </Header>
                <Main query={searchQuery}></Main>
            </Provider>
        </div>
    )
}