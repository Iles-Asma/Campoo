import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ArrowRSvg(props) {
  return (
    <Svg
      width={9}
      height={17}
      viewBox="0 0 9 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M1 1l6 7.5L1 16"
        stroke="#4D3D64"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </Svg>
  )
}

export default ArrowRSvg