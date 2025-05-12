import { ChangeEvent, FormEvent, useState, useEffect } from "react";
import * as registerFormStyle from "../../../styles/register-form/register-form.module.scss";
import * as userFormStyle from "../../../styles/user-form/user-form.module.scss";
import clsx from "clsx";

export const RegisterForm = () => {
    const [user, setUser] = useState({
        login: "",
        password: "",
        name: "",
        phone: "",
    });
    const [isFormValid, setIsFormValid] = useState(false);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUser((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (!isFormValid) return;
        alert(JSON.stringify(user));
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