import { styled, css } from '../../configs/stitches.config.ts'

export const NavLinks = styled ('ul', {
    fontWeight: "500",
    fontSize: "18px",
    paddingRight: "30%",
}
)

export const ColorNav = styled ('nav',{
    paddingLeft: "19%",
    variants: {
        Color: {
            darkGrey: {
                backgroundColor: "$darkGrey",
            },
            defaultLightBlue: {
                backgroundColor: "$defaultLightBlue",

            },
            gradientBlueDarkLight: {
                background: "$gradientBlueDarkLight"
            }
        }
    }
});