import * as React from "react"
import Svg, {
    G,
    Path,
    Rect,
    Defs,
    Pattern,
    Use,
    ClipPath,
} from "react-native-svg"

function BalooBlobFete(props) {
    return (
        <Svg
            width={559}
            height={438}
            viewBox="0 0 559 438"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            {...props}
        >
            <G clipPath="url(#clip0)">
                <Path
                    d="M321.787 194.695C430.558 155.555 497.827 123.372 505.88 149.593C513.933 175.814 502.826 219.765 354.004 299.575C225.349 350.036 164.048 362.13 98.8981 343.034C33.7486 323.938 30.1111 270.769 93.4126 223.206C156.714 175.644 213.017 233.835 321.787 194.695Z"
                    fill="#EB7653"
                />
            </G>
            <Rect x={45.9599} width={310.729} height={311} fill="url(#pattern0)" />
            <Defs>
                <Pattern
                    id="pattern0"
                    patternContentUnits="objectBoundingBox"
                    width={1}
                    height={1}
                >
                    <Use
                        xlinkHref="#image0"
                        transform="translate(-0.000435918) scale(0.000244353)"
                    />
                </Pattern>
                <ClipPath id="clip0">
                    <Rect
                        width={512.035}
                        height={336.161}
                        fill="white"
                        transform="matrix(0.987202 -0.159475 0.159204 0.987246 0 105.657)"
                    />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default BalooBlobFete
