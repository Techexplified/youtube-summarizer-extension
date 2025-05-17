import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Accordion = () => {
    const [accordionOpen, setAccordionOpen] = useState(false);

    return (
        <div className="py-2 w-full">
            <button
                onClick={() => setAccordionOpen(!accordionOpen)}
                className="flex justify-between w-full items-center"
            >
                <div className="flex flex-row justify-center items-center gap-4">
                    <img className={`!h-[20px] transition-all duration-500 ${accordionOpen && "rotate-[360deg]"
                }`} src="https://explified-home.web.app/assets/explified_logo-6aolyOfR.png" alt="" />
                    <span className="!text-[16px]">Transcript & Summary</span>
                </div>
                {/* {accordionOpen ? <span>-</span> : <span>+</span>} */}
                <div className="!text-[13px] !transitions-all !duration-300">
                    {accordionOpen ? <FaChevronUp /> : <FaChevronDown />}
                </div>
            </button>
            <div
                className={`grid overflow-hidden transition-all duration-300 ease-in-out ${accordionOpen
                    ? "grid-rows-[1fr] opacity-100 py-4"
                    : "grid-rows-[0fr] opacity-0"
                    }`}
            >
                <div className="overflow-hidden !px-2 !text-2xl !font-thin !text-[#babdbd]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti sunt quam dolorum rem labore quisquam consequatur, molestiae ea quae distinctio dolor alias nostrum enim harum, quia sed reprehenderit eius. Rem, impedit consequuntur debitis suscipit earum optio ratione in possimus mollitia? Aspernatur rem consequatur perferendis explicabo error, culpa ex atque porro expedita quibusdam quod molestias reprehenderit dolore non molestiae natus eligendi corporis corrupti hic obcaecati consectetur. Repellat hic quasi mollitia tempore voluptatibus vitae, soluta ab veritatis aliquid incidunt esse et est repudiandae nulla rerum quis ad beatae? Enim cupiditate consequatur saepe sed quas. Recusandae, iure inventore? Deserunt repudiandae reiciendis nihil adipisci quas autem numquam ducimus delectus ratione veritatis nobis molestias inventore sit repellat, quidem assumenda minus nisi a odio velit tempora. Soluta nihil nesciunt reiciendis sint quidem explicabo voluptatum ea saepe quisquam numquam. Perspiciatis molestias illo voluptatem eligendi, alias neque quibusdam ex sunt sint exercitationem at eos minima et enim reprehenderit dolorum doloremque expedita magnam nisi asperiores dignissimos. Praesentium dolor ducimus sunt odio atque officiis voluptatum delectus fugiat incidunt. Porro, ratione dignissimos provident autem ipsam corporis impedit expedita illum quia accusantium explicabo laborum enim assumenda qui, maxime, optio tempore! Modi sapiente sit aliquam minima, excepturi numquam ab voluptatum debitis aspernatur laboriosam.</div>
            </div>
        </div>
    );
};

export default Accordion;