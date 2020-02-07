import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// Routes
import Home from '../pages/Home';
import User from '../pages/User';

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                headerMode="none"
                screenOptions={{}}>
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{ title: 'Overviedasdasdw' }}
                />
                <Stack.Screen name="User" component={User} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
