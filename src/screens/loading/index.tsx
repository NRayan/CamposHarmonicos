import React from 'react';
import { dark } from "../../theme";
import { Container, LoadingIndicator } from './styles';

export function Loading() {
    return (
        <Container bkColor={dark.colors.background}>
            <LoadingIndicator color={dark.colors.primary} size="large" />
        </Container>
    )
}