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
                    ? "grid-rows-[1fr] opacity-100 !py-4"
                    : "grid-rows-[0fr] opacity-0"
                    }`}
            >
                <div className="w-full overflow-hidden flex flex-col !px-2 gap-4 items-center">

                    <div className="w-full flex flex-col gap-3 justify-around items-center">
                        <div className="w-full flex justify-between items-center gap-2">
                            <button className="!text-2xl !cursor-pointer !px-4 !py-1 rounded border-1 border-[#23b5b5]">Format</button>
                            <div className="!text-2xl">
                                <label for="cars">Summary Type :</label>

                                <select className="outline-none !cursor-pointer !px-4 !py-1 rounded !border-1 !border-[#23b5b5]" name="cars" id="cars">
                                    <option value="volvo">Insights</option>
                                    <option value="saab">Short</option>
                                    <option value="mercedes">Detailed</option>
                                </select>
                            </div>

                        </div>
                        <div className="w-full flex justify-between items-center gap-2">
                            <button className="!text-2xl !cursor-pointer !px-4 !py-1 rounded border-1 border-[#23b5b5]">Transcript</button>
                            <div className="!text-2xl">
                                <label for="cars">Language :</label>

                                <select className="outline-none !cursor-pointer !px-4 !py-1 rounded !border-1 !border-[#23b5b5] " name="cars" id="cars">
                                    <option value="volvo">English</option>
                                    <option value="saab">Hindi</option>
                                    <option value="mercedes">German</option>
                                    <option value="mercedes">french</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <button className=" w-fit !text-2xl !cursor-pointer !px-5 !py-1 rounded !bg-[#23b5b5]">Summarize</button>
                    <div className="!text-2xl !font-thin mt-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti sunt quam dolorum rem labore quisquam consequatur, molestiae ea quae distinctio dolor alias nostrum enim harum, quia sed reprehenderit eius. Rem, impedit consequuntur debitis suscipit earum optio ratione in possimus mollitia? Aspernatur rem consequatur perferendis explicabo error, culpa ex atque porro expedita quibusdam quod molestias reprehenderit dolore non molestiae natus eligendi corporis corrupti hic obcaecati consectetur. Repellat hic quasi mollitia tempore voluptatibus vitae, soluta ab veritatis aliquid incidunt esse et est repudiandae nulla rerum quis ad beatae? Enim cupiditate consequatur saepe sed quas. Recusandae, iure inventore? Deserunt repudiandae reiciendis nihil adipisci quas autem numquam ducimus delectus ratione veritatis nobis molestias inventore sit repellat, quidem assumenda minus nisi a odio velit tempora. Soluta nihil nesciunt reiciendis sint quidem explicabo voluptatu</div>

                </div>
            </div>
        </div>
    );
};

export default Accordion;

