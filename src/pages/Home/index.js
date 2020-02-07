import React, { useState, useCallback, useEffect } from 'react';
import { Text, Keyboard } from 'react-native';

// Helpers
import api from '../../services/api';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';

// Assets
import { Container, Form, Input, ListUsers } from './styles';

// Components
import UserCard from '../../components/UserCard';
import Button from '../../components/Button';

export default function Home() {
    const [textSearch, setTextSearch] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);

    const navigation = useNavigation();

    const getStorageData = useCallback(async () => {
        try {
            await AsyncStorage.getItem('results', (error, result) => {
                if (error) {
                    throw new Error();
                }

                if (result !== null) {
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

    const updateStorage = useCallback(async newData => {
        await AsyncStorage.setItem('results', JSON.stringify(newData));
    }, []);

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

            updateStorage(updateResults);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
            Keyboard.dismiss();
            setTextSearch('');
        }
    }, [textSearch, results, updateStorage]);

    const handleRemove = useCallback(
        id => {
            try {
                const updateResults = results.filter(item => item.id !== id);

                setResults(updateResults);
                updateStorage(updateResults);
            } catch (error) {
                console.log(error);
            }
        },
        [results, updateStorage]
    );

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
                <Button onPress={handleAdd} loading={loading}>
                    Add
                </Button>
            </Form>

            {!!results.length && (
                <ListUsers
                    showsVerticalScrollIndicator={false}
                    data={results}
                    keyExtractor={item => item.login}
                    renderItem={({ item }) => (
                        <UserCard
                            user={item}
                            onPress={() =>
                                navigation.navigate('User', {
                                    user: item,
                                    onRemove: handleRemove
                                })
                            }
                        />
                    )}
                />
            )}
        </Container>
    );
}
