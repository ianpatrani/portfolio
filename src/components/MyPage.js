import { useState } from 'react';
import Accordion from './Accordion';
import Footer from './Footer';
import Header from './Header';
import React from 'react';
import '../accordion.css'
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./Themes.js";
import { useTranslation } from 'react-i18next';
import '../index.css';
const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

const MyPage = () => {
    //dropdown
    const [active, setActive] = useState();
    //darkmode
    const [theme, setTheme] = useState("light");
    //funcion toggler
    const themeToggler = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
    };
    const [t] = useTranslation("global");//t es el texto traducido

    return (
        <div className="media">

            <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
                <GlobalStyles />
                <StyledApp >
                    <button onClick={() => themeToggler()}>💡Turn Off</button>
                    <div className="App">
                        <Header />
                        <Accordion title={t("title1.text1")} p={t("content1.description1")} active={active} setActive={setActive} />
                        <Accordion title={t("title2.text2")} p={t("content2.description2")} active={active} setActive={setActive} />
                        <Accordion title={t("title3.text3")} p={t("content3.description3")} active={active} setActive={setActive} />
                        <Accordion title={t("title4.text4")} p={t("content4.description4")} active={active} setActive={setActive} />
                        <Footer />
                    </div>
                </StyledApp>
            </ThemeProvider>
        </div>
    );
}

export default MyPage;
