import React from 'react';
import Button from '@material-ui/core/Button';

import MainProvider from '../../state-management/providers/MainProvider';
import { MainContext } from '../../state-management/Context';


function SignOut() {
    return (
        <MainProvider>
        <MainContext.Consumer>
            {context => (
               
              <Button variant='contained' color='secondary' onClick={context.handleSignOut}>Sign Out</Button>

               
            )}
        </MainContext.Consumer>
    </MainProvider>
    )
}

export default SignOut


