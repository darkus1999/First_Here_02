import React, { Suspense } from "react";
import { View } from 'react-native';
import { NativeRouter, Route, Switch } from "react-router-native";
import { Loginpeople } from '../components/login/Loginpeople';
import { RegistroUserPeople } from '../components/login/RegistroUserPeople';
import { Preloader } from '../components/Loader/index';
import GLOBAL from '../resources/global';

function PrivateRoutes() {
    return(
        <Suspense fallback={<Preloader/>}>
            <NativeRouter>
                    <Switch>
                        <Route exact path={'/'} render={()=><Loginpeople/>}/>
                        <Route exact path={GLOBAL.login} render={()=><Loginpeople/>}/>
                        <Route exact path={GLOBAL.registro} render={()=><RegistroUserPeople/>}/>
                    </Switch>
            </NativeRouter>
        </Suspense>
    );
}

export {PrivateRoutes};