import { globalStyle } from "@vanilla-extract/css";

globalStyle("main",{
	margin: "auto",
	padding: "1rem",
	width: 800,
	maxWidth: "calc(100% - 2rem)",
	color: "white",
	fontSize: 20,
	lineHeight: 1.6
});

globalStyle("h1",{
	fontSize: "3rem",
	fontWeight: 700,
	lineHeight: 1,
	textAlign: "center",
	marginBottom: "1em"
});
