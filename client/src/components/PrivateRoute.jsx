import { useContext } from "react"
import { Redirect, Route } from "react-router";
import { AuthContext } from "../context/AuthContext"

export const PrivateRoute = ({children, path}) =>{

    const {token} = useContext(AuthContext);
    
    if(!token){
        return <Redirect to="/login" />
    }

    return (
        <Route path={path}>
            {children}
        </Route>
    )
}