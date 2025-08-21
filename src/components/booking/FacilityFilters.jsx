import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown, ChevronUp } from "lucide-react";

// ✅ cn helper
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

// ✅ Card
const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex flex-col gap-1.5 p-6", className)} {...props} />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-xl font-semibold leading-tight tracking-tight text-gray-800", className)}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

// ✅ Badge
function Badge({ className, variant = "outline", ...props }) {
  const badgeVariants = {
    default:
      "inline-flex items-center rounded-full border border-transparent bg-blue-100 text-blue-800 px-3 py-1 text-xs font-medium transition-all",
    outline:
      "inline-flex items-center rounded-full border border-gray-300 bg-gray-50 text-gray-700 px-3 py-1 text-xs font-medium transition-all",
  };
  return (
    <div
      className={cn(
        badgeVariants[variant] || badgeVariants.default,
        "hover:shadow-md hover:scale-[1.03] hover:border-blue-400",
        className
      )}
      {...props}
    />
  );
}

// ✅ Select
const Select = SelectPrimitive.Root;
const SelectValue = SelectPrimitive.Value;

const SelectTrigger = React.forwardRef(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex h-10 w-full items-center justify-between rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 transition-shadow ring-offset-background placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 hover:border-gray-400 disabled:cursor-not-allowed disabled:opacity-50",
      className
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="h-4 w-4 opacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectScrollUpButton = React.forwardRef(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn("flex cursor-default items-center justify-center py-1", className)}
    {...props}
  >
    <ChevronUp className="h-4 w-4" />
  </SelectPrimitive.ScrollUpButton>
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;

const SelectScrollDownButton = React.forwardRef(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn("flex cursor-default items-center justify-center py-1", className)}
    {...props}
  >
    <ChevronDown className="h-4 w-4" />
  </SelectPrimitive.ScrollDownButton>
));
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;

const SelectContent = React.forwardRef(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border border-gray-200 bg-white shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0 data-[state=open]:scale-95 data-[state=open]:scale-100 data-[state=closed]:scale-95",
        position === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
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
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectItem = React.forwardRef(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex w-full cursor-pointer select-none items-center rounded-md px-8 py-2 text-sm text-gray-700 outline-none transition-colors hover:bg-blue-50 focus:bg-blue-50 focus:text-blue-800 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
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
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

// ✅ FacilityFilters
const FacilityFilters = ({ onFilterChange }) => {
  const [filters, setFilters] = React.useState({
    type: "all",
    capacity: "all",
    priceRange: "all",
    season: "peak",
  });

  const handleFilterChange = (key, value) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const facilityTypes = [
    { value: "all", label: "All Facilities" },
    { value: "auditorium", label: "Auditoriums" },
    { value: "conference", label: "Conference Rooms" },
    { value: "accommodation", label: "Accommodation" },
    { value: "sports", label: "Sports Facilities" },
    { value: "dining", label: "Kitchen & Dining" },
  ];

  const capacityRanges = [
    { value: "all", label: "Any Capacity" },
    { value: "50", label: "50+ people" },
    { value: "100", label: "100+ people" },
    { value: "200", label: "200+ people" },
    { value: "300", label: "300+ people" },
  ];

  const priceRanges = [
    { value: "all", label: "Any Price" },
    { value: "0-5000", label: "₹0 - ₹5,000" },
    { value: "5000-10000", label: "₹5,000 - ₹10,000" },
    { value: "10000-15000", label: "₹10,000 - ₹15,000" },
    { value: "15000+", label: "₹15,000+" },
  ];

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Filter Facilities</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">Facility Type</label>
            <Select value={filters.type} onValueChange={(value) => handleFilterChange("type", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                {facilityTypes.map((type) => (
                  <SelectItem key={type.value} value={type.value}>
                    {type.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">Capacity</label>
            <Select value={filters.capacity} onValueChange={(value) => handleFilterChange("capacity", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select capacity" />
              </SelectTrigger>
              <SelectContent>
                {capacityRanges.map((capacity) => (
                  <SelectItem key={capacity.value} value={capacity.value}>
                    {capacity.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">Price Range</label>
            <Select value={filters.priceRange} onValueChange={(value) => handleFilterChange("priceRange", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select price" />
              </SelectTrigger>
              <SelectContent>
                {priceRanges.map((range) => (
                  <SelectItem key={range.value} value={range.value}>
                    {range.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">Season</label>
            <Select value={filters.season} onValueChange={(value) => handleFilterChange("season", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select season" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="peak">Peak Season</SelectItem>
                <SelectItem value="offpeak">Off-Peak Season</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          <Badge variant="outline">Type: {facilityTypes.find((t) => t.value === filters.type)?.label}</Badge>
          <Badge variant="outline">Capacity: {capacityRanges.find((c) => c.value === filters.capacity)?.label}</Badge>
          <Badge variant="outline">Price: {priceRanges.find((p) => p.value === filters.priceRange)?.label}</Badge>
          <Badge variant="outline">Season: {filters.season === "peak" ? "Peak" : "Off-Peak"}</Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default FacilityFilters;
