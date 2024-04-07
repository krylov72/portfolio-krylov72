import React from 'react';
import styled from 'styled-components';
import { Logo } from '../../components/logo/Logo';
import { Menu } from '../../components/menu/Menu';
import { Container } from '../../components/Container';
import { MyTheme } from '../../theme/Theme';

export const Header = () => {
    return (
        <StyledHeader>
            <Container justify='space-between' display='flex' >
                <Logo />
                <MenuWrapper>
                    <Menu firstSymbol='#' />
                    <LangSlider href="">EN</LangSlider>
                </MenuWrapper>

            </Container>

        </StyledHeader>

    );
};

export const StyledHeader = styled.header`
background-color: rgb(40, 44, 51);
display:flex;
justify-content:space-between;
align-items:center;
padding-top:32px;



`
export const LangSlider = styled.a`
        color:${MyTheme.colors.secondtext};
        font-weight:600;
`

export const MenuWrapper = styled.div`
    display:flex;
    justify-content:space-between;
    gap:32px;
`


