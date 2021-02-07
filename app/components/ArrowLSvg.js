import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ArrowLSvg(props) {
  return (
    <Svg
      width={11}
      height={21}
      viewBox="0 0 11 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M9 2l-7 8.5L9 19"
        stroke="#4D3D64"
        strokeWidth={3}
        strokeLinecap="round"
      />
    </Svg>
  )
}

export default ArrowLSvg