
const Card = ({ className = "", children, ...props }) => (
    <div
        className={
            "rounded-2xl bg-white shadow-md border border-gray-200 " +
            className
        }
        {...props}
    >
        {children}
    </div>
);

const CardHeader = ({ className = "", children, ...props }) => (
    <div
        className={
            "px-6 pt-6 pb-2 rounded-t-2xl bg-gradient-to-br from-blue-50 to-white " +
            className
        }
        {...props}
    >
        {children}
    </div>
);

const CardTitle = ({ className = "", children, ...props }) => (
    <h3
        className={
            "text-xl font-semibold tracking-tight " +
            className
        }
        {...props}
    >
        {children}
    </h3>
);

const CardContent = ({ className = "", children, ...props }) => (
    <div
        className={
            "px-6 " +
            className
        }
        {...props}
    >
        {children}
    </div>
);

const CardDescription = ({ className = "", children, ...props }) => (
    <p
        className={
            "text-gray-500 text-base " +
            className
        }
        {...props}
    >
        {children}
    </p>
);
import { useNavigate } from "react-router-dom";

/**
 * @typedef {Object} FeatureCardProps
 * @property {string} title
 * @property {string} description
 * @property {React.ComponentType} icon
 * @property {string} link
 */

const FeatureCard = ({ title, description, icon: Icon, link }) => {
  const navigate = useNavigate();

  return (
    <Card 
      className="h-full min-h-[200px] hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105 border-0 shadow-md bg-gradient-to-br from-white to-blue-50/50 group"
      onClick={() => navigate(link)}
    >
      <CardHeader className="text-center pb-4">
        <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full w-fit group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-300 shadow-lg">
          <Icon className="w-8 h-8 text-white" />
        </div>
        <CardTitle className="text-lg font-bold text-gray-800 group-hover:text-blue-700 transition-colors duration-300 min-h-[3rem] flex items-center justify-center">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0 pb-6">
        <CardDescription className="text-gray-600 text-center leading-relaxed min-h-[3rem] flex items-center justify-center px-2">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
