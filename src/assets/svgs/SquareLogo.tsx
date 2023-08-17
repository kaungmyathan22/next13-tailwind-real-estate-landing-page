import { SVGProps } from "react";

function SquareLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      fill="none"
      viewBox="0 0 18 18"
      {...props}
    >
      <g fill="#0889FE">
        <path d="M6.095 0H2.286A2.286 2.286 0 000 2.286v4.29h1.807v-4.29c0-.264.215-.479.48-.479h3.808V0zM11.7 1.807V0h4.014A2.286 2.286 0 0118 2.286v4.29h-1.807v-4.29a.479.479 0 00-.48-.479H11.7zM11.7 16.193h4.014a.479.479 0 00.479-.48v-3.531H18v3.532A2.286 2.286 0 0115.714 18H11.7v-1.807zM1.807 12.181v3.533c0 .264.215.479.48.479h3.808V18H2.286A2.286 2.286 0 010 15.714V12.18h1.807z"></path>
      </g>
    </svg>
  );
}

export default SquareLogo;
