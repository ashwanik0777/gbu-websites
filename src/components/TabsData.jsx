import React, { useState } from "react";

const SIZE_CLASSES = {
    xs: "px-2 py-1 text-xs font-medium",
    sm: "px-3 py-1.5 text-sm font-medium",
    md: "px-4 py-2 text-sm font-medium",
    lg: "px-6 py-3 text-base font-medium",
    xl: "px-8 py-4 text-lg font-medium",
};

const THEME_VARIANTS = {
    light: {
        container: "bg-white/80 backdrop-blur-sm border-gray-200/50 shadow-lg",
        button: {
            base: "text-gray-700 border-gray-200/50 hover:bg-gray-50/80 hover:border-gray-300 hover:shadow-md",
            active: "bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-blue-600 shadow-xl",
            focus: "focus:ring-blue-500/50 focus:border-blue-500"
        }
    },
    dark: {
        container: "bg-gray-900/90 backdrop-blur-sm border-gray-700/50 shadow-2xl",
        button: {
            base: "text-gray-300 border-gray-700/50 hover:bg-gray-800/80 hover:border-gray-600 hover:shadow-lg",
            active: "bg-gradient-to-r from-blue-500 to-purple-600 text-white border-blue-500 shadow-xl",
            focus: "focus:ring-blue-400/50 focus:border-blue-400"
        }
    },
    primary: {
        container: "bg-blue-50/80 backdrop-blur-sm border-blue-200/50 shadow-lg",
        button: {
            base: "text-blue-700 border-blue-200/50 hover:bg-blue-100/80 hover:border-blue-300 hover:shadow-md",
            active: "bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-blue-600 shadow-xl",
            focus: "focus:ring-blue-500/50 focus:border-blue-500"
        }
    },
    success: {
        container: "bg-emerald-50/80 backdrop-blur-sm border-emerald-200/50 shadow-lg",
        button: {
            base: "text-emerald-700 border-emerald-200/50 hover:bg-emerald-100/80 hover:border-emerald-300 hover:shadow-md",
            active: "bg-gradient-to-r from-emerald-600 to-teal-600 text-white border-emerald-600 shadow-xl",
            focus: "focus:ring-emerald-500/50 focus:border-emerald-500"
        }
    },
    warning: {
        container: "bg-amber-50/80 backdrop-blur-sm border-amber-200/50 shadow-lg",
        button: {
            base: "text-amber-700 border-amber-200/50 hover:bg-amber-100/80 hover:border-amber-300 hover:shadow-md",
            active: "bg-gradient-to-r from-amber-600 to-orange-600 text-white border-amber-600 shadow-xl",
            focus: "focus:ring-amber-500/50 focus:border-amber-500"
        }
    },
    danger: {
        container: "bg-red-50/80 backdrop-blur-sm border-red-200/50 shadow-lg",
        button: {
            base: "text-red-700 border-red-200/50 hover:bg-red-100/80 hover:border-red-300 hover:shadow-md",
            active: "bg-gradient-to-r from-red-600 to-pink-600 text-white border-red-600 shadow-xl",
            focus: "focus:ring-red-500/50 focus:border-red-500"
        }
    },
    neon: {
        container: "bg-black/90 backdrop-blur-sm border-cyan-400/30 shadow-2xl shadow-cyan-500/20",
        button: {
            base: "text-cyan-300 border-cyan-400/30 hover:bg-cyan-500/10 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/20",
            active: "bg-gradient-to-r from-cyan-500 to-blue-500 text-black border-cyan-400 shadow-xl shadow-cyan-500/50",
            focus: "focus:ring-cyan-400/50 focus:border-cyan-400"
        }
    },
    glass: {
        container: "bg-white/10 backdrop-blur-xl border-white/20 shadow-2xl",
        button: {
            base: "text-white/90 border-white/20 hover:bg-white/20 hover:border-white/30 hover:shadow-lg",
            active: "bg-white/30 text-white border-white/40 shadow-xl",
            focus: "focus:ring-white/50 focus:border-white/50"
        }
    }
};

