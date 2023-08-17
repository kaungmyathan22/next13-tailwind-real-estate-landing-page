import { SVGProps } from "react";

function SlackLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.wprops3.org/2000/svg"
      width="30"
      height="31"
      fill="none"
      viewBox="0 0 30 31"
      {...props}
    >
      <g fill="#C4C4C4" fillRule="evenodd" clipRule="evenodd">
        <path d="M10.878.448a2.962 2.962 0 10.002 5.924h2.963V3.41A2.965 2.965 0 0010.878.448c.002 0 .002 0 0 0zm0 7.9h-7.9a2.963 2.963 0 000 5.926h7.9a2.963 2.963 0 100-5.926z"></path>
        <path d="M29.643 11.31a2.963 2.963 0 00-5.927 0v2.963h2.964a2.963 2.963 0 002.963-2.963zm-7.9 0v-7.9a2.963 2.963 0 00-5.926 0v7.9a2.963 2.963 0 105.925 0z"></path>
        <path d="M18.78 30.075a2.963 2.963 0 100-5.925h-2.963v2.963a2.964 2.964 0 002.963 2.962zm0-7.902h7.9a2.963 2.963 0 00.002-5.926h-7.9a2.963 2.963 0 00-.002 5.926z"></path>
        <path d="M.016 19.21a2.963 2.963 0 005.926 0v-2.962H2.979a2.963 2.963 0 00-2.963 2.963zm7.9 0v7.901a2.963 2.963 0 005.925.002v-7.9a2.963 2.963 0 00-5.925-.002z"></path>
      </g>
    </svg>
  );
}

export default SlackLogo;
