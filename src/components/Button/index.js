import React from 'react';

import { ActivityIndicator } from 'react-native';

import { ButtonContainer, ButtonText } from './styles';

export default function Button({
    children,
    variant = 'success',
    textColor = '#fff',
    onPress,
    loading
}) {
    return (
        <ButtonContainer variant={variant} onPress={onPress}>
            {loading ? (
                <ActivityIndicator color={textColor} />
            ) : (
                <ButtonText color={textColor}>{children}</ButtonText>
            )}
        </ButtonContainer>
    );
}
