import React from 'react';
import styled from 'styled-components';

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
color: rgb(255, 255, 255);
font-size: 32px;
font-weight: 500;
line-height: 42px;
`
const Symbol = styled.span`
color: rgb(199, 120, 221);
font-size: 32px;
font-weight: 500;
line-height: 42px;
`