import React from 'react';
import styled from 'styled-components';
import { MyTheme } from '../theme/Theme';

type SectionTitlePropsType = {
    firstSymbol: string
    title: string
}

export const SectionTitle = (props: SectionTitlePropsType) => {
    return (
        <Title><Symbol>{props.firstSymbol}</Symbol>{props.title}</Title>
    );
};

const Title = styled.h2`

`
const Symbol = styled.span`
color:${MyTheme.colors.dash};

`