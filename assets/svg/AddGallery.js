import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

export default function AddGallery(props) {
	return (
		<Svg
			width={100}
			height={100}
			viewBox="0 0 108 108"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<Circle cx={54} cy={54} r={54} fill="#4D3D64" />
			<Path
				stroke="#fff"
				strokeWidth={4}
				d="M54.158 25.579v56.842M82.421 53.158H25.579"
			/>
		</Svg>
	)
}

