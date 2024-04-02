import './App.css';
import styled from 'styled-components';
import { Header } from './layout/header/Header';
import { Main } from './layout/sections/main/Main';
import { Skills } from './layout/sections/skills/Skills';
import { Projects } from './layout/projects/Projects';
import { AboutMe } from './layout/about me/AboutMe';
import { Contacts } from './layout/contacts/Contacts';
import { Footer } from './layout/footer/Footer';


function App() {
    return (
        <div className='App'>
            <Header />
            <Main />
            <Projects />
            <Skills />
            <AboutMe />
            <Contacts />
            <Footer />
        </div>
    );
}

export default App;

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #e91e63;
`;