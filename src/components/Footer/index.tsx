import * as style from "../../styles/footer/footer.module.scss"

export const Footer = () =>{
    return (
        <footer className={style["footer"]}>
            <h2 className={style["footer__text"]}>Made by Eugene T.</h2>
            <h3 className={style["footer__text"]}>Contact: tatarkin-evgeniy@mail.ru</h3>
        </footer>
    )
}