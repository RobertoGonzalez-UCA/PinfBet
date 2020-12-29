import React from "react";

export default function Blocktextright({
  title,
  children,
  icon
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
        <div class="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 flex-shrink-0">
          {icon}
        </div>
      </div>
    </div>
  );
}
