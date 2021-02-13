import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

function LikedButton(props) {
    return (
        <Svg
            width={36}
            height={36}
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Circle
                cx={18}
                cy={18}
                r={17}
                fill="#fff"
                stroke="#4D3D64"
                strokeWidth={2}
            />
            <Path
                d="M18 27.35l-1.45-1.32C11.4 21.36 8 18.28 8 14.5 8 11.42 10.42 9 13.5 9c1.74 0 3.41.81 4.5 2.09C19.09 9.81 20.76 9 22.5 9c3.08 0 5.5 2.42 5.5 5.5 0 3.78-3.4 6.86-8.55 11.54L18 27.35z"
                fill="#4D3D64"
            />
        </Svg>
    )
}

export default LikedButton
