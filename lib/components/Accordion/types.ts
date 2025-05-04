export interface AccordionItem {
  id: number;
  title: string;
  content: string;
}

export interface AccordionProps {
  accordionData: AccordionItem[];
  accordionTitle?: string;
}
