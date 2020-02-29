import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

const withAuthorization = condition => Component => {
    class WithAuthorization extends React.Component {
        componentDidMount() {
            this.listener = this.props.firebase.auth.onAuthStateChanged(
                authUser => {
                    if (!condition(authUser)) {
                        this.props.history.push(ROUTES.SIGN_IN);
                    }
                },
            );
        }

        componentWillUnmount() {
            this.listener();
        }

        render() {
            return <Component {...this.props} />
        }
    }
    return compose(
        withRouter,
        withFirebase,
    ) (WithAuthorization);
}

export default withAuthorization;



// The render method displays the passed component (e.g. home page, account page) that should be protected by this higher-order component. We will refine this later. The real authorization logic happens in the componentDidMount() lifecycle method. Like the withAuthentication() higher-order component, it uses the Firebase listener to trigger a callback function every time the authenticated user changes. The authenticated user is either a authUser object or null. Within this function, the passed condition() function is executed with the authUser. If the authorization fails, for instance because the authenticated user is null, the higher-order component redirects to the sign in page. If it doesn't fail, the higher-order component does nothing and renders the passed component (e.g. home page, account page). To redirect a user, the higher-order component has access to the history object of the Router using the in-house withRouter() higher-order component from the React Router library.