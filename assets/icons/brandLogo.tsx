interface brandLogoProps {
  color: string;
  className?: string;
  width: number;
  height: number;
}

export const BrandLogo = ({
  color,
  className,
  width,
  height,
}: brandLogoProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clip-path="url(#clip0_14_3)">
        <path
          d="M16.0008 10.2473C18.8857 10.2473 21.2243 7.95333 21.2243 5.12363C21.2243 2.29393 18.8857 0 16.0008 0C13.116 0 10.7773 2.29393 10.7773 5.12363C10.7773 7.95333 13.116 10.2473 16.0008 10.2473Z"
          fill={color}
        />
        <path
          d="M15.9988 14.3916H26.4507C26.4507 20.017 21.7338 24.6437 15.9988 24.6437C10.2638 24.6437 5.54688 20.017 5.54688 14.3916H15.9988Z"
          fill="#1F4D36"
        />
        <path
          d="M16 24.3008H32C32 32.9125 24.7747 39.9949 16 39.9949C7.22533 39.9949 0 32.9125 0 24.3008H16Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_14_3">
          <rect width="32" height="40" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
