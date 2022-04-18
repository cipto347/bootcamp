import propTypes from "prop-types";

function IconList(props) {
  const { name, propClass } = props;
  return (
    <figure className={propClass}>
      {name === "dashboard" && (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22 4.2998H2V18.2998H22V4.2998Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.6004 19.7002H8.40039"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.3 11.3998C18.5703 11.3998 19.6 10.3701 19.6 9.0998C19.6 7.82955 18.5703 6.7998 17.3 6.7998C16.0297 6.7998 15 7.82955 15 9.0998C15 10.3701 16.0297 11.3998 17.3 11.3998Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.2998 7.09961L17.2998 9.09961L19.4998 9.49961"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.0996 13.4004H19.5996"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.0996 15.2002H19.5996"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.5996 7.09961V15.1996"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.7998 9.90039V15.2004"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 11.7002V15.2002"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.2002 10.7998V15.1998"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.40039 13.4004V15.2004"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
      {name === "bill" && (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_5420_18332)">
            <path
              d="M15.8009 18.9C15.8009 19.1 15.6009 19.2 15.5009 19.2C15.3009 19.2 15.2009 19.1 15.3009 18.8L15.8009 16.8C15.8009 16.6 16.0009 16.5 16.1009 16.5H16.8009C17.2009 16.5 17.5009 16.6 17.7009 16.8C17.8009 16.9 17.9009 17.1 17.9009 17.3C17.9009 17.6 17.8009 17.8 17.7009 17.9C17.601 18 17.4009 18.1 17.1009 18.2L17.4009 18.7C17.5009 18.8 17.5009 18.8 17.5009 18.9C17.5009 19.1 17.3009 19.2 17.2009 19.2C17.0009 19.2 16.9009 19.1 16.9009 19L16.5009 18.3H16.1009L15.8009 18.9ZM16.6009 17.8C16.8009 17.8 17.0009 17.7 17.1009 17.6C17.2009 17.5 17.2009 17.4 17.2009 17.3C17.2009 17.2 17.2009 17.1 17.1009 17.1C17.1009 17 16.9009 17 16.8009 17H16.3009L16.1009 17.8H16.6009Z"
              fill="currentColor"
            />
            <path
              d="M17.8009 20.4C17.8009 20.6 17.6009 20.7 17.5009 20.7C17.3009 20.7 17.2009 20.6 17.3009 20.3L17.8009 18.3C17.8009 18.1 18.001 18 18.101 18H18.701C19.101 18 19.3009 18.1 19.5009 18.3C19.6009 18.4 19.701 18.6 19.701 18.9C19.701 19.6 19.1009 19.9 18.4009 19.9H18.0009L17.8009 20.4ZM18.5009 19.4C18.9009 19.4 19.201 19.2 19.201 18.9C19.201 18.8 19.201 18.7 19.101 18.7C19.001 18.6 18.901 18.6 18.701 18.6H18.3009L18.101 19.4H18.5009Z"
              fill="currentColor"
            />
            <path
              d="M19.5 13.5V2L18.8 2.7C18.7 2.8 18.6 2.8 18.5 2.7L18 2.2C17.9 2.1 17.8 2.1 17.7 2.2L17.2 2.8C17.1 2.9 17 2.9 16.9 2.8L16.4 2.2C16.3 2.1 16.2 2.1 16.1 2.2L15.6 2.8C15.5 2.9 15.4 2.9 15.3 2.8L14.8 2.2C14.7 2.1 14.6 2.1 14.5 2.2L14 2.8C13.9 2.9 13.8 2.9 13.7 2.8L13 2.2C12.9 2.1 12.8 2.1 12.7 2.2L12.2 2.8C12.1 2.9 12 2.9 11.9 2.8L11.4 2.2C11.3 2.1 11.2 2.1 11.1 2.2L10.6 2.8C10.5 2.9 10.4 2.9 10.3 2.8L9.6 2.2C9.5 2.1 9.4 2.1 9.3 2.2L8.8 2.7C8.7 2.8 8.6 2.8 8.5 2.7L8 2.2C7.9 2.1 7.8 2.1 7.7 2.2L7.1 2.7C7 2.8 6.9 2.8 6.8 2.7L6.3 2.2C6.2 2.1 6.1 2.1 6 2.2L5.5 2.7C5.4 2.8 5.3 2.8 5.2 2.7L4.5 2V22L5.2 21.3C5.3 21.2 5.4 21.2 5.5 21.3L6 21.8C6.1 21.9 6.2 21.9 6.3 21.8L6.8 21.2C6.9 21.1 7 21.1 7.1 21.2L7.6 21.8C7.7 21.9 7.8 21.9 7.9 21.8L8.4 21.2C8.5 21.1 8.6 21.1 8.7 21.2L9.2 21.8C9.3 21.9 9.4 21.9 9.5 21.8L10 21.2C10.1 21.1 10.2 21.1 10.3 21.2L10.8 21.8C10.9 21.9 11 21.9 11.1 21.8L11.6 21.2C11.7 21.1 11.8 21.1 11.9 21.2L12.4 21.8C12.5 21.9 12.6 21.9 12.7 21.8L13 21.5"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.5 21.9004C19.433 21.9004 21 20.3334 21 18.4004C21 16.4674 19.433 14.9004 17.5 14.9004C15.567 14.9004 14 16.4674 14 18.4004C14 20.3334 15.567 21.9004 17.5 21.9004Z"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.5 6.2002H13"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.5 6.2002H16.5"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.5 9.09961H16.5"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.5 12H16.5"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.5 9.09961H11.2"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.5 12H13"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.5 17.7998H12"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_5420_18332">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )}
      {name === "info" && (
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.3 14.5H5C3.9 14.5 3 13.6 3 12.5V8.5C3 7.4 3.9 6.5 5 6.5H7.3V14.5Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.5 17.5C18.7 17.5 18 16.8 18 16V5C18 4.2 18.7 3.5 19.5 3.5C20.3 3.5 21 4.2 21 5V16C21 16.8 20.3 17.5 19.5 17.5Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.2998 6.5C17.9998 6.5 17.9998 5 17.9998 5V16L7.2998 14.5V6.5Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.2998 21.4L9.6998 21.2C9.0998 21 8.5998 20.4 8.4998 19.8L7.2998 14.5L10.5998 14.9L11.6998 20.3C11.7998 21.1 10.9998 21.7 10.2998 21.4Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.5 15L11.1 17.9C12.3 17.7 13.3 16.6 13.4 15.4L10.5 15Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
      {name === "email" && (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22 6L13.1 12.2C12.4 12.7 11.5 12.7 10.8 12.2L2 6"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
      {name === "tenant" && (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.5998 10.7998C8.0998 10.7998 6.7998 9.4998 6.7998 7.9998V5.5998C6.7998 4.0998 8.0998 2.7998 9.5998 2.7998C11.0998 2.7998 12.3998 4.0998 12.3998 5.5998V7.9998C12.3998 9.4998 11.1998 10.7998 9.5998 10.7998Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.1996 10.6996C12.6996 10.3996 12.0996 10.1996 11.4996 10.0996C10.9996 10.4996 10.3996 10.7996 9.69965 10.7996C8.99965 10.7996 8.39965 10.4996 7.89965 10.0996C5.29965 10.6996 3.19965 12.4996 2.19965 14.9996C1.99965 15.3996 2.19965 15.8996 2.49965 16.1996C4.19965 17.1996 6.19965 17.8996 8.49965 18.0996"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.1002 17.0998C20.2541 17.0998 22.0002 15.3537 22.0002 13.1998C22.0002 11.0459 20.2541 9.2998 18.1002 9.2998C15.9463 9.2998 14.2002 11.0459 14.2002 13.1998C14.2002 15.3537 15.9463 17.0998 18.1002 17.0998Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.4002 14.1002C19.0629 14.1002 19.6002 13.5629 19.6002 12.9002C19.6002 12.2375 19.0629 11.7002 18.4002 11.7002C17.7375 11.7002 17.2002 12.2375 17.2002 12.9002C17.2002 13.5629 17.7375 14.1002 18.4002 14.1002Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.3998 14.5L9.2998 19.6V21.2H12.1998V19.5H13.9998V17.9H15.6998L16.6998 16.9C15.5998 16.5 14.7998 15.6 14.3998 14.5Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
      {name === "employee" && (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.9992 12.5C10.1992 12.5 8.69922 11 8.69922 9.2V6.3C8.69922 4.5 10.0992 3 11.9992 3C13.7992 3 15.2992 4.5 15.2992 6.3V9.2C15.2992 11 13.7992 12.5 11.9992 12.5Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.8996 17.4002C19.6996 14.5002 17.1996 12.4002 14.0996 11.7002C13.4996 12.2002 12.7996 12.5002 11.9996 12.5002C11.1996 12.5002 10.3996 12.2002 9.89955 11.7002C6.79955 12.4002 4.29955 14.6002 3.19955 17.4002C2.99955 17.9002 3.19955 18.5002 3.59955 18.8002C5.79955 20.1002 8.79955 21.0002 11.9996 21.0002C15.1996 21.0002 18.1996 20.1002 20.4996 18.7002C20.9996 18.5002 21.0996 17.9002 20.8996 17.4002Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.0991 12.5004C11.7991 12.5004 11.3992 12.5004 11.1992 12.4004L11.5992 13.8004H12.5992L12.9992 12.4004C12.7991 12.502 12.3991 12.5004 12.0991 12.5004Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.5492 13.6992H12.1492H11.6492L10.4492 17.9992L12.1492 19.6992L13.8492 17.9992L12.5492 13.6992Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
      {name === "shift" && (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.3 19.3004H4C2.9 19.3004 2 18.4004 2 17.3004V5.40039C2 4.30039 2.9 3.40039 4 3.40039H17.3C18.4 3.40039 19.3 4.30039 19.3 5.40039V17.2004C19.3 18.4004 18.4 19.3004 17.3 19.3004Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.3 19.3H4C2.9 19.3 2 18.4 2 17.3V6.5H19.3V17.3C19.3 18.4 18.4 19.3 17.3 19.3Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.59961 2V4.6"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.6992 2V4.6"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.6992 2V4.6"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.50039 9.4002C9.83176 9.4002 10.1004 9.13157 10.1004 8.8002C10.1004 8.46882 9.83176 8.2002 9.50039 8.2002C9.16902 8.2002 8.90039 8.46882 8.90039 8.8002C8.90039 9.13157 9.16902 9.4002 9.50039 9.4002Z"
            fill="currentColor"
          />
          <path
            d="M12.2006 9.4002C12.532 9.4002 12.8006 9.13157 12.8006 8.8002C12.8006 8.46882 12.532 8.2002 12.2006 8.2002C11.8692 8.2002 11.6006 8.46882 11.6006 8.8002C11.6006 9.13157 11.8692 9.4002 12.2006 9.4002Z"
            fill="currentColor"
          />
          <path
            d="M14.9008 9.4002C15.2322 9.4002 15.5008 9.13157 15.5008 8.8002C15.5008 8.46882 15.2322 8.2002 14.9008 8.2002C14.5694 8.2002 14.3008 8.46882 14.3008 8.8002C14.3008 9.13157 14.5694 9.4002 14.9008 9.4002Z"
            fill="currentColor"
          />
          <path
            d="M17.7006 9.4002C18.032 9.4002 18.3006 9.13157 18.3006 8.8002C18.3006 8.46882 18.032 8.2002 17.7006 8.2002C17.3692 8.2002 17.1006 8.46882 17.1006 8.8002C17.1006 9.13157 17.3692 9.4002 17.7006 9.4002Z"
            fill="currentColor"
          />
          <path
            d="M4.00039 12.1004C4.33176 12.1004 4.60039 11.8318 4.60039 11.5004C4.60039 11.169 4.33176 10.9004 4.00039 10.9004C3.66902 10.9004 3.40039 11.169 3.40039 11.5004C3.40039 11.8318 3.66902 12.1004 4.00039 12.1004Z"
            fill="currentColor"
          />
          <path
            d="M6.70059 12.1004C7.03196 12.1004 7.30059 11.8318 7.30059 11.5004C7.30059 11.169 7.03196 10.9004 6.70059 10.9004C6.36921 10.9004 6.10059 11.169 6.10059 11.5004C6.10059 11.8318 6.36921 12.1004 6.70059 12.1004Z"
            fill="currentColor"
          />
          <path
            d="M9.50039 12.1004C9.83176 12.1004 10.1004 11.8318 10.1004 11.5004C10.1004 11.169 9.83176 10.9004 9.50039 10.9004C9.16902 10.9004 8.90039 11.169 8.90039 11.5004C8.90039 11.8318 9.16902 12.1004 9.50039 12.1004Z"
            fill="currentColor"
          />
          <path
            d="M12.2006 12.1004C12.532 12.1004 12.8006 11.8318 12.8006 11.5004C12.8006 11.169 12.532 10.9004 12.2006 10.9004C11.8692 10.9004 11.6006 11.169 11.6006 11.5004C11.6006 11.8318 11.8692 12.1004 12.2006 12.1004Z"
            fill="currentColor"
          />
          <path
            d="M4.00039 14.9002C4.33176 14.9002 4.60039 14.6316 4.60039 14.3002C4.60039 13.9688 4.33176 13.7002 4.00039 13.7002C3.66902 13.7002 3.40039 13.9688 3.40039 14.3002C3.40039 14.6316 3.66902 14.9002 4.00039 14.9002Z"
            fill="currentColor"
          />
          <path
            d="M6.70059 14.9002C7.03196 14.9002 7.30059 14.6316 7.30059 14.3002C7.30059 13.9688 7.03196 13.7002 6.70059 13.7002C6.36921 13.7002 6.10059 13.9688 6.10059 14.3002C6.10059 14.6316 6.36921 14.9002 6.70059 14.9002Z"
            fill="currentColor"
          />
          <path
            d="M9.50039 14.9002C9.83176 14.9002 10.1004 14.6316 10.1004 14.3002C10.1004 13.9688 9.83176 13.7002 9.50039 13.7002C9.16902 13.7002 8.90039 13.9688 8.90039 14.3002C8.90039 14.6316 9.16902 14.9002 9.50039 14.9002Z"
            fill="currentColor"
          />
          <path
            d="M4.00039 17.6004C4.33176 17.6004 4.60039 17.3318 4.60039 17.0004C4.60039 16.669 4.33176 16.4004 4.00039 16.4004C3.66902 16.4004 3.40039 16.669 3.40039 17.0004C3.40039 17.3318 3.66902 17.6004 4.00039 17.6004Z"
            fill="currentColor"
          />
          <path
            d="M6.70059 17.6004C7.03196 17.6004 7.30059 17.3318 7.30059 17.0004C7.30059 16.669 7.03196 16.4004 6.70059 16.4004C6.36921 16.4004 6.10059 16.669 6.10059 17.0004C6.10059 17.3318 6.36921 17.6004 6.70059 17.6004Z"
            fill="currentColor"
          />
          <path
            d="M9.50039 17.6004C9.83176 17.6004 10.1004 17.3318 10.1004 17.0004C10.1004 16.669 9.83176 16.4004 9.50039 16.4004C9.16902 16.4004 8.90039 16.669 8.90039 17.0004C8.90039 17.3318 9.16902 17.6004 9.50039 17.6004Z"
            fill="currentColor"
          />
          <path
            d="M17.3998 20.9998C19.9403 20.9998 21.9998 18.9403 21.9998 16.3998C21.9998 13.8593 19.9403 11.7998 17.3998 11.7998C14.8593 11.7998 12.7998 13.8593 12.7998 16.3998C12.7998 18.9403 14.8593 20.9998 17.3998 20.9998Z"
            fill="white"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.5996 14.5996L17.3996 16.6996L18.6996 16.1996"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
      {name === "parking" && (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.3704 7H7.73333C6.8 7 6.07407 7.53571 5.65926 8.25L4 12H18L16.3407 8.25C16.1333 7.44643 15.3037 7 14.3704 7Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.5 17.8H4.5C3.37614 17.8 2.5 16.9239 2.5 15.8V14C2.5 12.8761 3.37614 12 4.5 12H17.5C18.6239 12 19.5 12.8761 19.5 14V15.8C19.5 16.8369 18.611 17.8 17.5 17.8Z"
            stroke="currentColor"
          />
          <path
            d="M5.0998 20.4996H4.2998C4.11343 20.4996 3.99697 20.4397 3.92836 20.3711C3.85975 20.3024 3.7998 20.186 3.7998 19.9996V18.0996H5.5998V19.9996C5.5998 20.2915 5.35671 20.4996 5.0998 20.4996Z"
            fill="currentColor"
            stroke="currentColor"
          />
          <path
            d="M17.7004 20.4996H16.9004C16.714 20.4996 16.5976 20.4397 16.5289 20.3711C16.4603 20.3024 16.4004 20.186 16.4004 19.9996V18.0996H18.2004V19.9996C18.2004 20.186 18.1404 20.3024 18.0718 20.3711C18.0032 20.4397 17.8868 20.4996 17.7004 20.4996Z"
            fill="currentColor"
            stroke="currentColor"
          />
          <path
            d="M5.50039 15.9998C6.1079 15.9998 6.60039 15.5073 6.60039 14.8998C6.60039 14.2923 6.1079 13.7998 5.50039 13.7998C4.89288 13.7998 4.40039 14.2923 4.40039 14.8998C4.40039 15.5073 4.89288 15.9998 5.50039 15.9998Z"
            fill="currentColor"
          />
          <path
            d="M16.5004 15.9998C17.1079 15.9998 17.6004 15.5073 17.6004 14.8998C17.6004 14.2923 17.1079 13.7998 16.5004 13.7998C15.8929 13.7998 15.4004 14.2923 15.4004 14.8998C15.4004 15.5073 15.8929 15.9998 16.5004 15.9998Z"
            fill="currentColor"
          />
          <path
            d="M18 10C20.2091 10 22 8.20914 22 6C22 3.79086 20.2091 2 18 2C15.7909 2 14 3.79086 14 6C14 8.20914 15.7909 10 18 10Z"
            fill="white"
            stroke="currentColor"
            strokeMiterlimit="10"
          />
          <path
            d="M16.4004 8.39961V3.59961H17.9004C18.5004 3.59961 18.9004 3.59961 19.0004 3.69961C19.3004 3.79961 19.5004 3.89961 19.7004 4.19961C19.9004 4.49961 20.0004 4.69961 20.0004 5.09961C20.0004 5.39961 19.9004 5.59961 19.8004 5.79961C19.7004 5.99961 19.6004 6.19961 19.4004 6.29961C19.2004 6.39961 19.1004 6.49961 19.0004 6.49961C18.8004 6.49961 18.4004 6.59961 18.0004 6.59961H17.4004V8.39961H16.4004ZM17.4004 4.39961V5.69961H17.9004C18.3004 5.69961 18.5004 5.69961 18.7004 5.59961C18.8004 5.59961 18.9004 5.49961 19.0004 5.39961C19.0004 5.39961 19.0004 5.19961 19.0004 5.09961C19.0004 4.89961 19.0004 4.79961 18.8004 4.69961C18.7004 4.59961 18.6004 4.49961 18.4004 4.49961C18.3004 4.49961 18.1004 4.49961 17.7004 4.49961H17.4004V4.39961Z"
            fill="currentColor"
          />
        </svg>
      )}
      {name === "complaint" && (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.5 17.5C15.8137 17.5 18.5 14.8137 18.5 11.5C18.5 8.18629 15.8137 5.5 12.5 5.5C9.18629 5.5 6.5 8.18629 6.5 11.5C6.5 14.8137 9.18629 17.5 12.5 17.5Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.8996 13.9002C14.8996 13.9002 13.9996 12.7002 12.4996 12.7002C10.9996 12.7002 10.0996 13.9002 10.0996 13.9002"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.7002 10.2002C10.9763 10.2002 11.2002 9.97634 11.2002 9.7002C11.2002 9.42405 10.9763 9.2002 10.7002 9.2002C10.4241 9.2002 10.2002 9.42405 10.2002 9.7002C10.2002 9.97634 10.4241 10.2002 10.7002 10.2002Z"
            fill="currentColor"
          />
          <path
            d="M14.2998 10.2002C14.5759 10.2002 14.7998 9.97634 14.7998 9.7002C14.7998 9.42405 14.5759 9.2002 14.2998 9.2002C14.0237 9.2002 13.7998 9.42405 13.7998 9.7002C13.7998 9.97634 14.0237 10.2002 14.2998 10.2002Z"
            fill="currentColor"
          />
          <path
            d="M21 11.5C21 12.8 20.7 14.1 20.1 15.3C18.7 18.2 15.7 20 12.5 20C11.2 20 9.9 19.7 8.7 19.1L3 21L4.9 15.3C4.3 14.1 4 12.8 4 11.5C4 8.3 5.8 5.3 8.7 3.9C9.9 3.3 11.2 3 12.5 3H13C17.3 3.2 20.8 6.7 21 11V11.5Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </figure>
  );
}

IconList.propTypes = {
  name: propTypes.string,
  propClass: propTypes.string,
};

IconList.defaultProps = {
  name: "dashboard",
  propClass: "fill-neutral stroke-neutral",
};

export default IconList;
