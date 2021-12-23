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
import Popup from './Popup'

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
                    <div className="App">
                        <h2 className="h1h2">{t("header.hello-world")}  <button onClick={() => themeToggler()}>💡</button></h2>
                        <div className="line" />
                        <Accordion title={t("title1.text1")} p={t("content1.description1")} p2={<Popup />} active={active} setActive={setActive} />
                        {/*  <Accordion title={t("title2.text2")} p={t("content2.description2")} active={active} setActive={setActive} /> */}
                        <Accordion title={t("title3.text3")} p={t("content3.description3")} active={active} setActive={setActive} />
                        <Accordion title={t("title4.text4")} p={
                            <ul>
                                <h5>Grupal</h5>
                                <li><a href="https://inspiring-newton-abe152.netlify.app/">✅Rick&MortyAPP API</a></li>
                                <li><a href="https://infallible-jang-490bb5.netlify.app/">✅Starbucks</a></li>
                                <li><a href="https://silly-goldstine-9925e4.netlify.app/">✅Netflix</a></li>
                                <h5>Individual</h5>
                                <li><a href="https://bootcamp-automarket.herokuapp.com/">✅Automarket</a></li>
                                <li><a href="https://devplace-app-three.herokuapp.com/users">✅API example</a></li>
                                <li><a href="https://serene-jennings-106ef1.netlify.app/">✅Frontend Mentor</a></li>
                                <li><a href="https://objective-fermat-25490a.netlify.app/">✅Products Shopping</a></li>
                            </ul>
                        }
                            active={active} setActive={setActive} />
                        <div className="line" />
                        <Header />

                        <Footer />

                    </div>
                </StyledApp>
            </ThemeProvider>
        </div>
    );
}

export default MyPage;
