import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
    background: #fff;
    flex-direction: row;
    margin-bottom: 15px;
    padding: 10px;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
`;

export const Avatar = styled.Image`
    width: 45px;
    height: 45px;
    border-radius: 45px;
`;

export const Name = styled.Text`
    color: #ccc;
`;

export const Login = styled.Text`
    color: #1c1c1c;
`;

export const Content = styled.View`
    flex: 1;
    margin-left: 15px;
`;
