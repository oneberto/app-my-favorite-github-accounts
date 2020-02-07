import React, { useState, useCallback, useEffect } from 'react';
import { Text, ActivityIndicator, Keyboard } from 'react-native';
import api from '../../services/api';
import AsyncStorage from '@react-native-community/async-storage';

import {
    Container,
    Form,
    Input,
    SubmitButton,
    ListUsers,
    SubmitButtonText
} from './styles';

import UserCard from '../../components/UserCard';

export default function Home() {
    const [textSearch, setTextSearch] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);

    const getStorageData = useCallback(async () => {
        try {
            await AsyncStorage.getItem('results', (error, result) => {
                if (error) {
                    throw new Error();
                }

                if (result !== null && Array.isArray(result)) {
                    setResults(JSON.parse(result));
                }
            });
        } catch (error) {
            console.log(error);
        }
    }, []);

    useEffect(() => {
        getStorageData();
    }, [getStorageData]);

    const handleAdd = useCallback(async () => {
        try {
            if (!textSearch) {
                return;
            }

            setLoading(true);

            const { data } = await api.get(`/users/${textSearch}`);

            if (!data) {
                throw new Error();
            }

            const updateResults = [data, ...results];

            setResults(updateResults);

            await AsyncStorage.setItem(
                'results',
                JSON.stringify(updateResults)
            );
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
            Keyboard.dismiss();
            setTextSearch('');
        }
    }, [textSearch, results]);

    return (
        <Container>
            <Text>My favorite github accounts</Text>
            <Form>
                <Input
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="Github user..."
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
                    showsVerticalScrollIndicator={false}
                    data={results}
                    keyExtractor={item => item.login}
                    renderItem={({ item }) => <UserCard user={item} />}
                />
            )}
        </Container>
    );
}
