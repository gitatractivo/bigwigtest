import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Cards from "./Cards";

type Props = {};

const MenuMobile = (props: Props) => {
  return (
    <div className="my-14 z-40">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>All Tools</AccordionTrigger>
          <AccordionContent>
            <Cards />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>In Demand Tools</AccordionTrigger>
          <AccordionContent>
            <Cards />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Social Media Tools</AccordionTrigger>
          <AccordionContent>
            <Cards />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default MenuMobile;
