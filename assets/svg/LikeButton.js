import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

function LikeButton(props) {
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
                fill="white"
                stroke="#4D3D64"
                strokeWidth={2}
            />
            <Path
                d="M22.5 9C20.76 9 19.09 9.81 18 11.09C16.91 9.81 15.24 9 13.5 9C10.42 9 8 11.42 8 14.5C8 18.28 11.4 21.36 16.55 26.04L18 27.35L19.45 26.03C24.6 21.36 28 18.28 28 14.5C28 11.42 25.58 9 22.5 9ZM18.1 24.55L18 24.65L17.9 24.55C13.14 20.24 10 17.39 10 14.5C10 12.5 11.5 11 13.5 11C15.04 11 16.54 11.99 17.07 13.36H18.94C19.46 11.99 20.96 11 22.5 11C24.5 11 26 12.5 26 14.5C26 17.39 22.86 20.24 18.1 24.55Z"
                fill="#4D3D64"
            />
        </Svg>
    )
}

export default LikeButton
