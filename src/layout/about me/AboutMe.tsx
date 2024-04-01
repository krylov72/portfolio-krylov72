import React from 'react';
import { Container } from '../../components/Container';
import styled from 'styled-components';
import { FlexWrapper } from '../../components/FlexWrapper';
import aboutMe from '../../assets/images/about me.webp';
import { SectionTitle } from '../../components/SectionTitle';

export const AboutMe = () => {
    return (
        <StyledAboutMe>
            <Container>
                <SectionTitle firstSymbol='#' title='about-me' />
                <FlexWrapper direction='row' align='flex-start' justify='flex-start' wrap='wrap'>
                    <TextBlock>
                        <Description>Hello, i’m Elias!
                            <br /><br />I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.<br /><br />Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.</Description>
                        <a href="">Read more</a>
                    </TextBlock>
                    <Photo src={aboutMe} alt="" />
                </FlexWrapper>
            </Container>
        </StyledAboutMe>
    );
};


const StyledAboutMe = styled.section`
    background-color: #282C33;
    padding-top:105px;
    height:auto;
    position:relative;

    & > ${Container} {
        padding-bottom: 77px;
    }

`

const TextBlock = styled.div`
    display:block;
`
const Description = styled.p`
    max-width:515px;
    width:100%;
    color: rgb(171, 178, 191);
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
    text-align: left;
`
const Photo = styled.img`
    max-width:339px;
    width:100%;
    border:1px dashed rgb(171, 178, 191);
    position:absolute;
    left:59%;
    top:14%
`