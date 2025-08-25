import { TreePine } from "lucide-react";

export default function Logo({ size = "default" }: { size?: "small" | "default" | "large" }) {
  const sizeClasses = {
    small: "w-8 h-8",
    default: "w-12 h-12",
    large: "w-16 h-16"
  };

  const iconSizes = {
    small: 16,
    default: 20,
    large: 24
  };

  return (
    <div className="flex items-center space-x-3">
      <div className={`${sizeClasses[size]} bg-primary rounded-full flex items-center justify-center`}>
        <TreePine size={iconSizes[size]} className="text-white" />
      </div>
      <div>
        <h1 className={`font-bold text-primary ${size === 'large' ? 'text-2xl' : size === 'small' ? 'text-lg' : 'text-xl'}`}>
          Som'Ergo
        </h1>
        <p className={`text-gray-600 ${size === 'large' ? 'text-base' : 'text-sm'}`}>
          Cabinet d'Ergothérapie
        </p>
      </div>
    </div>
  );
}
