import React from 'react';
import styled from 'styled-components';
import { MyTheme } from '../../theme/Theme';

type StyledMenuPropsType = {
    firstSymbol?: string
}


export const Menu = (props: StyledMenuPropsType) => {
    return (
        <StyledMenu>
                <ul>
                    <li>
                        <a href=""><Symbol>{props.firstSymbol}</Symbol>home</a>
                    </li>
                    <li>
                        <a href=""><Symbol>{props.firstSymbol}</Symbol>works</a>
                    </li>
                    <li>
                        <a href=""><Symbol>{props.firstSymbol}</Symbol>about-me</a>
                    </li>
                    <li>
                        <a href=""><Symbol>{props.firstSymbol}</Symbol>contacts</a>
                    </li>
                </ul>

        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    ul{
        display:flex;
        gap:30px;
        &>li{
            &>a{
                color:${MyTheme.colors.secondtext};
            }
        }
    }
`

const Symbol = styled.span`
    color:${MyTheme.colors.dash};
`
