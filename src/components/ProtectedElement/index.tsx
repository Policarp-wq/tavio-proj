import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { getUserState } from "../../store/store";
import { Navigate } from "react-router-dom";

type ProtectedElementProps = {
    children: ReactNode;
};

export const ProtectedElement = ({ children }: ProtectedElementProps) => {
    const user = useSelector(getUserState);
    return user.authed ? <>{children}</> : <Navigate to="/login" replace/>
}
