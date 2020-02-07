import React from 'react';

import { Container, Avatar, Name, Login, Bio, ButtonGroup } from './styles';

import Button from '../../components/Button';

export default function User({ route, navigation }) {
    const { user, onRemove } = route.params;
    const { name, avatar_url, login, bio, id } = user;

    return (
        <Container>
            <Avatar source={{ uri: avatar_url }} />
            <Login>{login}</Login>
            {!!name && <Name>{name}</Name>}
            {!!bio && <Bio>{bio}</Bio>}

            <ButtonGroup>
                <Button onPress={() => navigation.goBack()} variant="info">
                    Go Back
                </Button>

                <Button
                    onPress={() => {
                        navigation.goBack();
                        onRemove(id);
                    }}
                    variant="danger">
                    Remove
                </Button>
            </ButtonGroup>
        </Container>
    );
}
