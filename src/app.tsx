import React, { useState, useEffect } from 'react';
import {
    Switch,
    Redirect,
    Route,
    BrowserRouter,
} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';

import { Header, Footer } from './shared';
import { Home, DisplayNone } from './home';
import { Demo } from './demo';
import { theme } from './theme';

const App: React.FC = () => {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoaded(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <BrowserRouter>
                <DisplayNone pose={loaded ? 'load' : 'init'}>
                    <Header/>

                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/demo' component={Demo}/>

                        <Redirect to='/'/>
                    </Switch>

                    <Footer/>
                </DisplayNone>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
