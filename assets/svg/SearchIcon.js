import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SearchIcon(props) {
    return (
        <Svg
            width={24}
            height={24}
            viewBox="0 0 29 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M20.542 18.167H19.29l-.444-.428a10.246 10.246 0 002.486-6.697C21.333 5.358 16.726.75 11.042.75S.75 5.357.75 11.042c0 5.684 4.607 10.291 10.292 10.291 2.549 0 4.892-.934 6.697-2.485l.428.443v1.25l7.916 7.901 2.36-2.359-7.901-7.916zm-9.5 0a7.115 7.115 0 01-7.125-7.125 7.115 7.115 0 017.125-7.125 7.115 7.115 0 017.125 7.125 7.115 7.115 0 01-7.125 7.125z"
                fill="#4D3D64"
            />
        </Svg>
    )
}

export default SearchIcon
