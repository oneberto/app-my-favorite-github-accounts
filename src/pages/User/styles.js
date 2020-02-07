import styled from 'styled-components/native';

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
    border-width: 1px;
    border-color: #a19a9a;
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
    padding: 0 20px;
`;

export const ButtonGroup = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
    padding: 30px 20px;
`;
