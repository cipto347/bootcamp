import propTypes from "prop-types";

function LogoKomplekku(props) {
  const { propClass } = props;
  return (
    <svg
      className={propClass}
      viewBox="0 0 38 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="38"
        height="38"
        rx="6"
        fill="url(#paint0_linear_5173_100864)"
      />
      <mask
        id="mask0_5173_100864"
        maskUnits="userSpaceOnUse"
        x="5"
        y="5"
        width="27"
        height="28"
      >
        <rect
          x="5.54199"
          y="19"
          width="19"
          height="19"
          rx="1"
          transform="rotate(-45 5.54199 19)"
          fill="#EE3124"
        />
      </mask>
      <g mask="url(#mask0_5173_100864)">
        <rect
          x="-7.91602"
          y="41.167"
          width="38"
          height="38"
          rx="1"
          transform="rotate(-45 -7.91602 41.167)"
          fill="url(#paint1_linear_5173_100864)"
        />
      </g>
      <mask
        id="mask1_5173_100864"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="38"
        height="38"
      >
        <rect width="38" height="38" rx="4" fill="#fff" />
      </mask>
      <g mask="url(#mask1_5173_100864)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.52094 16.6203C5.20699 17.9343 5.20699 20.0646 6.52094 21.3786L8.49599 23.3536L-6.93739 38.787C-8.25134 40.1009 -8.25134 42.2313 -6.93739 43.5452L16.5739 67.0565C17.8879 68.3705 20.0182 68.3705 21.3322 67.0565L44.8435 43.5452C46.1574 42.2313 46.1574 40.1009 44.8435 38.787L29.4334 23.3769L31.4317 21.3786C32.7457 20.0646 32.7457 17.9343 31.4317 16.6203L21.3555 6.54406C20.0415 5.23011 17.9112 5.23011 16.5972 6.54406L6.52094 16.6203ZM28.0339 21.9774L30.0322 19.9791C30.5733 19.438 30.5733 18.5608 30.0322 18.0198L19.956 7.94354C19.4149 7.4025 18.5377 7.4025 17.9967 7.94354L7.92043 18.0198C7.37939 18.5608 7.37939 19.438 7.92043 19.9791L9.89547 21.9541L16.5739 15.2757C17.8879 13.9617 20.0182 13.9617 21.3322 15.2757L28.0339 21.9774ZM11.295 23.3536L17.9734 16.6752C18.5144 16.1341 19.3916 16.1341 19.9327 16.6752L26.6344 23.3769L19.956 30.0554C19.4149 30.5964 18.5377 30.5964 17.9967 30.0554L11.295 23.3536ZM9.89547 24.7531L16.5972 31.4548C17.9112 32.7688 20.0415 32.7688 21.3555 31.4548L28.0339 24.7764L43.444 40.1865C43.985 40.7275 43.985 41.6047 43.444 42.1458L19.9327 65.6571C19.3916 66.1981 18.5144 66.1981 17.9734 65.6571L-5.53791 42.1458C-6.07894 41.6047 -6.07894 40.7275 -5.53791 40.1865L9.89547 24.7531Z"
          fill="url(#paint3_linear_5173_100864)"
        />
      </g>
      <rect
        x="16.2295"
        y="20.583"
        width="2.375"
        height="2.375"
        rx="0.25"
        fill="white"
      />
      <rect
        x="16.2295"
        y="23.75"
        width="2.375"
        height="2.375"
        rx="0.25"
        fill="white"
      />
      <rect
        x="19.3965"
        y="20.583"
        width="2.375"
        height="2.375"
        rx="0.25"
        fill="white"
      />
      <rect
        x="19.3965"
        y="23.75"
        width="2.375"
        height="2.375"
        rx="0.25"
        fill="white"
      />
      <defs>
        <linearGradient
          id="paint0_linear_5173_100864"
          x1="-4.64101e-07"
          y1="6.11344"
          x2="38"
          y2="31.8866"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F8091E" />
          <stop offset="1" stopColor="#A9085A" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_5173_100864"
          x1="11.084"
          y1="41.167"
          x2="11.084"
          y2="79.167"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F17173" />
          <stop offset="1" stopColor="#E62830" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_5173_100864"
          x1="-4.64101e-07"
          y1="6.11344"
          x2="38"
          y2="31.8866"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F8091E" />
          <stop offset="1" stopColor="#A9085A" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_5173_100864"
          x1="-7.99414"
          y1="33.1053"
          x2="18.3461"
          y2="82.7265"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F3F3F3" />
          <stop offset="1" stopColor="#ECF7FC" />
        </linearGradient>
      </defs>
    </svg>
  );
}

LogoKomplekku.propTypes = {
  propClass: propTypes.string,
};

LogoKomplekku.defaultProps = {
  propClass: "w-8 h-8",
};
export default LogoKomplekku;
