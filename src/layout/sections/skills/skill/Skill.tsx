import React from 'react';
import styled from 'styled-components';

type SkillPropsType = {
    title: string
    desc: string
}


export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <SkillTitle>{props.title}</SkillTitle>
            <DescriptionName>{props.desc}</DescriptionName>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
text-align:left;
box-sizing: border-box;
border: 1px solid rgb(171, 178, 191);
max-width:196px;
width:100%;
height: 132px;
`
const SkillTitle = styled.h3`

border-bottom: 1px solid rgb(171, 178, 191);
`

const DescriptionName = styled.span`
    
`