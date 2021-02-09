import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"



function AddButton(props) {
    return (
        <Svg
            width={38}
            height={38}
            viewBox="0 0 38 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Circle cx={19} cy={19} r={19} fill="#4D3D64" />
            <Path
                stroke="#fff"
                strokeWidth={2}
                d="M19.208 10.292V28.5M27.708 20H9.5"
            />
        </Svg>
    )
}

export default AddButton
