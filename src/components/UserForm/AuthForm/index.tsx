import { ChangeEvent, FormEvent, useState } from "react"
import { text } from "stream/consumers"

export const AuthForm = () =>{
    const [user, setUser] = useState({
        login: "",
        password: "",
    });
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) =>{
        const {name, value} = e.target;
        setUser(prev => ({...prev, [name]: value}));
    }
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        alert(user);
    }
    return (
        <form onSubmit={handleSubmit}>
            <h1>Вход</h1>
            <input value={user.login} name="login" type="text" onInput={handleInputChange} placeholder="Логин"/>
            <input value={user.password} name="password" type="password" onInput={handleInputChange} placeholder="Пароль"/>
            <button type="submit">Подтвердить</button>
            <button type="button">Создать аккаунт</button>
        </form>
    )
}