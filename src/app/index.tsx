import { BrowserRouter } from "react-router-dom";
import { Header } from "../components/Header";
import { SearchBar } from "../components/SearchBar";
import clsx from 'clsx';
import { Main } from "../components/Main";
import * as style from "../styles/index.module.scss"
import { Provider } from "react-redux";
import { store } from "../store/store";

export const App = () => {
    // window.innerWidth | order in css
    return (
        <div className={style.root}>
            <Provider store={store}>
                <Header>
                </Header>
                <Main></Main>
            </Provider>
        </div>
    )
}