const ButtonGroup = ({
    buttons = [],
    onClick = () => { },
    activeButton = null,
    theme = "light",
    size = "md",
    className = "",
    fullWidth = false,
    orientation = "horizontal",
    rounded = "md",
    animated = true,
    disabled = false,
    loading = false,
    gap = false,
    allowMultiple = false,
    activeButtons = [],
    onMultipleClick = () => { },
}) => {
    const [hoveredButton, setHoveredButton] = useState(null);
    const [pressedButton, setPressedButton] = useState(null);

    const themeConfig = THEME_VARIANTS[theme] || THEME_VARIANTS.light;

    const roundedClasses = {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        "2xl": "rounded-2xl",
        full: "rounded-full"
    };

    const containerClasses = `
    ${orientation === "vertical" ? "inline-flex flex-col" : "inline-flex flex-row"}
    ${orientation === "vertical" ? "w-full" : "flex-wrap"}
    ${gap ? "gap-2" : ""}
    ${!gap ? roundedClasses[rounded] : ""}
    ${!gap ? "overflow-hidden border" : ""}
    ${!gap ? themeConfig.container : ""}
    ${animated ? "transition-all duration-300 ease-in-out" : ""}
    ${fullWidth ? "w-full" : ""}
    ${className}
  `;

    const getButtonClasses = (btn, index) => {
        const isFirst = index === 0;
        const isLast = index === buttons.length - 1;
        const isActive = allowMultiple
            ? activeButtons.includes(btn.id)
            : activeButton === btn.id;
        const isHovered = hoveredButton === btn.id;
        const isPressed = pressedButton === btn.id;

        return `
      relative flex items-center justify-center gap-2 border overflow-hidden
      ${SIZE_CLASSES[size] || SIZE_CLASSES["md"]}
      ${gap ? roundedClasses[rounded] : ""}
      ${!gap && orientation === "horizontal" ? (isFirst ? "rounded-l-" + rounded : isLast ? "rounded-r-" + rounded : "") : ""}
      ${!gap && orientation === "vertical" ? (isFirst ? "rounded-t-" + rounded : isLast ? "rounded-b-" + rounded : "") : ""}
      ${!gap && orientation === "horizontal" && !isFirst ? "border-l-0" : ""}
      ${!gap && orientation === "vertical" && !isFirst ? "border-t-0" : ""}
      ${fullWidth ? "flex-1" : ""}
      ${orientation === "vertical" ? "w-full" : ""}
      ${animated ? "transition-all duration-300 ease-in-out transform" : ""}
      ${animated && isHovered ? "scale-[1.02] -translate-y-0.5" : ""}
      ${animated && isPressed ? "scale-[0.98] translate-y-0.5" : ""}
      ${isActive ? themeConfig.button.active : themeConfig.button.base}
      ${themeConfig.button.focus}
      ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
      ${loading ? "cursor-wait" : ""}
      focus:z-10 focus:ring-2 focus:outline-none
      select-none group
      ${gap ? "shadow-lg hover:shadow-xl" : ""}
      ${isActive && animated ? "shadow-2xl" : ""}
    `;
    };

    const handleClick = (btnId) => {
        if (disabled || loading) return;

        if (allowMultiple) {
            onMultipleClick(btnId);
        } else {
            onClick(btnId);
        }
    };

    const LoadingSpinner = () => (
        <div className="animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent"></div>
    );

    const rippleEffect = (e) => {
        if (!animated) return;

        const button = e.currentTarget;
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        const ripple = document.createElement('div');
        ripple.classList.add('ripple');
        ripple.style.cssText = `
      position: absolute;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.4);
      transform: scale(0);
      animation: ripple-animation 0.6s ease-out;
      left: ${x}px;
      top: ${y}px;
      width: ${size}px;
      height: ${size}px;
      pointer-events: none;
      z-index: 10;
    `;

        button.appendChild(ripple);
        setTimeout(() => {
            ripple.remove();
        }, 600);
    };

    React.useEffect(() => {
        const style = document.createElement('style');
        style.textContent = `
      @keyframes ripple-animation {
        to {
          transform: scale(2.5);
          opacity: 0;
        }
      }
      @keyframes pulse-glow {
        0%, 100% {
          box-shadow: 0 0 5px rgba(59, 130, 246, 0.5);
        }
        50% {
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.8);
        }
      }
      @keyframes float {
        0%, 100% {
          transform: translateY(0px);
        }
        50% {
          transform: translateY(-2px);
        }
      }
    `;
        document.head.appendChild(style);

        return () => {
            document.head.removeChild(style);
        };
    }, []);

    return (
        <div className="Container mx-auto px-16 py-8 space-y-8">
        <div className={containerClasses } role="group">
            {buttons.map((btn, index) => {
                const isActive = allowMultiple
                    ? activeButtons.includes(btn.id)
                    : activeButton === btn.id;
                const isHovered = hoveredButton === btn.id;

                return (
                    <button
                        key={btn.id}
                        type="button"
                        onClick={(e) => {
                            rippleEffect(e);
                            handleClick(btn.id);
                        }}
                        onMouseEnter={() => setHoveredButton(btn.id)}
                        onMouseLeave={() => setHoveredButton(null)}
                        onMouseDown={() => setPressedButton(btn.id)}
                        onMouseUp={() => setPressedButton(null)}
                        disabled={disabled || loading}
                        className={getButtonClasses(btn, index)}
                        aria-pressed={isActive}
                        title={btn.tooltip}
                    >

                        {/* Loading state */}
                        {loading && <LoadingSpinner />}

                        {/* Icon with enhanced animations */}
                        {btn.icon && !loading && (
                            <span className={`
                flex items-center justify-center
                ${animated ? "transition-all duration-300 ease-in-out" : ""}
                ${isActive ? "scale-105 rotate-3" : ""}
                ${isHovered ? "scale-105 -rotate-1" : ""}
                ${isActive && theme === 'neon' ? "drop-shadow-lg" : ""}
              `}>
                                {btn.icon}
                            </span>
                        )}

                        {/* Label with enhanced typography */}
                        <span className={`
              ${animated ? "transition-all duration-300 ease-in-out" : ""}
              ${isActive ? "font-bold tracking-wide" : "font-medium"}
              ${isHovered ? "tracking-wide" : ""}
              truncate
            `}>
                            {btn.label}
                        </span>

                        {/* Badge with enhanced styling */}
                        {btn.badge && (
                            <span className={`
                inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none
                ${isActive ? "bg-white/90 text-blue-600" : "bg-gradient-to-r from-red-500 to-pink-500 text-white"}
                rounded-full min-w-[1.25rem] h-5 shadow-md
                ${animated ? "transition-all duration-300 transform" : ""}
                ${isHovered ? "scale-105 shadow-lg" : ""}
              `}>
                                {btn.badge}
                            </span>
                        )}
                       
                    </button>
                );
            })}
        </div>
        </div>
    );
};

export default ButtonGroup;


// using this component in a file like 

// const [activeButton, setActiveButton] = useState("home");
  
//   const navigationButtons = [
//     { id: "home", label: "Home", icon: <Home size={18} />, tooltip: "Go to home" },
//     { id: "about", label: "About", icon: <Info size={18} />, tooltip: "About us" },
//     { id: "services", label: "Services", icon: <Settings size={18} />, tooltip: "Our services", badge: "New" },
//     { id: "contact", label: "Contact", icon: <Mail size={18} />, tooltip: "Contact us" }
//   ];


// <ButtonGroup
//             buttons={navigationButtons}
//             onClick={setActiveButton}
//             activeButton={activeButton}
//             size="lg"
//             fullWidth={true}
//             rounded="2xl"
//             animated={true}
//             className="sm:flex-nowrap"
//           />