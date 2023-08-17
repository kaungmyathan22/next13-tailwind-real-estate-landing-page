import { SVGProps } from "react";

function RightArrowSm(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="8"
      fill="none"
      viewBox="0 0 24 8"
      {...props}
    >
      <path
        fill="#0689FF"
        d="M21.24 7.68a.8.8 0 11-1.28-.96L21.4 4.8H.8a.8.8 0 010-1.6h20.6l-1.44-1.92a.801.801 0 011.28-.96l2.395 3.194.01.013L24 4l-.354.472-.01.014L21.24 7.68z"
      ></path>
    </svg>
  );
}

export default RightArrowSm;
