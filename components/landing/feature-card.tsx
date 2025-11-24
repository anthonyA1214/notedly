export default function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}) {
  return (
    <div
      className="flex flex-col w-full h-full p-6 sm:p-8 md:p-10 bg-white 
            rounded-2xl border hover:border-[#9582C5] 
            transition duration-200
            gap-6 overflow-hidden group"
    >
      <div
        className="rounded-xl bg-[#A590DB]/10 group-hover:bg-[#9582C5]
                p-2.5 sm:p-3 md:p-4 flex items-center transition duration-200
                justify-center text-2xl sm:text-3xl md:text-4xl w-fit group-hover:scale-105"
      >
        {Icon && (
          <Icon className="w-[1em] h-[1em] text-[#A590DB] group-hover:text-white transition duration-200" />
        )}
      </div>
      <div className="flex flex-col gap-1.5 sm:gap-2">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold">{title}</h3>
        <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
}
