import React from 'react';
import { Container } from './typograph.styles';
import { TypographProps } from '../../shared/interfaces/interfaces';

export const Typograph: React.FC<TypographProps> = ({ children, variant = 'title', rp }) => {
    return <Container variant={variant} rp={rp}>{children}</Container>
}