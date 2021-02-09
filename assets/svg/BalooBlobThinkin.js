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

function BalooBlobThinkin(props) {
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
                    d="M321.788 202.962C430.558 165.079 497.827 133.93 505.88 159.309C513.933 184.688 502.826 227.227 354.004 304.475C225.349 353.316 164.048 365.022 98.8982 346.539C33.7486 328.056 30.1111 276.594 93.4126 230.558C156.714 184.523 213.017 240.845 321.788 202.962Z"
                    fill="#EB7653"
                />
            </G>
            <Rect x={53.953} width={310.729} height={301.015} fill="url(#pattern0)" />
            <Defs>
                <Pattern
                    id="pattern0"
                    patternContentUnits="objectBoundingBox"
                    width={1}
                    height={1}
                >
                    <Use
                        xlinkHref="#image0"
                        transform="translate(0 -0.0161363) scale(0.000244141)"
                    />
                </Pattern>
                <ClipPath id="clip0">
                    <Rect
                        width={511.623}
                        height={325.645}
                        fill="white"
                        transform="matrix(0.987996 -0.154478 0.164345 0.986403 0 116.783)"
                    />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default BalooBlobThinkin
