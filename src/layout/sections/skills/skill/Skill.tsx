import React from 'react';
import styled from 'styled-components';

type SkillPropsType = {
    title: string
}


export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <SkillTitle>{props.title}</SkillTitle>
            <DescriptionName>{</DescriptionName>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    
`
const SkillTitle = styled.h3`
    
`

const DescriptionName = styled.span`
    
`