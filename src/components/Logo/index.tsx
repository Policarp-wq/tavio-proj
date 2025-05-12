import clsx from "clsx"
import * as styles from "../../styles/logo/logo.module.scss"
import { Link } from "react-router-dom"

export const Logo = () =>{
    return <Link to="/" className={styles.logo}>Tavio</Link>
}