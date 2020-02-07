import React, { useState, useCallback } from 'react';
import { Text, ActivityIndicator, Keyboard } from 'react-native';
import api from '../../services/api';

import {
    Container,
    Form,
    Input,
    SubmitButton,
    ListUsers,
    SubmitButtonText
} from './styles';

import UserCard from '../../components/UserCard';

export default function Home({ navigation }) {
    const [textSearch, setTextSearch] = useState('oneberto');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleAdd = useCallback(async () => {
        try {
            if (!textSearch) {
                return;
            }

            setLoading(true);

            const { data } = await api.get(`/users/${textSearch}`);

            if (!data) {
                throw new Error('Falha ao obter os dados.');
            }

            setResults(old => [data, ...old]);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
            Keyboard.dismiss();
            setTextSearch('');
        }
    }, [textSearch]);

    return (
        <Container>
            <Text>My favorite github accounts</Text>
            <Form>
                <Input
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="User name..."
                    returnKeyType="go"
                    onSubmitEditing={handleAdd}
                    value={textSearch}
                    onChangeText={text => setTextSearch(text)}
                />
                <SubmitButton onPress={handleAdd}>
                    {loading ? (
                        <ActivityIndicator color="#f1f1f1" />
                    ) : (
                        <Text>
                            <SubmitButtonText>ADD</SubmitButtonText>
                        </Text>
                    )}
                </SubmitButton>
            </Form>

            {!!results.length && (
                <ListUsers
                    data={results}
                    keyExtractor={item => item.login}
                    renderItem={({ item }) => <UserCard user={item} />}
                />
            )}
        </Container>
    );
}
