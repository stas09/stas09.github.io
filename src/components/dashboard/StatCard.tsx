import { SecurityMetric } from "@/lib/mockData";

interface StatCardProps {
  metric: SecurityMetric;
}

export default function StatCard({ metric }: StatCardProps) {
  const { name, value, maxValue, trend, trendValue, unit, criticalCount, mediumCount } = metric;
  
  const getTrendBadgeClass = () => {
    if (name === 'Open Vulnerabilities' && trend === 'up') {
      return 'bg-danger-light text-danger';
    }
    
    return trend === 'up' 
      ? 'bg-success-light text-success' 
      : 'bg-success-light text-success';
  };
  
  const getProgressBarColor = () => {
    if (name === 'Security Score') return 'bg-success';
    if (name === 'Phishing Success Rate') return 'bg-warning';
    if (name === 'Staff Awareness') return 'bg-secondary';
    return 'bg-success';
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-medium text-gray-500">{name}</h3>
        <span className={`text-xs ${getTrendBadgeClass()} px-2 py-0.5 rounded-full`}>
          {trend === 'up' ? '↑' : '↓'} {trendValue}
        </span>
      </div>
      <div className="flex items-end">
        <span className="text-3xl font-bold text-gray-800">{value}</span>
        {maxValue && <span className="text-sm text-gray-500 ml-1">/{maxValue}</span>}
        {!maxValue && unit && <span className="text-sm text-gray-500 ml-2">{unit}</span>}
      </div>
      
      {(criticalCount !== undefined && mediumCount !== undefined) ? (
        <div className="flex text-sm mt-2">
          <span className="text-danger mr-2">Critical: {criticalCount}</span>
          <span className="text-warning">Medium: {mediumCount}</span>
        </div>
      ) : (
        <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
          <div 
            className={`${getProgressBarColor()} h-2 rounded-full`} 
            style={{ width: `${value}%` }}
          ></div>
        </div>
      )}
    </div>
  );
}
