import React, { Component } from 'react'
import { MainContext } from '../Context';
import { withFirebase } from '../../components/Firebase';
import { withRouter } from 'react-router-dom';


const INITIAL_USER_REG = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    error: null
}

class MainProvider extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            userSignUpInfo: { ...INITIAL_USER_REG }
         }
    }
handleSignUpInput = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState(prevState => {
        return {
            userSignUpInfo: {
                ...prevState.userSignUpInfo,
                [name]: value
            }
        };
    });
};

handleUserSignUp = e => {
    e.preventDefault();
    this.props.firebase
        .doRegister(this.state.userSignUpInfo.email, this.state.userSignUpInfo.password)
            .then(authUser => {
                this.setState({ ...INITIAL_USER_REG });
            })
            .catch(error => {
                this.setState({ error })
            });

}


    render() { 
        return ( 
            <MainContext.Provider
                value={{
                    state: this.state,
                    handleSignUpInput: this.handleSignUpInput,
                    handleUserSignUp: this.handleUserSignUp,

                }}
            >
                {this.props.children}
            </MainContext.Provider>
         );
    }
}
 
export default withRouter(withFirebase(MainProvider));