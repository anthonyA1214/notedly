export default function StatsCard({ stat, label }: { stat: string, label: string }) {
    return (
        <div className="flex top-0 flex-col justify-center items-center text-center">
            <h3 className="text-[#A590DB] text-4xl sm:text-5xl md:text-6xl">{stat}</h3>
            <span className="text-sm sm:text-base md:text-lg text-muted-foreground">{label}</span>
        </div>
    )    
}