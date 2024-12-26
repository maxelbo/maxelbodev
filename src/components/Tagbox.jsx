"use client";

import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { dekebabize } from "@/scripts/utils";

export default function Tagbox({ pageTitle, tagList }) {
  return (
    <Listbox value={pageTitle} className="relative mt-1">
      <div className="relative mt-1">
        <Listbox.Button className="relative h-12 w-full cursor-default rounded-lg bg-white dark:bg-black py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
          <span className="capitalize">{dekebabize(pageTitle)}</span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5 text-gray-500 dark:text-gray-300"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
              />
            </svg>
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-black py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {tagList.map((tagOption, i) => (
              <Listbox.Option
                key={i}
                className={({ selected }) =>
                  `relative cursor-default select-none py-2 pl-3 text-left
                    ${selected ? "bg-slate-100 text-gray-900 dark:bg-slate-900 dark:text-gray-100" : "text-gray-700 dark:text-gray-400"}
                  `
                }
                value={dekebabize(tagOption)}
              >
                <a
                  href={`/projects/${tagOption}/`}
                  className="block truncate capitalize"
                >
                  {dekebabize(tagOption)}
                </a>
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
}
