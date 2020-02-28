import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

import Navigation from '../Navigation';
import SignIn from '../SignIn';
import Landing from '../Landing';
import Home from '../Home';
import SignUp from '../SignUp';

function App() {
    return (
        <Router>
            <Navigation />

            {/* <hr /> */}
            <Route exact path={ROUTES.LANDING} component={Landing} />
            <Route exact path={ROUTES.HOME} component={Home} />
            <Route exact path={ROUTES.SIGN_IN} component={SignIn} />
            <Route exact path={ROUTES.SIGN_UP} component={SignUp} />

        </Router>
    )
}

export default App
