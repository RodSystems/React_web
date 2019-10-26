import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Search from './pages/Search'

const Routes = () => {
    return (
        <Switch>
            <Route 
                exact 
                path="/" 
                component={ Search } >
            </Route>
            <Route
                component={ () => (<div>Pagina não encontrada!</div>) }>
            </Route>
        </Switch>
    );
};

export default Routes;