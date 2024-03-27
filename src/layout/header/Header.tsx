import React from 'react';
import styled from 'styled-components';
import { Logo } from '../../components/logo/Logo';
import { Menu } from '../../components/menu/Menu';

export const Header = () => {
    return (
        <StyledHeader>
            <Logo />
            <Menu />
            <LangSlider href="">EN</LangSlider>
        </StyledHeader>

    );
};

export const StyledHeader = styled.header`
background-color: rgb(40, 44, 51);
display:flex;
justify-content:space-between;
align-items:center;


`
export const LangSlider = styled.a`
`
