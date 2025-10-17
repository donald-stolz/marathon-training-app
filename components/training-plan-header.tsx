interface TrainingPlanHeaderProps {
  totalWeeks: number;
}

export function TrainingPlanHeader({ totalWeeks }: TrainingPlanHeaderProps) {
  return (
    <header className="relative overflow-hidden bg-secondary text-secondary-foreground">
      <div className="absolute inset-0 bg-[url('/marathon-runner-silhouette-dynamic-motion.jpg')] bg-cover bg-bottom opacity-80 brightness-40" />

      <div className="relative container mx-auto px-4 py-16 max-w-7xl">
        <div className="max-w-3xl">
          <div className="inline-block mb-4 px-3 py-1 bg-primary/20 rounded-full">
            <span className="text-xs font-bold uppercase tracking-wider">
              Marathon Training
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-balance">
            Your Path to 26.2 Miles
          </h1>

          <p className="text-lg md:text-xl text-secondary-foreground/80 leading-relaxed">
            A comprehensive {totalWeeks}-week training program designed to get
            you race-ready. Track your progress and stay motivated every step of
            the way.
          </p>
        </div>
      </div>
    </header>
  );
}
