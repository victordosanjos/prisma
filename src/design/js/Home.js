import { styled, css } from '../../configs/stitches.config.ts'

export const Div = styled('div', {
    backgroundColor: '$defaultLightBlue',
    textAlign: "center",
    backgroundImage: "url('https://proffelipebarros.com.br/wp-content/uploads/2022/02/hero-background.webp')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "60%",
    lineHeight: "400%",
});


export const H1 = styled('h1', {
    color: '$White',
    fontFamily: '$1',
    fontWeight: '$3',
    fontSize: '$20',
    textShadow: "6px 1px 10px black;",
    });

export const A = styled('a', {
    color: '$dLimeGreen',
    fontSize: '$3',
})
