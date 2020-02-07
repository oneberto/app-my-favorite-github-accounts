import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Container, Avatar, Name, Login, Content } from './styles';

export default function UserCard({ user }) {
    const navigation = useNavigation();

    const { name, avatar_url, login } = user;

    return (
        <Container onPress={() => navigation.navigate('User', { user })}>
            <Avatar source={{ uri: avatar_url }} />
            <Content>
                <Login numberOfLines={1}>{login}</Login>
                <Name numberOfLines={1}>{name}</Name>
            </Content>
        </Container>
    );
}
