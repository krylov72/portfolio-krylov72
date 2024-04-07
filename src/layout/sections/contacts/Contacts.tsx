import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { Container } from '../../../components/Container';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Icon } from '../../../components/icon/Icon';

export const Contacts = () => {
    return (
        <StyledContacts>
            <Container>
                <SectionTitle title='contacts' firstSymbol='#'/>
                <FlexWrapper justify='space-between'>
                    <ContactsText>I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me</ContactsText>
                    <ContactsWrapper>
                        <Description>Message me here</Description>
                        <ContactsList>
                            <Contact><Icon iconSrc='discord' width='20px' height='20px' viewBox='0 0 25 20'/> !Elias#3519</Contact>
                            <Contact><Icon iconSrc='email' width='22px' height='20px' viewBox='0 0 25 20'/> elias@elias.me</Contact>
                        </ContactsList>
                    </ContactsWrapper>
                </FlexWrapper>
            </Container>
        </StyledContacts>
    );
};


const StyledContacts = styled.section`
    padding-top:110px;
    background-color: #282C33;
    padding-bottom:145px;
`

const ContactsText = styled.p`
    max-width:505px;
    width:100%;
`
const ContactsWrapper = styled.div`
padding:16px;
display:block;
box-sizing: border-box;
border: 1px solid rgb(171, 178, 191);

`
const Description = styled.p`
    margin: 0;
    color: rgb(255, 255, 255);
    font-size: 16px;
    font-weight: 600;
    line-height: 21px;
    margin-bottom:16px;
`
const ContactsList = styled.div`
    list-style:none;
    display:flex;
    flex-direction:column;
    padding:0px;
    gap:8px;
`
const Contact = styled.p`
    display:flex;
    align-items:center;
    white-space:pre;
    
`