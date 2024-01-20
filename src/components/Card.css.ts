import { style, globalStyle } from "@vanilla-extract/css";
import { accentLight, accentGradient } from "../layouts/Layout.css";

const hoverClass = ":is(:hover, :focus-within)" as const;

export const linkCard = style({
    listStyle: "none",
    display: "flex",
    padding: 1,
    backgroundColor: "#23262d",
    backgroundImage: "none",
    backgroundSize: "400%",
    borderRadius: 7,
    backgroundPosition: "100%",
    transition: "background-position 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.1)",

    selectors: {
        [`&${hoverClass}`]: {
            backgroundPosition: 0,
            backgroundImage: `${accentGradient}`
        }
    }
});

globalStyle(`${linkCard} a`,{
    width: "100%",
    textDecoration: "none",
    lineHeight: 1.4,
    padding: "calc(1.5rem - 1px)",
    borderRadius: 8,
    color: "white",
    backgroundColor: "#23262d",
    opacity: 0.8
});

globalStyle("h2",{
    margin: 0,
    fontSize: "1.25rem",
    transition: "color 0.6s cubic-bezier(0.22, 1, 0.36, 1)"
});

globalStyle(`${linkCard}${hoverClass} h2`,{
    color: `rgb(${accentLight})`
})

globalStyle("p",{
    marginTop: "0.5rem",
    marginBottom: 0
})