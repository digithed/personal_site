
const Robot = (props) => {

    return (
        <svg id="robot" width="224" height="221" viewBox="0 0 224 221" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Frame 6">
                <g id="Rectangle 2" filter="url(#filter0_d_25_2)">
                    <rect x="78" y="56" width="70" height="59" fill="#FAF9F6" />
                </g>
                <g id="Rectangle 3" filter="url(#filter1_i_25_2)">
                    <rect x="99" y="115" width="28" height="39" fill="#FAF9F6" />
                </g>
                <g id="leftarm" filter="url(#filter2_d_25_2)">
                    <rect x="82" y="120" width="41" height="10" fill="#FAF9F6" />
                </g>
                <g id="rightarm" filter="url(#filter3_d_25_2)">
                    <rect x="106" y="125" width="41" height="10" fill="#FAF9F6" />
                </g>
                <g id="Rectangle 10" filter="url(#filter4_i_25_2)">
                    <rect x="126.999" y="154" width="27" height="10" transform="rotate(89.2021 126.999 154)" fill="#FAF9F6" />
                </g>
                <g id="Rectangle 11" filter="url(#filter5_i_25_2)">
                    <rect x="108.999" y="154" width="27" height="10" transform="rotate(89.2021 108.999 154)" fill="#FAF9F6" />
                </g>
                <rect id={props.eye1} x="97.5" y="72.5" width="7" height="20" fill="#ADD8E6" stroke="black" />
                <rect id={props.eye2} x="119.5" y="72.5" width="7" height="20" fill="#ADD8E6" stroke="black" />
                <rect id="mouth" x="106" y="105" width="12" height="5" fill="black" />
                <path id={props.sensor} d="M112 44L119.794 56H104.206L112 44Z" fill="#D9D9D9" />
            </g>
            <defs>
                <filter id="filter0_d_25_2" x="74" y="56" width="78" height="67" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_25_2" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_25_2" result="shape" />
                </filter>
                <filter id="filter1_i_25_2" x="99" y="115" width="28" height="43" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_25_2" />
                </filter>
                <filter id="filter2_d_25_2" x="78" y="120" width="49" height="18" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_25_2" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_25_2" result="shape" />
                </filter>
                <filter id="filter3_d_25_2" x="102" y="125" width="49" height="18" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_25_2" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_25_2" result="shape" />
                </filter>
                <filter id="filter4_i_25_2" x="117" y="154" width="10.375" height="31.1366" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_25_2" />
                </filter>
                <filter id="filter5_i_25_2" x="99" y="154" width="10.375" height="31.1366" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_25_2" />
                </filter>
            </defs>
        </svg>





    )
}

export default Robot;