import { SVGProps } from "react";

function BedLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="16"
      fill="none"
      viewBox="0 0 22 16"
      {...props}
    >
      <g fill="#0688FF" fillRule="evenodd" clipRule="evenodd">
        <path d="M18.682 6.116H2.73a.52.52 0 00-.52.52v6.475c0 .287.233.52.52.52h15.952a.52.52 0 00.52-.52V6.635a.52.52 0 00-.52-.52zM2.73 4.316a2.32 2.32 0 00-2.32 2.32v6.475a2.32 2.32 0 002.32 2.32h15.952a2.32 2.32 0 002.32-2.32V6.635a2.32 2.32 0 00-2.32-2.32H2.73z"></path>
        <path d="M15.506 1.8H5.907a.52.52 0 00-.52.52v2.013h10.639V2.32a.52.52 0 00-.52-.52zM5.907 0a2.32 2.32 0 00-2.32 2.32v3.814h14.24V2.32A2.32 2.32 0 0015.506 0h-9.6z"></path>
      </g>
    </svg>
  );
}

export default BedLogo;
