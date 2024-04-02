import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { SectionTitle } from '../../../components/SectionTitle';
import { Skill } from './skill/Skill';
import skillsimg from '../../../assets/images/Group 36.png';
import { Container } from '../../../components/Container';

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionTitle title='skills' firstSymbol='#' />
                <FlexWrapper gap='60px' align='center'>
                    <ImgWrapper>
                        <img src={skillsimg} alt="" />
                    </ImgWrapper>
                    <SkillsWrapper>
                        <Skill title='Tools' desc='VSCode  Neovim  Linux  Figma  Git  Font Awesome' />
                        <Skill  title='Languages' desc='TypeScript  JavaScript ' />
                        <Skill title='Databases' desc='PostgreSQL' />
                        <Skill title='Other' desc='HTML  CSS  EJS  SCSS' />
                        <Skill title='Frameworks' desc='React' />
                    </SkillsWrapper>
                </FlexWrapper>
            </Container>

        </StyledSkills>
    );
};


const StyledSkills = styled.section`
    background-color:#282C33;
    height:auto;

    flex-wrap:wrap;
    
`
const SkillsWrapper = styled.div`
display:flex;
height: 148px;
flex-wrap:wrap-reverse;
flex-direction: column;
justify-content:flex-start;
align-content: end;
width: 100%;
gap:16px;


`

const ImgWrapper = styled.div`
    width: 349px;
    height: 282px;
`

