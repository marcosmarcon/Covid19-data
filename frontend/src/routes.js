import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Cases from './pages/Cases';

export default function Routes(){
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Cases}/>
        </Switch>
        </BrowserRouter>
    );
}
