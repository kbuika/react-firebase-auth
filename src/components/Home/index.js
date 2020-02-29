import React from 'react'
import { withAuthorization, AuthUserContext } from '../Session';


function Home() {
    return (
        <AuthUserContext.Consumer>
            {authUser => (
                <div>
                    <div>Home</div>
                    <p>Accessible to every signed in user </p>
                </div>
            )}
        </AuthUserContext.Consumer>
        
    )
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Home);
