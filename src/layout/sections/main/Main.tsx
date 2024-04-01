import React from 'react';
import firstScreen from '../../../assets/images/pngwing.com (1).webp';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Container } from '../../../components/Container';
export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper direction='row' align='center' justify='space-around' wrap='wrap'>
                    <TextBlock>
                        <MainText>Elias is a web designer and front-end developer</MainText>
                        <MainDescription>He crafts responsive websites where technologies meet creativity</MainDescription>
                        <button></button>
                    </TextBlock>
                    <Photo src={firstScreen} alt="" />
                    <CommentWrapper>
                        <Comment>With great power comes great electricity bill</Comment>
                        <Name>- Dr. Who</Name>
                    </CommentWrapper>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.div`
    background-color: rgb(40, 44, 51);
    padding-top:62px;
    padding-bottom:137px;
`

const TextBlock = styled.div`
    display:block;
`

const MainText = styled.h1`
    max-width:537px;
    width:100%;
`

const MainDescription = styled.span`
    
`

const Photo = styled.img`
    width: 469px;
    height: 386px;
    object-fit:cover;
    border:1px dashed rgb(171, 178, 191);
`

const CommentWrapper = styled.div`
    max-width:712px;
    height: 95px;
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    position:relative;
    box-sizing: border-box;
border: 1px solid rgb(171, 178, 191);
background: rgb(40, 44, 51);
margin-top:207px;


`
const Comment = styled.p`
color: rgb(255, 255, 255);
font-size: 24px;
font-weight: 500;
line-height: 31px;
`
const Name = styled.p`
position:absolute;
display:inline-block;
right:0;
bottom:-87px;
width: 162px;
height: 63px;
padding: 16px;
border: 1px solid rgb(171, 178, 191);
text-align:center;
align-content:center;
color: rgb(255, 255, 255);
font-size: 24px;
font-weight: 400;
line-height: 31px;
box-sizing: border-box;
`