import { ChangeEvent, FormEvent, useState, useEffect } from "react";
import * as registerFormStyle from "../../../styles/register-form/register-form.module.scss";
import * as userFormStyle from "../../../styles/user-form/user-form.module.scss";
import clsx from "clsx";
import { ILogininfo } from "../../../models/ILoginInfo";
import { loginUser, registerUser } from "../../../slices/userSlice";
import { AsyncThunkAction, ThunkDispatch } from "@reduxjs/toolkit";
import { UnknownAction } from "redux";
import { IUser } from "../../../models/IUser";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store/store";
import { useNavigate } from "react-router-dom";
import { IRegisterInfo } from "../../../models/IRegisterInfo";

export const RegisterForm = () => {
    const [user, setUser] = useState({
        login: "",
        password: "",
        name: "",
        phone: "",
    });
    const [isFormValid, setIsFormValid] = useState(false);
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUser((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!isFormValid) return;
        try {
            const userData = await dispatch(registerUser(user as IRegisterInfo)).unwrap();
            navigate("/"); 
        } catch (err: any) {
            alert(err.message || "Ошибка входа");
        }
    };

    useEffect(() => {
        const isLoginValid = user.login.trim().length > 0;
        const isPasswordValid = user.password.trim().length > 0;
        const isNameValid = user.name.trim().length > 0;
        const isPhoneValid = user.phone.trim().length > 0 && !isNaN(Number(user.phone));
        setIsFormValid(isLoginValid && isPasswordValid && isNameValid && isPhoneValid);
    }, [user]);

    return (
        <form onSubmit={handleSubmit} className={userFormStyle["user-form"]}>
            <h1 className={userFormStyle["user-form__title"]}>Регистрация</h1>
            <label>
                <input
                    value={user.login}
                    name="login"
                    type="text"
                    onInput={handleInputChange}
                    placeholder="Логин"
                    className={userFormStyle["user-form__input"]}
               
                />
            </label>
            <label>
                <input
                    value={user.password}
                    name="password"
                    type="password"
                    onInput={handleInputChange}
                    placeholder="Пароль"
                    className={userFormStyle["user-form__input"]}
                />
            </label>
            <label>
                <input
                    value={user.name}
                    name="name"
                    type="text"
                    onInput={handleInputChange}
                    placeholder="ФИО"
                    className={userFormStyle["user-form__input"]}
                />
            </label>
            <label>
                <input
                    value={user.phone}
                    name="phone"
                    type="text"
                    onInput={handleInputChange}
                    placeholder="Телефон"
                    className={userFormStyle["user-form__input"]}
                />
            </label>
            <button type="submit" disabled={!isFormValid}  className={ clsx(userFormStyle["user-form__button"], userFormStyle["user-form__button_positive"], registerFormStyle["register-form__confirm-button"])}>
                Подтвердить
            </button>
        </form>
    );
};

