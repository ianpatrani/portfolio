import { createGlobalStyle } from "styled-components";

export const lightTheme = {
    body: "#fff",
    fontColor: "black",
};

export const darkTheme = {
    body: "#4D4D4D",
    fontColor: "#fff",
};

export const GlobalStyles = createGlobalStyle`
	body {
		background-color: ${(props) => props.theme.body};
	}`;
