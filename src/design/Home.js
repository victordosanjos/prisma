import { styled, css } from '../configs/stitches.config.ts'

export const SuperHero = styled('div', {
    backgroundColor: "$defaultLightBlue",
    textAlign: "center",
    backgroundImage: "url('https://proffelipebarros.com.br/wp-content/uploads/2022/02/hero-background.webp')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "60%",
    lineHeight: "400%",

});

export const ColorNav = styled ('nav',{
    paddingLeft: "19%",
    variants: {
        Color: {
            darkGrey: {
                backgroundColor: "$darkGrey",
            },
            defaultLightBlue: {
                backgroundColor: "$defaultLightBlue",

            }
        }
    }
}
)


