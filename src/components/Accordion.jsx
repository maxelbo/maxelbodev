import { Disclosure, Transition } from "@headlessui/react";

export default function Accordion({ title, children }) {
  return (
    <Disclosure className="flex justify-center text-center">
      {({ open }) => (
        <>
          <Disclosure.Button className="accordion-title relative w-0">
            <h2 className="flex justify-center text-2xl font-bold">{title}</h2>
          </Disclosure.Button>
          <Transition
            show={open}
            enter="transition duration-150 ease-out"
            enterFrom="transform scale-72 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-100 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-72 opacity-0"
          >
            <Disclosure.Panel static>{children}</Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
}
