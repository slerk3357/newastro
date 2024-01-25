import { globalStyle, createVar } from "@vanilla-extract/css";

export const accent = createVar();
export const accentLight = createVar();
export const accentDark = createVar();
export const accentGradient = createVar();
export const accentGradientDefine = `
linear-gradient(
    45deg,
    rgb(${accent}),
    rgb(${accentLight}) 30%,
    white 60%
)
`;

globalStyle(":root",{
    vars: {
        [accent]: "136, 58, 234",
        [accentLight]: "224, 204, 250",
        [accentDark]: "49, 10, 101",
        [accentGradient]: accentGradientDefine
    }
});

globalStyle("html",{
    fontFamily: "system-ui, sans-serif",
    background: "#13151a",
    backgroundSize: 224
});

globalStyle("code",{
    fontFamily:`
		Menlo,
		Monaco,
        Lucida Console,
        Liberation Mono,
        DejaVu Sans Mono,
        Bitstream Vera Sans Mono,
        Courier New,
        monospace
    `
});