import React from 'react';

import { Container, Avatar, Name, Login, Content } from './styles';

export default function UserCard({ user, onPress }) {
    const { name, avatar_url, login } = user;

    return (
        <Container onPress={onPress}>
            <Avatar source={{ uri: avatar_url }} />
            <Content>
                <Login numberOfLines={1}>{login}</Login>
                <Name numberOfLines={1}>{name}</Name>
            </Content>
        </Container>
    );
}
