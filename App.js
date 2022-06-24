import React from 'react';
import {Router} from './src/routes/Router';
import {AuthProvider} from './src/services/Provider';
import {Provider as PaperProvider} from 'react-native-paper';

const App = () => {
    return (
        <PaperProvider>
            <AuthProvider>
                <Router />
            </AuthProvider>
        </PaperProvider>
    );
};

export default App;
