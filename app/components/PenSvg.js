import * as React from "react"
import Svg, { Path } from "react-native-svg"

function PenSvg(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M7.684 19.161L23.053 3.617 22.509.788 19.876.521 4.291 16.106l-3.17 6.231 6.563-3.176z"
        stroke="#4D3D64"
        strokeLinecap="round"
      />
    </Svg>
  )
}

export default PenSvg