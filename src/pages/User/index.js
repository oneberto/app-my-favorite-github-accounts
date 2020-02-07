import React from 'react';

import {
    Container,
    Avatar,
    Name,
    CloseButton,
    CloseButtonText,
    Login,
    Bio
} from './styles';

export default function User({ route, navigation }) {
    const { user } = route.params;
    const { name, avatar_url, login, bio } = user;

    console.log('user', user);

    return (
        <Container>
            <Avatar source={{ uri: avatar_url }} />
            <Login>{login}</Login>
            <Name>{name}</Name>
            {!!bio && <Bio>{bio}</Bio>}

            <CloseButton onPress={() => navigation.goBack()}>
                <CloseButtonText>GO BACK</CloseButtonText>
            </CloseButton>
        </Container>
    );
}
