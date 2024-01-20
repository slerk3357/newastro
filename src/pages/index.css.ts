import { style, globalStyle } from "@vanilla-extract/css";
import { accentLight, accentDark, accentGradient } from "../layouts/Layout.css";

export const astroA = style({
	position: "absolute",
	top: -32,
	left: "50%",
	transform: "translateX(-50%)",
	width: 220,
	height: "auto",
	zIndex: -1
});

export const textGradient = style({
	backgroundImage: `${accentGradient}`,
	WebkitBackgroundClip: "text",
	WebkitTextFillColor: "transparent",
	backgroundSize: "400%",
	backgroundPosition: "0%"
});

export const instructions = style({
	marginBottom: "2rem",
	border: `1px solid rgba(${accentLight}, 25%)`,
	background: `linear-gradient(rgba(${accentDark}, 66%), rgba(${accentDark}, 33%))`,
	padding: "1.5rem",
	borderRadius: 8
});

export const linkCardGrid = style({
	display: "grid",
	gridTemplateColumns: "repeat(auto-fit, minmax(24ch, 1fr))",
	gap: "2rem",
	padding: 0
});

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
	fontSize: "4rem",
	fontWeight: 700,
	lineHeight: 1,
	textAlign: "center",
	marginBottom: "1em"
});

globalStyle(`${instructions} code`,{
	fontSize: "0.8em",
	fontWeight: "bold",
	background: `rgba(${accentLight}, 12%)`,
	color: `rgb(${accentLight})`,
	borderRadius: 4,
	padding: "0.3em 0.4em"
});

globalStyle(`${instructions} strong`,{
	color: `rgb(${accentLight})`
});

