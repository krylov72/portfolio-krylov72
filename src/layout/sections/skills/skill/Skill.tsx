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
flex-direction:column;
box-sizing: border-box;
border: 1px solid rgb(171, 178, 191);
max-width:178px;
width:100%;
`
const SkillTitle = styled.h3`
margin:0px;
border-bottom: 1px solid rgb(171, 178, 191);
`

const DescriptionName = styled.p`
`