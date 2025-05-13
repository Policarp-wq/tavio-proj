import { ChangeEvent, FormEvent, useState, useEffect } from "react";

import * as userFormStyle from "../../../styles/user-form/user-form.module.scss"
import * as authFormStyle from "../../../styles/auth-form/auth-form.module.scss"
import clsx from "clsx";
import { loginUser } from "../../../slices/userSlice";
import { ILogininfo } from "../../../models/ILoginInfo";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store/store";
import { useNavigate } from "react-router-dom";

export const AuthForm = () => {
    const [user, setUser] = useState({
        login: "",
        password: "",
    });
    const [isFormValid, setIsFormValid] = useState(false);
    const dispatch = useDispatch<AppDispatch>();
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUser((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!isFormValid) return;
        try {
            const userData = await dispatch(loginUser(user as ILogininfo)).unwrap();
            navigate("/"); 
        } catch (err: any) {
            alert(err.message || "Ошибка входа");
        }
    };

    useEffect(() => {
        const isLoginValid = user.login.trim().length > 0;
        const isPasswordValid = user.password.trim().length > 0;
        setIsFormValid(isLoginValid && isPasswordValid);
    }, [user]);
    const navigate = useNavigate();
    const handleCreateAcc = () =>{
        navigate("/register");
    }

    return (
        <form onSubmit={handleSubmit} className={userFormStyle["user-form"]}>
            <h1 className={userFormStyle["user-form__title"]}>Вход</h1>
            <label ><input
                value={user.login}
                name="login"
                type="text"
                onInput={handleInputChange}
                placeholder="Логин"
                className={userFormStyle["user-form__input"]}
            /></label>
            
            <label ><input
                value={user.password}
                name="password"
                type="password"
                onInput={handleInputChange}
                placeholder="Пароль"
                className={userFormStyle["user-form__input"]}
            /></label>
                <div className={authFormStyle["auth-form__buttons"]}>
                    <button type="submit" disabled={!isFormValid} className={ clsx(userFormStyle["user-form__button"], userFormStyle["user-form__button_positive"])}>
                        Подтвердить
                    </button>
                    <button onClick={handleCreateAcc} type="button" className={ clsx(userFormStyle["user-form__button"], userFormStyle["user-form__button_neutral"])}>Создать аккаунт</button>
                </div>
            </form>
    );
};