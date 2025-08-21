import * as React from "react";
import { Download } from "lucide-react";

// ✅ Simple cn helper
function cn(...inputs) {
  return inputs.filter(Boolean).join(" ");
}

// ✅ Slot primitive for asChild
const Slot = React.forwardRef(({ children, ...props }, ref) =>
  React.cloneElement(children, { ref, ...props })
);
Slot.displayName = "Slot";

// ✅ Minimal cva (class variant authority)
function cva(base, config) {
  return ({ variant, size, className } = {}) => {
    const variantClass = variant ? config.variants.variant[variant] : "";
    const sizeClass = size ? config.variants.size[size] : "";
    return cn(base, variantClass, sizeClass, className);
  };
}

// ✅ Polished Button with subtle shadows & hover effects
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-colors duration-200 ease-in-out ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 shadow-sm hover:shadow-md [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-blue-600 text-white hover:bg-blue-700",
        outline: "border border-blue-600 text-blue-600 hover:bg-blue-50",
        ghost: "text-blue-600 hover:bg-blue-50",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 px-3 text-xs",
        lg: "h-11 px-6",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

// ✅ DownloadablePdfs — modern
const DownloadablePdfs = ({ pdfs }) => {
  if (!pdfs) return null;

  const handleDownload = (url, filename) => {
    // Normally you'd trigger real download logic here
    console.log(`Downloading ${filename} from ${url}`);
    alert(`Starting download: ${filename}`);
  };

  return (
    <div className="mt-6 space-y-3 rounded-xl p-4 bg-gray-50 border border-gray-200 shadow-sm">
      <h4 className="font-semibold text-blue-700">Download Documents</h4>
      <div className="flex flex-wrap gap-2">
        {pdfs.rateChart && (
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleDownload(pdfs.rateChart, "Rate Chart")}
          >
            <Download className="h-4 w-4" />
            Rate Chart
          </Button>
        )}
        {pdfs.bookingRules && (
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleDownload(pdfs.bookingRules, "Booking Rules")}
          >
            <Download className="h-4 w-4" />
            Booking Rules
          </Button>
        )}
        {pdfs.termsConditions && (
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleDownload(pdfs.termsConditions, "Terms & Conditions")}
          >
            <Download className="h-4 w-4" />
            Terms & Conditions
          </Button>
        )}
      </div>
    </div>
  );
};

export default DownloadablePdfs;
