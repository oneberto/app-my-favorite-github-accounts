import React from 'react';

import { StatusBar } from 'react-native';

import Routes from './src/routes';

function App() {
    return (
        <>
            <StatusBar backgroundColor="#ececec" barStyle="dark-content" />
            <Routes />
        </>
    );
}

export default App;
