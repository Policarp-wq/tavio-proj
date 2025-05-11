import { ChangeEvent, FormEvent, useState } from "react"
import { text } from "stream/consumers"

export const RegisterForm = () =>{
    const [user, setUser] = useState({
        login: "",
        password: "",
        name: "",
        phone: ""
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
            <h1>Регистрация</h1>
            <input value={user.login} name="login" type="text" onInput={handleInputChange} placeholder="Логин"/>
            <input value={user.password} name="password" type="password" onInput={handleInputChange} placeholder="Пароль"/>
            <input value={user.name} name="name" type="text" onInput={handleInputChange} placeholder="ФИО"/>
            <input value={user.phone} name="phone" type="number" onInput={handleInputChange} placeholder="Телефон"/>
            <button type="submit">Подтвердить</button>
        </form>
    )
}