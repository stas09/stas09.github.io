import { businessMetrics } from "@/lib/mockData";

export default function BusinessImpact() {
  // Format currency 
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      notation: 'compact',
      maximumFractionDigits: 1
    }).format(value);
  };

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Business Impact Analysis</h2>
        <div className="bg-accent-light text-accent-foreground text-sm px-3 py-1 rounded-full">
          ROI Focused
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {businessMetrics.map((metric) => (
          <div key={metric.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow">
            <div className="flex flex-col">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-gray-500">{metric.name}</h3>
                {metric.costImplication && (
                  <span className="text-xs bg-primary-light text-white px-2 py-0.5 rounded-full">
                    {formatCurrency(metric.costImplication)}
                  </span>
                )}
              </div>
              
              <div className="mt-2">
                {typeof metric.value === 'number' && metric.value > 1000 ? (
                  <span className="text-3xl font-bold text-gray-800">{formatCurrency(metric.value)}</span>
                ) : (
                  <span className="text-3xl font-bold text-gray-800">{metric.value}{typeof metric.value === 'number' && metric.value < 100 ? '%' : ''}</span>
                )}
              </div>
              
              <div className="text-xs text-gray-500 mt-2">{metric.description}</div>
              
              <div className="mt-3 flex items-center">
                <span className="inline-flex items-center bg-blue-50 text-blue-800 text-xs px-2 py-1 rounded-full">
                  <i className="bi bi-shield-check mr-1"></i>
                  <span>{metric.securityImpact}</span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-start">
          <div className="flex-shrink-0 bg-secondary-light p-2 rounded-full">
            <i className="bi bi-graph-up-arrow text-white"></i>
          </div>
          <div className="ml-3">
            <h3 className="font-medium text-gray-800">Enterprise ROI Analysis</h3>
            <p className="text-sm text-gray-600 mt-1">
              Our cybersecurity assessment provides quantifiable business value by identifying potential risks, 
              compliance gaps, and security vulnerabilities before they impact your bottom line. 
              We help translate security metrics into business outcomes with clear financial implications.
            </p>
            <div className="mt-2">
              <button className="text-sm font-medium text-secondary hover:text-secondary-dark">
                Request detailed ROI report <i className="bi bi-arrow-right ml-1"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}