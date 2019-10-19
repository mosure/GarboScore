import React from 'react';
import {
    Switch,
    Redirect,
    Route,
    BrowserRouter,
} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';

import { Header, Footer } from './shared';
import { Home } from './home';
import { Demo } from './demo';
import { theme } from './theme';

const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <BrowserRouter>
                <Header/>

                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/demo' component={Demo}/>

                    <Redirect to='/'/>
                </Switch>

                <Footer/>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
