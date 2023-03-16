import { IIcons } from "./icons";

const MyListIcon = ({ width, height, fillColor }: IIcons.IconProps) => {
  return (
    <svg
      width={width || "18"}
      height={height || "10"}
      viewBox="0 0 18 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 6H2V4H0V6ZM0 10H2V8H0V10ZM0 2H2V0H0V2ZM4 6H18V4H4V6ZM4 10H18V8H4V10ZM4 0V2H18V0H4ZM0 6H2V4H0V6ZM0 10H2V8H0V10ZM0 2H2V0H0V2ZM4 6H18V4H4V6ZM4 10H18V8H4V10ZM4 0V2H18V0H4Z"
        fill={fillColor || "#D4D7DD"}
      />
    </svg>
  );
};

export default MyListIcon;
