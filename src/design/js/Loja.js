import { styled, css } from '../../configs/stitches.config.ts'

export const Div = styled('div', 'a',{

    variants: {
        Color: {

            whiteText: {
                color: '$White'
            },

            white:{
                backgroundColor: '$White',
            },
            
            lightGrey: {
                backgroundColor: '$lightGrey',
            },

            darkGrey:{
                backgroundColor: '$darkGrey',
            },

            lightPink: {
                backgroundColor: '$lightPink',
            },
            gradientPinkDarkLight: {
                backgroundColor: '$gradientPinkDarkLight',
            },


        },

        Radii: {
            borderVip: {
                borderRadius: '$1',

            },
            borderUnban:{
                borderRadius: '$1',
            }
        },
        
        Space:{
            whiteContPad:
            {
                paddingTop: '$pc4',
            },
            UnbanPad:{
                paddingTop: '$px3'
            },
            UnbanPadText: {
                paddingTop: "103px"
            },
            skullPad:{
                paddinTop: "$px3",
            }

        },

        Sizes:{
            whiteContWid:{
                minw:"90%"
            },
        },
    },
        Fonts:{
            unbanText:{
            fontFamily:'$2',
            }
        },
        FontSizes:{
            unbanTextSize:{
                fontSize:'$6',
            },
        },
        FontWeights:{
            unbanBold:{
                fontWeight:'b',
            }
        }


});
