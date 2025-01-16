import React, { useState } from "react";

const Accordion = ({ title, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);
  return (
    <>
      {/* {faqs.map((question,answer,index) => ( */}
      <div className="py-2 border-b-stone-500 border-y-2">
        <button
          className="flex justify-between w-full pb-2"
          onClick={() => setAccordionOpen(!accordionOpen)}
        >
          <span className="text-lg">{title}</span>
          <div className="text-xl text-blue-500 font-bold">
            {/* {accordionOpen ? <span>-</span> : <span>+</span>} */}
            <svg
              className="fill-indigo-500 shrink-0 ml-8"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                y="7"
                width="16"
                height="2"
                rx="1"
                className={`transform origin-center transition duration-200 ease-out ${
                  accordionOpen && "!rotate-180"
                }`}
              />
              <rect
                y="7"
                width="16"
                height="2"
                rx="1"
                className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                  accordionOpen && "!rotate-180"
                }`}
              />
            </svg>
          </div>
          
        </button>
        <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 ${accordionOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
            <div className='overflow-hidden text-base font-bold'>
               {answer}
            </div>
        </div>
      </div>
    </>
  );
};

export default Accordion;
