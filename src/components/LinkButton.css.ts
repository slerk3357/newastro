import { globalStyle, style } from "@vanilla-extract/css";
import { accent, accentLight, accentGradient, accentGradientDefine } from "../layouts/Layout.css";

const hoverClass = ":is(:hover, :focus-within)" as const;

export const linkButton = style({
    vars:{
        [accent]: "58, 234, 136",
        [accentLight]:"204, 250, 224",
        [accentGradient]: accentGradientDefine
    },

    listStyle: "none",
    display: "flex",
    width: "fit-content",
    margin: "0 auto",
    padding: 1,
    backgroundColor: "#3c8b40",
    backgroundImage: "none",
    backgroundSize: "400%",
    borderRadius: 7,
    backgroundPosition: "100%",
    transition: "background-position 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.1)",
    color: "white",

    selectors: {
        [`&${hoverClass}`]: {
            backgroundPosition: 0,
            backgroundImage: `${accentGradient}`,
            color: `rgb(${accentLight})`
        }
    }
});

globalStyle(`${linkButton} a`,{
    textDecoration: "none",
    backgroundColor: "#3c8b40",
    borderRadius: "inherit",
    opacity: ".8",
    transition: "color 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
    color: "white",
});

globalStyle(`${linkButton}${hoverClass} a`,{
    color: `rgb(${accentLight})`
});