import * as React from "react";
import BannerSection from "../HeroBanner";

// ✅ Simple cn helper
function cn(...inputs) {
  return inputs.filter(Boolean).join(" ");
}

// ✅ Slot implementation
const Slot = React.forwardRef(({ children, ...props }, ref) =>
  React.cloneElement(children, { ref, ...props })
);
Slot.displayName = "Slot";

// ✅ Minimal cva function
function cva(base, config) {
  return ({ variant, size, className } = {}) => {
    const variantClass = variant ? config.variants.variant[variant] : "";
    const sizeClass = size ? config.variants.size[size] : "";
    return cn(base, variantClass, sizeClass, className);
  };
}

// ✅ Button variants
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        primary: "bg-blue-600 text-white hover:bg-blue-900",
        secondary: "border border-white text-white hover:bg-white hover:text-blue-700",
      },
      size: {
        default: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

// ✅ Button component
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, href, ...props }, ref) => {
    const Comp = asChild ? Slot : "a";
    return (
      <Comp
        href={href}
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

// ✅ HeroBanner
const HeroBanner = () => {
  return (
    <BannerSection
  title="Facility Booking Portal"
  subtitle="Reserve auditoriums, conference halls, and other campus spaces at Gautam Buddha University in just a few clicks."
  bgTheme={1}
/>
  );
};

export default HeroBanner;
