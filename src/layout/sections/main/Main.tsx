import React from 'react';
import firstScreen from '../../../assets/images/pngwing.com (1).webp';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Container } from '../../../components/Container';
import { Button } from '../../../components/Button';
import { MyTheme } from '../../../theme/Theme';
import dots from '../../../assets/images/Dots.webp';
import logopseudo from '../../../assets/images/Logo.webp';
import quote from '../../../assets/images/quote.svg';
import { Icon } from '../../../components/icon/Icon';

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper direction='row' align='center' justify='space-between' wrap='wrap'>
                    <TextBlock>
                        <MainText>Elias is a <span>web designer</span> and <span>front-end developer</span></MainText>
                        <MainDescription>He crafts responsive websites where technologies meet creativity</MainDescription>
                        <Button colored>Contact me!</Button> 
                    </TextBlock>
                    <PhotoWrapper>
                        <Photo src={firstScreen} alt="" />
                        <LogoPseudo src={logopseudo} />
                        <DotsPseudo src={dots} />
                    </PhotoWrapper>
                    </FlexWrapper>
                    <CommentWrapper>
                        <FirstIconWrapper>
                        <Icon iconSrc='quote' width='20' height='20' viewBox='0 0 25 20'/>
                        </FirstIconWrapper>
                        <SecondIconWrapper>
                        <Icon iconSrc='quote' width='20' height='20' viewBox='0 0 25 20'/>
                        </SecondIconWrapper>
                        <Comment>With great power comes great electricity bill</Comment>
                        <Name>- Dr. Who</Name>
                    </CommentWrapper>
                


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
    display:flex;
    flex-direction:column;
    max-width:537px;
    width:100%;
    gap:32px;

    & > ${Button} {
        max-width:148px;
        width:100%;
        padding:8px 16px;
        font-size:16px;
        font-weight:500;
    }
`

const MainText = styled.h1`
    font-size:32px;
    font-weight:600px;
    line-height:42px;

    &>span{
        color:${MyTheme.colors.dash};
    }
`

const MainDescription = styled.p`
    
`
const PhotoWrapper = styled.div`
    position:relative;
    z-index:99999;
`
const Photo = styled.img`
    width: 469px;
    height: 386px;
    position:relative;
    object-fit:cover;
    border:1px dashed rgb(171, 178, 191);
    z-index:99999;
`

const LogoPseudo = styled.img`
    position:absolute;
    left:10px;
    top:25%;
    z-index:1;
    overflow:hidden;
`
const DotsPseudo = styled.img`
    position:absolute;
    right:-5px;
    bottom:15%;
    overflow:hidden;
`


const FirstIconWrapper = styled.div`
    position:absolute;
    left:10px;
    top:-15px;
    z-index:99;
    background-color: rgb(40, 44, 51);
    padding:5px;
`
const SecondIconWrapper = styled.div`
    position:absolute;
    right:10px;
    bottom:-20px;
    z-index:99;
    background-color: rgb(40, 44, 51);
    padding:5px;
`

const CommentWrapper = styled.div`
    max-width:712px;
    margin: 0 auto;
    height: 95px;
    z-index:0;
    position:relative;
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
const Comment = styled.h2`
    font-weight:400;    
`
const Name = styled.p`
position:absolute;
display:inline-block;
right:0;
bottom:-63px;
width: 162px;
height: 63px;
padding: 16px;
border: 1px solid rgb(171, 178, 191);
text-align:center;
align-content:center;
box-sizing: border-box;

`