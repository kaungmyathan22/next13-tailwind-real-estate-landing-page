import { SVGProps } from "react";

function BlueRrightArrow(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <g clipPath="url(#clip0_2_559)">
        <g>
          <g>
            <path
              fill="#0689FF"
              d="M21.24 15.68a.8.8 0 11-1.28-.96l1.44-1.92H.8a.8.8 0 010-1.6h20.6l-1.44-1.92a.801.801 0 011.28-.96l2.395 3.194.01.013L24 12l-.354.472-.01.014-2.396 3.194z"
            ></path>
          </g>
        </g>
      </g>
      <defs>
        <clipPath id="clip0_2_559">
          <path
            fill="#fff"
            d="M0 0H24V24H0z"
            transform="rotate(90 12 12)"
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default BlueRrightArrow;
