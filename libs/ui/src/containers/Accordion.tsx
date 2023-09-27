// 'use client';

import {
  Accordion as AccordionRoot,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../shadcn/accordion';

export const Accordion = () => {
  return (
    <AccordionRoot type="single" collapsible>
      <AccordionItem value="item-1" className='dark:border-neutral-800 border-neutral-200'>
        <AccordionTrigger className={`outline-none`}>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
    </AccordionRoot>
  );
};
