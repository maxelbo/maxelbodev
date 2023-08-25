import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavMenu({ menuLinks }) {
  return (
    <Menu as="div" className="relative inline-block text-left sm:hidden">
      <div>
        <Menu.Button className="flex items-center rounded-full text-gray-400 focus:outline-none">
          <span className="sr-only">Open menu</span>
          <span className="m-4 space-y-1.5" aria-hidden="true">
            {[1, 2, 3].map((i) => (
              <span
                key={i}
                className="block h-0.5 w-6 rounded bg-gray-900 focus:bg-gray-600"
              />
            ))}
          </span>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-3 z-10 mt-2 w-24 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {menuLinks.map(({ url, title }, i) => (
              <Menu.Item>
                {({ active }) => (
                  <a
                    key={i}
                    href={url}
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-lg"
                    )}
                  >
                    {title}
                  </a>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
