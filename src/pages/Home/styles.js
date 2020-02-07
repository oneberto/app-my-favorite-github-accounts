import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    flex: 1;
    padding: 25px;
    background: #ececec;
`;

export const Form = styled.View`
    flex-direction: row;
    padding: 15px 0;
    border-bottom-width: 1px;
    margin-bottom: 15px;
    border-color: #ccc;
`;

export const Input = styled.TextInput`
    flex: 1;
    height: 40px;
    background: #ccc;
    border-radius: 4px;
    border: 1px solid #ccc;
    padding: 0 15px;
`;

export const SubmitButton = styled(RectButton)`
    background: #28a745;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border-radius: 4px;
    margin-left: 10px;
`;

export const SubmitButtonText = styled.Text`
    color: #f1f1f1;
`;

export const ListUsers = styled.FlatList``;
