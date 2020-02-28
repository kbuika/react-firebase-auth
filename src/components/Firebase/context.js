import React from 'react';

// using React Context API to provide a Firebase instance once at the top-level of the component hierarchy 

const FirebaseContext = React.createContext(null);

export default FirebaseContext;