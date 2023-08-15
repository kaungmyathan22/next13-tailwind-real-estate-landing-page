import { SVGProps } from "react";

function LogoSVG(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="107"
      height="24"
      fill="none"
      viewBox="0 0 107 24"
      {...props}
    >
      <g fill="#000228">
        <path d="M0 23.616V.767h6.994c5.057 0 7.586 1.977 7.586 5.93 0 1.28-.325 2.384-.975 3.315a4.15 4.15 0 01-2.644 1.744c1.3.186 2.308.756 3.027 1.71.743.93 1.125 2.15 1.149 3.662 0 4.325-2.819 6.488-8.456 6.488H0zm7.203-3.14c1.531 0 2.621-.336 3.27-1.01.65-.675.975-1.57.975-2.687 0-1.14-.36-1.965-1.079-2.477-.695-.511-1.809-.767-3.34-.767h-3.41v6.942h3.584zm3.828-13.5c0-2.046-1.265-3.069-3.793-3.069h-3.62v6.488H6.96c2.715 0 4.072-1.14 4.072-3.418zM17.538 15.349c0-2.814.626-4.942 1.879-6.384 1.252-1.465 2.992-2.198 5.22-2.198 2.226 0 3.943.663 5.149 1.989 1.23 1.302 1.867 3.22 1.914 5.756l-.14 2.581H21.4c.209 2.512 1.462 3.767 3.758 3.767 1.6 0 3.294-.29 5.08-.872l.731 3.035c-.742.256-1.705.477-2.888.663-1.183.21-2.157.314-2.923.314-5.08 0-7.62-2.884-7.62-8.651zm7.237-5.337c-1.09 0-1.913.325-2.47.976-.534.628-.835 1.686-.905 3.175h6.437c0-2.768-1.02-4.151-3.062-4.151zM34.031 22.849l.766-3.175c2.204.698 3.955 1.047 5.254 1.047 1.3 0 2.18-.128 2.645-.384.464-.232.696-.651.696-1.256 0-.604-.21-1.034-.627-1.29-.417-.256-1.206-.524-2.366-.803-2.297-.558-3.897-1.174-4.802-1.848-.905-.698-1.357-1.826-1.357-3.384 0-3.326 2.134-4.989 6.403-4.989 1.832 0 3.955.303 6.367.907l-.66 3.314c-2.297-.65-4.072-.976-5.325-.976-1.252 0-2.099.116-2.54.348-.417.21-.626.582-.626 1.117s.209.93.626 1.186c.441.232 1.554.593 3.34 1.081 1.787.489 3.098 1.058 3.933 1.71.835.627 1.252 1.709 1.252 3.244 0 3.511-2.157 5.267-6.472 5.267-2.018 0-4.187-.372-6.507-1.116zM53.274 7.046l.07 1.012c1.878-.86 3.352-1.29 4.419-1.29 1.879 0 3.259.558 4.14 1.674.905 1.093 1.358 2.814 1.358 5.163v10.011h-3.585V13.71c0-1.116-.197-1.988-.591-2.616-.395-.628-1.01-.942-1.844-.942-.835 0-2.123.407-3.863 1.221v12.244h-3.584V7.046h3.48zM65.975 23.616v-3.209h5.184V10.256h-4.906v-3.21h8.49v13.361h4.907v3.21H65.975zM72.76 4.64c-.696 0-1.253-.21-1.67-.628-.395-.442-.592-1.012-.592-1.71 0-.697.209-1.256.627-1.674.417-.419.974-.628 1.67-.628.719 0 1.264.21 1.635.628.395.395.592.953.592 1.674s-.197 1.291-.592 1.71c-.394.418-.95.628-1.67.628zM82.538 23.616V.42h3.584v13.29l2.296-.244a32.545 32.545 0 003.41-5.442l.488-.976h3.897c-1.462 3.093-3.085 5.674-4.871 7.744 1.484 2.116 2.98 4.616 4.488 7.5l.696 1.325h-4.071a56.57 56.57 0 00-3.897-7.081l-2.436.244v6.837h-3.584zM101.954 23.616v-5.058H107v5.058h-5.046z"></path>
      </g>
    </svg>
  );
}

export default LogoSVG;
