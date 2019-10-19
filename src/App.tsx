import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import { Header, Footer } from './shared';
import { Home } from './home';
import { Demo } from './demo';

const App: React.FC = () => {
    return (
        <>
            <Header/>

            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/demo' component={Demo}/>

                <Redirect to='/'/>
            </Switch>

            <Footer/>
        </>
    );
}

export default App;
