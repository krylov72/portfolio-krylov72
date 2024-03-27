import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { SectionTitle } from '../../../components/SectionTitle';
import { Skill } from './skill/Skill';

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>#skills</SectionTitle>
            <FlexWrapper>
                <Skill title='languages'  />
                <Skill title='Databases'/>
                <Skill title='Tools' />
                <Skill title='Other' />
                <Skill title='Frameworks' />
            </FlexWrapper>
        </StyledSkills>
    );
};


const StyledSkills = styled.section`
    background-color: #b648e5;
    min-height:100vh;
`