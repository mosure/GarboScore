import React from 'react';
import { Switch, Redirect, Route, BrowserRouter } from 'react-router-dom';

import { Header, Footer } from './shared';
import { Home } from './home';
import { Demo } from './demo';

const App: React.FC = () => {
    return (
        <>
            <BrowserRouter>
                <Header/>

                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/demo' component={Demo}/>

                    <Redirect to='/'/>
                </Switch>

                <Footer/>
            </BrowserRouter>
        </>
    );
}

export default App;
