import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { SectionTitle } from '../../../components/SectionTitle';
import { Skill } from './skill/Skill';
import skillsimg from '../../../assets/images/Group 36.png';

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle><span>#</span>skills</SectionTitle>
            <FlexWrapper gap='60px' justify='space-between'>
                <ImgWrapper>
                    <img src={skillsimg} alt="" />
                </ImgWrapper>
                <SkillsWrapper>
                    <Skill title='Languages' desc='TypeScript JavaScript' />
                    <Skill title='Databases' desc='PostgreSQL' />
                    <Skill title='Tools' desc='VSCode Neovim Linux Figma Git Font Awesome' />
                    <Skill title='Other' desc='HTML CSS EJS SCSS' />
                    <Skill title='Frameworks' desc='React' />
                </SkillsWrapper>
            </FlexWrapper>
        </StyledSkills>
    );
};


const StyledSkills = styled.section`
    background-color: #4a484b;
    min-height:100vh;

    flex-wrap:wrap;
    
`
const SkillsWrapper = styled.div`
display:flex;
flex-wrap:wrap;
justify-content:flex-end;
`

const ImgWrapper = styled.div`
    width: 349px;
    height: 282px;
`

