import React from 'react';
import firstScreen from '../../../assets/images/pngwing.com (1).webp';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper direction='row' align='center' justify='space-around'>
                <TextBlock>
                    <MainText>Elias is a web designer and front-end developer</MainText>
                    <MainDescription>He crafts responsive websites where technologies meet creativity</MainDescription>
                    <button></button>
                </TextBlock>
                <Photo src={firstScreen} alt="" />
            </FlexWrapper>

        </StyledMain>
    );
};

const StyledMain = styled.div`
    min-height:100vh;
    background-color: rgb(40, 44, 51);
`

const TextBlock = styled.div`
    
`

const MainText = styled.h1`
    
`

const MainDescription = styled.span`
    
`

const Photo = styled.img`
    width: 469px;
    height: 386px;
    object-fit:cover;
`
