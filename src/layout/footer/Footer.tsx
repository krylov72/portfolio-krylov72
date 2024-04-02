import React from 'react';
import styled from 'styled-components';
import { Container } from '../../components/Container';
import { FlexWrapper } from '../../components/FlexWrapper';
import { Logo } from '../../components/logo/Logo';
import { Icon } from '../../components/icon/Icon';

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper justify='space-between'>
                    <ContentBox>
                        <LogoWrapper>
                            <Logo />
                            <Email>elias@elias-dev.ml</Email>
                        </LogoWrapper>
                        <ContentText>Web designer and front-end developer</ContentText>
                    </ContentBox>
                    <MediaBox>
                        <MediaText>Media</MediaText>
                        <MediaWrapper>
                            <Icon iconSrc='discord' width='20px' height='20px' viewBox='0 0 25 25' />
                            <Icon iconSrc='figma' width='20px' height='20px' viewBox='-5 0 25 25'/>
                            <Icon iconSrc='github' width='20px' height='20px' viewBox='-2 0 25 25' />
                        </MediaWrapper>
                    </MediaBox>
                </FlexWrapper>
                <Privacy>© Copyright 2022. Made by Elias</Privacy>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: #282C33;
    border-top: 1px solid rgb(171, 178, 191);
    padding:32px 0;
`

const ContentBox = styled.div`
`
const Email = styled.span`
    color: rgb(171, 178, 191);
    font-family: Fira Code;
    font-size: 16px;
    font-weight: 400;
    line-height: 21px;
    text-align: left;
`

const LogoWrapper = styled.div`
    display:flex;
    column-gap:24px;
    margin-bottom:16px;
`

const ContentText = styled.p`
    color: rgb(255, 255, 255);
    font-family: Fira Code;
    font-size: 16px;
    font-weight: 400;
    line-height: 21px;
    text-align: left;
    `

    const MediaBox = styled.div`
        
    `
    const MediaText = styled.p`
        color: rgb(255, 255, 255);
    font-family: Fira Code;
    font-size: 24px;
    font-weight: 500;
    line-height: 31px;
    text-align: center;
    `
    const MediaWrapper = styled.div`
        display:flex;
        gap:8px;
    `

    const Privacy = styled.small`
        display:flex;
        justify-content:center;
        color: rgb(171, 178, 191);
    font-family: Fira Code;
    font-size: 16px;
    font-weight: 400;
    line-height: 21px;
    text-align: left;
    `
