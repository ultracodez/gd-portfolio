import * as React from "react";
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    style={{
      fillRule: "evenodd",
      clipRule: "evenodd",
      strokeLinejoin: "round",
      strokeMiterlimit: 2,
    }}
    viewBox="0 0 32 32"
    {...props}
  >
    <path d="m19.316 12.836-2.878 1.779a1.06 1.06 0 0 1-1.614-.997l.781-8.667a1.058 1.058 0 0 1 1.444-.892l8.101 3.176a1.06 1.06 0 0 1 .17 1.89l-3.183 1.967a12.613 12.613 0 0 1-.697 11.224c-2.336 4.045-6.578 6.31-10.938 6.316a1.632 1.632 0 1 1-.003-3.264 9.37 9.37 0 0 0 8.114-4.684 9.35 9.35 0 0 0 .703-7.848Z" />
  </svg>
);
export default SvgComponent;
export { SvgComponent as Arrow };
