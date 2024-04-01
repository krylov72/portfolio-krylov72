import React from 'react';
import { Icon } from '../icon/Icon';
import styled from 'styled-components';

export const Logo = () => {
    return (
        <LogoWrapper>
            <Icon iconSrc='logo' width='16px' height='16px' viewBox='0 0 52 52' />
            <LogoText href=""> Elias</LogoText>
        </LogoWrapper> 
    );
};

const LogoWrapper = styled.div`
    display:flex;
    align-items:center;
`

const LogoText = styled.a`
color: rgb(255, 255, 255);
font-size: 16px;
font-weight: 700;
line-height: 21px;
text-align: left;
text-decoration:none;
white-space:pre;
`
