import * as React from "react";
import { motion } from "framer-motion";
import { Slot } from "@radix-ui/react-slot";
import { Download, FileText, Newspaper, Calendar, File } from "lucide-react";

// Utility
function cn(...inputs) {
  return inputs.filter(Boolean).join(" ");
}

function cva(base, config) {
  return ({ variant, size, className }) => {
    const variantClasses = {
      default:
        "bg-primary text-primary-foreground hover:bg-primary/90",
      destructive:
        "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      outline:
        "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
      secondary:
        "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "text-primary underline-offset-4 hover:underline",
    }[variant || config.defaultVariants.variant];

    const sizeClasses = {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3",
      lg: "h-11 rounded-md px-8",
      icon: "h-10 w-10",
    }[size || config.defaultVariants.size];

    return cn(base, variantClasses, sizeClasses, className);
  };
}

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "",
        destructive: "",
        outline: "",
        secondary: "",
        ghost: "",
        link: "",
      },
      size: {
        default: "",
        sm: "",
        lg: "",
        icon: "",
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
        className={buttonVariants({ variant, size, className })}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

const RecruitmentTable = ({ rows }) => {
  const defaultRows = [
    { description: "Extension Notice", icon: <Calendar className="w-4 h-4" /> },
    { description: "Detailed Advertisement", icon: <FileText className="w-4 h-4" /> },
    { description: "Newspaper Publication", icon: <Newspaper className="w-4 h-4" /> },
    { description: "Application Form (PDF)", icon: <File className="w-4 h-4" /> },
    { description: "Application Form (Word)", icon: <Download className="w-4 h-4" /> },
  ];

  const tableRows = rows || defaultRows;

  return (
    <div className="overflow-hidden rounded-2xl bg-white/60 backdrop-blur-md shadow-xl">
      <table className="w-full">
        <thead>
          <tr className="bg-gradient-to-r from-sky-100/80 to-sky-50/70 backdrop-blur-md shadow-sm">
            <th className="px-4 md:px-6 py-4 text-left font-semibold text-sm md:text-base">
              Description
            </th>
            <th className="px-4 md:px-6 py-4 text-center font-semibold text-sm md:text-base w-32 md:w-40">
              Download Link
            </th>
          </tr>
        </thead>
        <tbody>
          {tableRows.map((row, index) => (
            <motion.tr
              key={index}
              className={cn(
                "transition-all duration-300 backdrop-blur-md",
                index % 2 === 0 ? "bg-white/50" : "bg-white/30"
              )}
              whileHover={{
                scale: 1.015,
                boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
              }}
            >
              <td className="px-4 md:px-6 py-5">
                <div className="flex items-center gap-3">
                  <span className="text-sky-600">{row.icon}</span>
                  <span className="text-sm md:text-base font-medium">
                    {row.description}
                  </span>
                </div>
              </td>
              <td className="px-4 md:px-6 py-5 text-center">
                <Button
                  className="bg-sky-500 hover:bg-sky-700 text-white rounded-full px-4 md:px-6 py-2 transition-all duration-200 hover:shadow-xl hover:scale-105 text-xs md:text-sm font-medium"
                  size="sm"
                >
                  View Details
                </Button>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecruitmentTable;
