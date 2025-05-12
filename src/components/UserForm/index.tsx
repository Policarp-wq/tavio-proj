import { ChangeEvent, FormEvent, useState } from "react"
import { text } from "stream/consumers"
import { RegisterForm } from "./RegisterForm"
import { AuthForm } from "./AuthForm"

export type AuthState = "Register" | "Auth"

export type TUserFormProps = {
    state: AuthState
}

export const UserForm = ({state} : TUserFormProps) => {
    return state == "Register" ? <RegisterForm/> : <AuthForm/>
}



