import { styled, css } from '../../configs/stitches.config.ts';

export const Div = styled('div', {
    
    variants: {
        Color: {
            gradientLightDarkBlue: {
                backgroudImage: '$gradientBlueDarkLight'
            },

            White: {
                backgroundColor: '$White'
            },
            
            BlackText: {
                color: '$Black'
            }
        },

        Space: {
            contactFormPadding: {
                padding: "68px",
            },
        },

        Radii: {
            contactFormRadius: {
                borderRadius: '$2'
            },
        },
    }
});

export const H4 = styled('h4', {
    variants: {
        Space: {
            contactFormPadding: {
                paddingBottom: '$px2',
            },
        },
    },
});

