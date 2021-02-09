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

function BalooBlobPhone(props) {
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
                    d="M321.788 203.48C430.558 165.68 497.827 134.6 505.88 159.923C513.933 185.246 502.826 227.692 354.004 304.77C225.349 353.503 164.048 365.182 98.8981 346.74C33.7486 328.298 30.1111 276.95 93.4126 231.016C156.714 185.082 213.017 241.28 321.788 203.48Z"
                    fill="#EB7653"
                />
            </G>
            <Rect x={38.966} width={310.729} height={300.351} fill="url(#pattern0)" />
            <Defs>
                <Pattern
                    id="pattern0"
                    patternContentUnits="objectBoundingBox"
                    width={1}
                    height={1}
                >
                    <Use
                        xlinkHref="#image0"
                        transform="translate(0 -0.0172769) scale(0.000244141)"
                    />
                </Pattern>
                <ClipPath id="clip0">
                    <Rect
                        width={511.596}
                        height={324.947}
                        fill="white"
                        transform="matrix(0.988048 -0.154146 0.164698 0.986344 0 117.491)"
                    />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default BalooBlobPhone
