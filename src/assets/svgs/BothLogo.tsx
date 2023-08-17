import { SVGProps } from "react";

function BothLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="18"
      fill="none"
      viewBox="0 0 22 18"
      {...props}
    >
      <g fill="#0C8BFF" fillRule="evenodd" clipRule="evenodd">
        <path d="M2.579 8.216l.81 6.516c.036.288.28.504.571.504h14.69c.288 0 .532-.212.57-.497l.899-6.523H2.579zm-.303-1.842c-.947 0-1.68.83-1.563 1.769l.848 6.816a2.418 2.418 0 002.399 2.12h14.69c1.209 0 2.231-.892 2.396-2.088l.94-6.828a1.575 1.575 0 00-1.56-1.79H2.275z"></path>
        <path d="M10.464 2.352c-.686.383-.977.85-1.014 1.195l-.123 1.127-1.077-.35c-.957-.31-1.572-.293-1.959-.177-.366.11-.627.338-.83.679-.453.759-.533 1.924-.533 2.87H3.086c0-.917.05-2.569.793-3.814.395-.662.999-1.234 1.882-1.5.637-.191 1.36-.205 2.17-.045.354-.673.958-1.216 1.634-1.594 1.009-.564 2.311-.848 3.67-.707 2.797.29 5.694 2.348 7.022 7.11l-1.774.495c-1.162-4.164-3.52-5.574-5.438-5.773-.998-.103-1.917.112-2.581.484z"></path>
      </g>
    </svg>
  );
}

export default BothLogo;