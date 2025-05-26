interface DonutChartProps {
  percentage: number;
  color: string;
  centerText: string;
  subText?: string;
}

export default function DonutChart({ percentage, color, centerText, subText }: DonutChartProps) {
  // Ensure percentage is between 0 and 100
  const safePercentage = Math.min(100, Math.max(0, percentage));
  
  // Calculate the stroke dash array values for the SVG
  const circumference = 2 * Math.PI * 15.9155; // Radius is 15.9155 as per the design
  const dashArray = `${(safePercentage * circumference) / 100} ${circumference}`;

  return (
    <div className="relative w-32 h-32">
      <svg viewBox="0 0 36 36" className="circular-chart">
        <path 
          className="circle-bg" 
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831" 
          fill="none" 
          stroke="#EEEEEE" 
          strokeWidth="3"
        />
        <path 
          className="donut-segment" 
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831" 
          fill="none" 
          stroke={color} 
          strokeWidth="3" 
          strokeDasharray={dashArray}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center flex-col">
        <span className="text-3xl font-bold">{centerText}</span>
        {subText && <span className="text-sm text-gray-500">{subText}</span>}
      </div>
    </div>
  );
}
