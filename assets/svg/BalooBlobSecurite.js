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

function BalooBlobSecurite(props) {
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
                    d="M321.788 193.226C430.558 153.773 497.827 121.334 505.88 147.764C513.933 174.194 502.826 218.496 354.004 298.944C225.349 349.808 164.048 361.999 98.8982 342.75C33.7486 323.501 30.1111 269.908 93.4126 221.965C156.714 174.023 213.017 232.678 321.788 193.226Z"
                    fill="#EB7653"
                />
            </G>
            <Rect
                x={65.9425}
                width={310.729}
                height={313.484}
                fill="url(#pattern0)"
            />
            <Defs>
                <Pattern
                    id="pattern0"
                    patternContentUnits="objectBoundingBox"
                    width={1}
                    height={1}
                >
                    <Use
                        xlinkHref="#image0"
                        transform="translate(-0.00443264) scale(0.000246305)"
                    />
                </Pattern>
                <ClipPath id="clip0">
                    <Rect
                        width={512.139}
                        height={338.778}
                        fill="white"
                        transform="matrix(0.987001 -0.160715 0.157974 0.987443 0 103.476)"
                    />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default BalooBlobSecurite
