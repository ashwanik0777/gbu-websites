import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown, ChevronUp } from "lucide-react";

// ✅ cn helper
function cn(...inputs) {
  return inputs.filter(Boolean).join(" ");
}

// ✅ Badge (subtle modern look)
const badgeVariants = (variant = "default") => {
  const base =
    "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors ring-1 ring-inset";
  const variants = {
    employee: "bg-blue-50 text-blue-800 ring-blue-200",
    student: "bg-green-50 text-green-800 ring-green-200",
    outsider: "bg-orange-50 text-orange-800 ring-orange-200",
    default: "bg-gray-100 text-gray-700 ring-gray-300",
  };
  return `${base} ${variants[variant] || variants.default}`;
};

function Badge({ className, variant, ...props }) {
  return <div className={cn(badgeVariants(variant), className)} {...props} />;
}

// ✅ Select
const Select = SelectPrimitive.Root;
const SelectValue = SelectPrimitive.Value;

const SelectTrigger = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <SelectPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex h-10 w-full items-center justify-between rounded-md border border-gray-300 bg-white px-4 py-2 text-sm shadow-sm transition-all hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDown className="h-4 w-4 opacity-50" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
);
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectScrollUpButton = React.forwardRef(
  ({ className, ...props }, ref) => (
    <SelectPrimitive.ScrollUpButton
      ref={ref}
      className={cn(
        "flex cursor-default items-center justify-center py-1",
        className
      )}
      {...props}
    >
      <ChevronUp className="h-4 w-4" />
    </SelectPrimitive.ScrollUpButton>
  )
);
SelectScrollUpButton.displayName =
  SelectPrimitive.ScrollUpButton.displayName;

const SelectScrollDownButton = React.forwardRef(
  ({ className, ...props }, ref) => (
    <SelectPrimitive.ScrollDownButton
      ref={ref}
      className={cn(
        "flex cursor-default items-center justify-center py-1",
        className
      )}
      {...props}
    >
      <ChevronDown className="h-4 w-4" />
    </SelectPrimitive.ScrollDownButton>
  )
);
SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName;

const SelectContent = React.forwardRef(
  ({ className, children, position = "popper", ...props }, ref) => (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        ref={ref}
        className={cn(
          "relative z-50 max-h-60 min-w-[8rem] overflow-hidden rounded-md border border-gray-200 bg-white shadow-lg ring-1 ring-black/5 data-[state=open]:animate-in data-[state=closed]:animate-out",
          className
        )}
        position={position}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport
          className={cn(
            "p-1",
            position === "popper" &&
              "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
);
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectItem = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <SelectPrimitive.Item
      ref={ref}
      className={cn(
        "relative flex w-full cursor-default select-none items-center rounded-md px-8 py-2 text-sm transition-colors hover:bg-gray-50 focus:bg-blue-50 focus:text-blue-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )}
      {...props}
    >
      <span className="absolute left-2 flex h-4 w-4 items-center justify-center">
        <SelectPrimitive.ItemIndicator>
          <Check className="h-4 w-4 text-blue-600" />
        </SelectPrimitive.ItemIndicator>
      </span>

      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  )
);
SelectItem.displayName = SelectPrimitive.Item.displayName;

// ✅ UserRoleSelector
const UserRoleSelector = ({ selectedRole, onRoleChange }) => {
  const roles = [
    {
      value: "employee",
      label: "Employee",
    },
    {
      value: "student",
      label: "Student",
    },
    {
      value: "outsider",
      label: "External/Outsider",
    },
  ];

  const currentRole = roles.find((role) => role.value === selectedRole);

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-6 rounded-xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center gap-2">
        <span className="text-sm font-medium text-gray-700 w-full">
          User Type:
        </span>
        <Badge variant={currentRole?.value}>{currentRole?.label}</Badge>
      </div>

      <Select value={selectedRole} onValueChange={onRoleChange}>
        <SelectTrigger className="w-48" />
        <SelectContent>
          {roles.map((role) => (
            <SelectItem key={role.value} value={role.value}>
              {role.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <span className="text-xs text-gray-500">
        Pricing adjusts based on your user type.
      </span>
    </div>
  );
};

export default UserRoleSelector;
