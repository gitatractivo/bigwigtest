import { useState } from "react";
import { cn } from "../utils/funcitons";

const buttons = [
  {
    title: "All",
  },
  {
    title: "Social Media Tools",
  },
  {
    title: "Seo Tools",
  },
  {
    title: "Website Tools",
  },
  {
    title: "Email Tools",
  },
  {
    title: "BLog Creator",
  },
  {
    title: "Article Creator",
  },
];
const Menu = () => {
  const [selectedButton, setSelectedButton] =
    useState<String>("Article Creator");
    const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative flex flex-row mt-14 justify-end gap-3 my-4 z-10  w-5/6 mx-auto">
      <div
        className={cn(
          " absolute left-0 z-40  w-[calc(100%-68px)] mx-w-[240] md:auto lg:[644px]  h-16 py-2 px-10   rounded-md bg-white shadow-md transition-all  duration-1000 delay-1000",
          isOpen && "h-fit overflow-auto "
        )}
      >
        <div
          className={cn(
            "w-full flex flex-row items-center justify-start overflow-hidden  gap-4 transition-all duration-300",
            isOpen && "h-fit overflow-auto flex-wrap justify-center"
          )}
        >
          {buttons.map((button) => (
            <button
              className={cn(
                "text-[rgba(30,30,30,0.50)] font-outfit  border-none p-3 min-w-fit text-base font-medium",
                button.title === selectedButton &&
                  " border-gradient border-gradient-1 items-start"
              )}
              onClick={() => setSelectedButton(button.title)}
            >
              {button.title}
            </button>
          ))}
          {buttons.map((button) => (
            <button
              className={cn(
                "text-[rgba(30,30,30,0.50)] font-outfit  border-none p-3 min-w-fit text-base font-medium",
                button.title === selectedButton &&
                  " border-gradient border-gradient-1 items-start"
              )}
              onClick={() => setSelectedButton(button.title)}
            >
              {button.title}
            </button>
          ))}
          {buttons.map((button) => (
            <button
              className={cn(
                "text-[rgba(30,30,30,0.50)] font-outfit  border-none p-3 min-w-fit text-base font-medium",
                button.title === selectedButton &&
                  " border-gradient border-gradient-1 items-start"
              )}
              onClick={() => setSelectedButton(button.title)}
            >
              {button.title}
            </button>
          ))}
          {buttons.map((button) => (
            <button
              className={cn(
                "text-[rgba(30,30,30,0.50)] font-outfit  border-none p-3 min-w-fit text-base font-medium",
                button.title === selectedButton &&
                  " border-gradient border-gradient-1 items-start"
              )}
              onClick={() => setSelectedButton(button.title)}
            >
              {button.title}
            </button>
          ))}
        </div>
      </div>

      <div className="w-14 h-14">
        <button
          className={cn(
            "flex flex-col w-30 h-16 p-4  items-center justify-center gap-4 rounded-md bg-white shadow-md "
          )}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={cn(
              "w-30 h-30  transition-all duration-300 ",
              isOpen && "rotate-180"
            )}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
            >
              <path
                d="M22.5 15L15 22.5L7.5 15"
                stroke="#1E1E1E"
                stroke-width="1.875"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M22.5 7.5L15 15L7.5 7.5"
                stroke="#1E1E1E"
                stroke-width="1.875"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
};
export default Menu;
