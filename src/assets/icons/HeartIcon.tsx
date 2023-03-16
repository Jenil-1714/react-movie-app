import { IIcons } from "./icons";

const HeartIcon = ({ width, height, fillColor }: IIcons.IconProps) => {
  return (
    <svg
      width={width || "18"}
      height={height || "17"}
      viewBox="0 0 18 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.9196 0C11.3693 0 9.88128 0.721717 8.91008 1.86221C7.93888 0.721717 6.4509 0 4.90055 0C2.15624 0 0 2.15624 0 4.90055C0 8.26856 3.02943 11.0129 7.61812 15.1828L8.91008 16.35L10.202 15.1739C14.7907 11.0129 17.8202 8.26856 17.8202 4.90055C17.8202 2.15624 15.6639 0 12.9196 0ZM8.99918 13.8552L8.91008 13.9443L8.82098 13.8552C4.57978 10.0149 1.78202 7.47556 1.78202 4.90055C1.78202 3.11853 3.11853 1.78202 4.90055 1.78202C6.2727 1.78202 7.60921 2.66411 8.08144 3.8848H9.74763C10.211 2.66411 11.5475 1.78202 12.9196 1.78202C14.7016 1.78202 16.0381 3.11853 16.0381 4.90055C16.0381 7.47556 13.2404 10.0149 8.99918 13.8552Z"
        fill={fillColor || "#D4D7DD"}
      />
    </svg>
  );
};

export default HeartIcon;
