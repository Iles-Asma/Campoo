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

function BalooBlobEtudiant(props) {
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
          d="M321.788 194.904C430.558 155.722 497.827 123.505 505.88 149.754C513.933 176.003 502.826 220.001 354.004 299.897C225.349 350.413 164.048 362.52 98.8981 343.403C33.7486 324.286 30.1111 271.06 93.4126 223.446C156.714 175.833 213.017 234.086 321.788 194.904Z"
          fill="#EB7653"
        />
      </G>
      <Rect x={38.966} width={310.729} height={308.331} fill="url(#pattern0)" />
      <Defs>
        <Pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use
            xlinkHref="#image0"
            transform="translate(0 -0.00388864) scale(0.000244141)"
          />
        </Pattern>
        <ClipPath id="clip0">
          <Rect
            width={512.049}
            height={336.513}
            fill="white"
            transform="matrix(0.987175 -0.159642 0.159037 0.987273 0 105.77)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default BalooBlobEtudiant
