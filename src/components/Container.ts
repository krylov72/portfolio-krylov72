import styled from "styled-components";

type ContainerPropsType = {
    display?: string
    wrap?: string
    justify?: string
    align?: string
}

export const Container = styled.div<ContainerPropsType>`
max-width:1024px;
width:100%;
min-height:100%;
margin:0 auto;
border: 1px solid red;
display: ${props => props.display || 'block'};
flex-wrap: ${props => props.wrap || 'nowrap'};
justify-content: ${props => props.justify || 'stretch'};


`
