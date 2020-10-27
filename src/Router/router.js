import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import * as ROUTES from '../Constant/routes';
// Views
import Home from '../Views/Home';
import Register from '../Views/SignUp/index'
import RestorePass from "../Views/ResetPass/RestorePass"
import NotificationReset from "../Views/Notificaciones/NotificationReset"
import NewPassword from "../Views/ResetPass/NewPassword"
import Login from "../Views/Login/index"
import Welcome from '../Views/Welcome/Welcome'
import ProfileInfo from '../Views/Profile/ProfileInfo'
import ProfileAdress from '../Views/Profile/ProfileAdress'
import ProfileUpdate from '../Views/Profile/ProfileUpdate'
import Itemspokemon from '../Views/Items/Itemspokemon'



//Guardar Token
    const isAuth = () => {
        if(localStorage.getItem('token') !== null) {
            return true
        }
            return false
};
    function router() {
    return (
        <BrowserRouter>
            <Switch>  
                {/* cambio de Privados y Publicos */}
                <Route exact path={ROUTES.HOME} component={Home} />
                <Route path={ROUTES.LOGIN} component={Login} />
                <Route path={ROUTES.REGISTER} component={Register} />
                <Route path={ROUTES.RESTOREPASS} component={RestorePass} />
                <Route path={ROUTES.NOTIFICATIONPASS} component={NotificationReset} />
                <Route path={ROUTES.NEWPASSWORD} component={NewPassword} />              
                <PrivateRoute path={ROUTES.WELCOME} component={Welcome} />
                <PrivateRoute path={ROUTES.INFO} component={ProfileInfo} />
                <PrivateRoute path={ROUTES.INFOADRESS} component={ProfileAdress} />
                <PrivateRoute path={ROUTES.PROFILEUPDATESUCCESSFUL} component={ProfileUpdate} />  
                <PrivateRoute path={ROUTES.ITEMSPOKEMON} component={Itemspokemon} />  
            </Switch>
        </BrowserRouter>
    )

    function PrivateRoute({ component: Component, ...rest }) {
        return (
            <Route
                {...rest}
                render={props => 
                    isAuth() ? (
                        <Component {...props}/>
                    ): (
                        <Redirect 
                          to= {{
                           path: '/inicio'
                         }}
                        />
                    )   
                }
            />
        )
    }

}

export default router