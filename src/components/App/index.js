import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

import Navigation from '../Navigation';
import SignIn from '../SignIn';
import Landing from '../Landing';
import Home from '../Home';
import SignUp from '../SignUp';

// the authUser state handles the sessions
class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            authUser: null,
         }
    }

    componentDidMount() {

        // setting a listener function to get the authenticated user from firebase
        // The helper function onAuthStateChanged() receives a function as parameter that has access to the authenticated user. Also, the passed function is called every time something changes for the authenticated user. It is called when a user signs up, signs in, and signs out. If a user signs out, the authUser object becomes null, so the authUser property in the local state is set to null and all components depending on it adjust their behavior (e.g. display different options like the Navigation component).
        this.listener = this.props.firebase.auth.onAuthStateChanged( authUser => {
            authUser
                ? this.setState({ authUser })
                : this.setState({ authUser: null });
        })
    }

    componentWillUnmount() {
        // to avoid memory leaks, remove listener if component unmounts.
        this.listener();
    }

    render() { 
        return ( 
            <Router>
            <Navigation authUser={this.state.authUser}/>

            {/* <hr /> */}
            <Route exact path={ROUTES.LANDING} component={Landing} />
            <Route exact path={ROUTES.HOME} component={Home} />
            <Route exact path={ROUTES.SIGN_IN} component={SignIn} />
            <Route exact path={ROUTES.SIGN_UP} component={SignUp} />

        </Router>
         );
    }
}
 
export default withFirebase(App);
    