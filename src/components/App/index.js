import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';

import Navigation from '../Navigation';
import SignIn from '../SignIn';
import Landing from '../Landing';
import Home from '../Home';
import SignUp from '../SignUp';
import AdminPage from '../Admin';

const App= () => (
            <Router>
                <Navigation />

                {/* <hr /> */}
                <Route exact path={ROUTES.LANDING} component={Landing} />
                <Route  path={ROUTES.HOME} component={Home} />
                <Route  path={ROUTES.SIGN_IN} component={SignIn} />
                <Route  path={ROUTES.SIGN_UP} component={SignUp} />
                <Route  path={ROUTES.ADMIN} component={AdminPage} />


            </Router>
)
            
            
       
 
export default withAuthentication(App);
    