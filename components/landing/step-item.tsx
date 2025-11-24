interface StepItemProps {
  number: string;
  title: string;
  description: string;
  showLine: boolean;
}

export default function StepItem({
  number,
  title,
  description,
  showLine,
}: StepItemProps) {
  return (
    <div className="flex flex-col gap-2 relative">
      <span className="text-[#A590DB]/25 text-5xl sm:text-6xl md:text-7xl max-w-xs">
        {number}
      </span>
      <h3 className="text-lg sm:text-xl md:text-2xl font-bold">{title}</h3>
      <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
        {description}
      </p>

      {showLine && (
        <div className="hidden lg:block absolute top-12 -right-4 w-8 h-0.5 bg-[#A590DB]/25" />
      )}
    </div>
  );
}
