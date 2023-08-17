import { SVGProps } from "react";

function StatsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="19"
      fill="none"
      viewBox="0 0 28 19"
      {...props}
    >
      <path
        stroke="#50D28A"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M1 17.034l9.681-9.68 4.538 4.537L26.11 1m0 0v6.656m0-6.656h-6.656"
      ></path>
    </svg>
  );
}

export default StatsIcon;
