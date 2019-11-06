import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Search from './pages/Search'
import Product from './pages/Product'

const Routes = () => {
    return (
        <Switch>
            <Route 
                exact 
                path="/" 
                component={ Search } >
            </Route>
            <Route
                exatc
                path={ '/product/:id'}
                component={ Product }
            />
            <Route                
                component={ () => (<div>Pagina não encontrada!</div>) }>
            </Route>
        </Switch>
    );
};

export default Routes;