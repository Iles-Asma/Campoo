import * as React from "react"
import Svg, { Path, Defs, Pattern, Use } from "react-native-svg"

function LogoCampoo(props) {
    return (
        <Svg
            width={115}
            height={115}
            viewBox="0 0 115 115"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path fill="url(#prefix__pattern0)" d="M0 0h115v115H0z" />
            <Defs>
                <Pattern
                    id="prefix__pattern0"
                    patternContentUnits="objectBoundingBox"
                    width={1}
                    height={1}
                >
                    <Use
                        xlinkHref="#prefix__image0"
                        transform="matrix(.00067 0 0 .00067 -.003 0)"
                    />
                </Pattern>
            </Defs>
        </Svg>
    )
}

export default LogoCampoo