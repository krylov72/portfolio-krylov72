import React from 'react';
import { Container } from '../../components/Container';
import styled from 'styled-components';
import { SectionTitle } from '../../components/SectionTitle';
import { FlexWrapper } from '../../components/FlexWrapper';
import { Project } from './project/Project';
import nodesImg from '../../assets/images/project1.webp';
import protectImg from '../../assets/images/project2.webp';
import kahootImg from '../../assets/images/project3.webp';

const projects = [
    {
      title: 'ChertNodes',
      img: nodesImg,
      tehnologies: 'HTML SCSS Python Flask',
      description: 'Minecraft servers hosting',
      buttons: [
        {
          text: 'Live <~>',
          colored: true
        },
        {
          text: 'Cached >=',
          colored: false
        }
      ]
    },
    {
      title: 'ProtectX',
      img: protectImg,
      tehnologies: 'React Express Discord.js Node.js HTML SCSS Python Flask',
      description: 'Discord anti-crash bot',
      buttons: [
        {
          text: 'Live <~>',
          colored: true
        },
      ]
    },
    {
      title: 'Kahoot Answers Viewer',
      img: kahootImg,
      tehnologies: 'CSS Express Node.js',
      description: 'Get answers to your kahoot quiz',
      buttons: [
        {
          text: 'Live <~>',
          colored: true
        },
      ]
    },
  ]



export const Projects = () => {
    return (
        <StyledProjects>
            <Container  justify='space-between'>
                <WrapTitle>
                <SectionTitle title='projects' firstSymbol='#' />
                <a href="">View all ~~</a>
                </WrapTitle>
                    <FlexWrapper wrap='wrap' justify='space-between' align='flex-start'>
                    {projects.map((item, index) => {
              return <Project
                title={item.title}
                img={item.img}
                tehnologies={item.tehnologies}
                description={item.description}
								buttons={item.buttons}
								key = {index}
              />
            })}
                    </FlexWrapper>
            </Container>
        </StyledProjects>
    );
};


const StyledProjects = styled.section`
    min-height:auto;
    background-color:#282C33;
    

    & > a {
        text-align:right;
    }

    & > ${Container} {
      border:1px dashed rgb(171, 178, 191);
    }
`

const WrapTitle = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
`