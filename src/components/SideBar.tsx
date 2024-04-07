import React from 'react';
import styled from 'styled-components';
import { Icon } from './icon/Icon';
import { MyTheme } from '../theme/Theme';

export const SideBar = () => {
    return (
        <StyledSideBar>
            <IconWrapper>
                <a href=""><Icon iconSrc='github' width='20' height='20' viewBox='0 0 23 23' /></a>
                <a href=""><Icon iconSrc='dribble' width='20' height='20' viewBox='0 0 23 23' /></a>
                <a href=""><Icon iconSrc='figma' width='20' height='20' viewBox='-5 0 23 23' /></a>
            </IconWrapper>
        </StyledSideBar>
    );
};


const StyledSideBar = styled.div`
    display: flex;
    flex-direction:column;
    position:fixed;
    top:0;
    margin-left: 17px;
`
const IconWrapper = styled.div`
    display: flex;
    align-items:center;
    flex-direction:column;
    gap:13px;

    &>a{
        cursor: pointer;
    }
    

    &::before{
        content:'';
        height:191px;
        width:1px;
        border:1px solid ${MyTheme.colors.secondtext};
        display:inline-block;
        
    }
`
