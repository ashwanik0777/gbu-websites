import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

/**
 * Simple cn helper for Tailwind merging.
 */
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

// ✅ Accordion Root
const Accordion = AccordionPrimitive.Root;

// ✅ AccordionItem — soft border & shadow
const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(
      "border-b border-gray-300 last:border-none overflow-hidden transition-shadow",
      className
    )}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

// ✅ AccordionTrigger — modern spacing, hover, rotate
const AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 px-2 font-medium text-blue-700 transition-all hover:bg-blue-50/50 rounded-md [&[data-state=open]>svg]:rotate-180",
        "focus:outline-none focus:ring-2 focus:ring-blue-200",
        className
      )}
      {...props}
    >
      <span>{children}</span>
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-300" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

// ✅ AccordionContent — subtle slide with fade
const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
      "bg-white pt-2 px-2 pb-4"
    )}
    {...props}
  >
    <div className={cn("pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

// ✅ FacilityAccordion with modern spacing & effects
const FacilityAccordion = ({ bookingGuidelines, termsConditions, cancellationPolicy }) => {
  const formatText = (items) =>
    items.map((item, index) => (
      <li
        key={index}
        className="mb-1.5 pl-4 text-[0.95rem] text-gray-700 relative before:absolute before:left-0 before:top-2 before:h-1 before:w-1 before:rounded-full before:bg-blue-600"
      >
        {item}
      </li>
    ));

  return (
    <Accordion type="single" collapsible className="w-full mt-6 rounded-xl px-1 shadow-1xl border border-gray-300 bg-white">
      <AccordionItem value="guidelines">
        <AccordionTrigger>Booking Guidelines</AccordionTrigger>
        <AccordionContent>
          <ul className="relative space-y-1">{formatText(bookingGuidelines)}</ul>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="terms">
        <AccordionTrigger>Terms & Conditions</AccordionTrigger>
        <AccordionContent>
          <ul className="relative space-y-1">{formatText(termsConditions)}</ul>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="cancellation">
        <AccordionTrigger>Cancellation Policy</AccordionTrigger>
        <AccordionContent>
          <ul className="relative space-y-1">{formatText(cancellationPolicy)}</ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default FacilityAccordion;
