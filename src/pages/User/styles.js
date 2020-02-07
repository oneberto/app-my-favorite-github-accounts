import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    background: #ececec;
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const Avatar = styled.Image`
    width: 150px;
    height: 150px;
    border-radius: 120px;
    margin-bottom: 10px;
`;

export const Login = styled.Text`
    color: #a19a9a;
`;

export const Name = styled.Text`
    color: #1c1c1c;
    font-size: 25px;
    margin-bottom: 10px;
`;

export const Bio = styled.Text`
    color: #a19a9a;
    text-align: center;
    margin-bottom: 10px;
`;

export const CloseButton = styled(RectButton)`
    background: #28a745;
    border-radius: 4px;
    padding: 10px;
    margin-top: 10px;
`;

export const CloseButtonText = styled.Text`
    color: #f1f1f1;
`;
