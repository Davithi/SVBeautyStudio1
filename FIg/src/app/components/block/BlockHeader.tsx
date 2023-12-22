import React from "react";

export default function BlockHeader() {
  return (
    <div className="block_block__COJ2x">
      <h2 className="block_block_title__56E7P">
        Block<span>1</span>
      </h2>
      <div className="block_icons__Yosi1">
        <button>
          <svg
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.5"
              width="33"
              height="33"
              rx="3.5"
              fill="white"
            />
            <g filter="url(#filter0_d_1_909)">
              <circle cx="17" cy="17" r="9" fill="white" />
            </g>
            <rect
              x="0.5"
              y="0.5"
              width="33"
              height="33"
              rx="3.5"
              stroke="#F2F2F2"
            />
            <defs>
              <filter
                id="filter0_d_1_909"
                x="3"
                y="3"
                width="28"
                height="28"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="2.5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_1_909"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_1_909"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </button>
        <button>
          <svg
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.5"
              width="33"
              height="33"
              rx="3.5"
              fill="white"
            />
            <path d="M8 18.5L8 15.5L26 15.5V18.5L8 18.5Z" fill="#E6E6E6" />
            <path d="M8 12.5L8 9.5L26 9.5V12.5L8 12.5Z" fill="#E6E6E6" />
            <path d="M8 24.5L8 21.5L26 21.5V24.5H8Z" fill="#E6E6E6" />
            <rect
              x="0.5"
              y="0.5"
              width="33"
              height="33"
              rx="3.5"
              stroke="#F2F2F2"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
