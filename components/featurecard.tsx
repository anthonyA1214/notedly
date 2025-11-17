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
        <div className="flex px-6 py-12 bg-white rounded-xl shadow-lg border border-opacity-10 gap-6 w-96 h-64 overflow-hidden">
            <div>
                <div className="shrink-0">
                    <Icon className="w-10 h-10 text-[#9582C5]"/>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <h3 className="text-xl font-bold opacity-90">{title}</h3>
                <p className="opacity-60">{description}</p>
            </div>
        </div>
    )
}