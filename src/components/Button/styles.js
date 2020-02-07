import styled, { css } from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';

const colors = {
    success: '#1e7e34',
    danger: '#bd2130',
    warning: '#e0a800',
    info: '#007bff'
};

export const ButtonContainer = styled(RectButton)`
    justify-content: center;
    align-items: center;
    padding: 10px;
    border-radius: 4px;
    background-color: ${({ variant }) => colors[variant]};
`;

export const ButtonText = styled.Text`
    color: ${({ color }) => color};
`;
