import React from "react";

export default function Blocktextright({
  title,
  children
}) {
  return (
    <div>
      <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
        <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
          <h2 class="text-gray-900 text-lg title-font font-medium mb-2">
            {title}
          </h2>
          <p class="leading-relaxed text-base">
            {children}
          </p>
        </div>
        <div class="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="sm:w-16 sm:h-16 w-10 h-10"
            viewBox="0 0 24 24"
          >
            <circle
              cx="6"
              cy="6"
              r="3"
            ></circle>
            <circle
              cx="6"
              cy="18"
              r="3"
            ></circle>
            <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
          </svg>
        </div>
      </div>
    </div>
  );
}
