import { recommendations } from "@/lib/mockData";

export default function SecurityRecommendations() {
  // Format currency
  const formatCurrency = (value: number | undefined) => {
    if (!value) return '--';
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
      <div className="p-4 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-gray-800">Business Security Recommendations</h2>
          <span className="bg-primary-light text-white text-xs px-2 py-1 rounded">Prioritized by ROI</span>
        </div>
      </div>
      
      <div className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-start">
              <div className="h-8 w-8 rounded-full bg-danger-light flex items-center justify-center mt-1">
                <i className="bi bi-exclamation-circle text-danger"></i>
              </div>
              <div className="ml-3 flex-1">
                <h3 className="font-medium">Critical Risk Findings</h3>
                <ul className="mt-2 space-y-3 text-sm">
                  {recommendations.critical.map((rec, index) => (
                    <li key={index} className="border-b border-gray-100 pb-2">
                      <div className="flex items-start">
                        <i className={`bi bi-${rec.icon} text-danger mr-2 mt-0.5`}></i>
                        <div className="flex-1">
                          <span className="text-gray-800">{rec.text}</span>
                          
                          {rec.businessBenefit && (
                            <div className="mt-1.5 flex items-center">
                              <span className="text-xs text-gray-500 mr-1">Business benefit:</span>
                              <span className="text-xs text-blue-700">{rec.businessBenefit}</span>
                            </div>
                          )}
                          
                          <div className="flex flex-wrap gap-3 mt-2">
                            {rec.estimatedCost && (
                              <div className="inline-flex items-center px-2 py-1 bg-gray-100 rounded text-xs">
                                <span className="text-gray-500 mr-1">Est. cost:</span>
                                <span className="font-medium text-gray-700">{formatCurrency(rec.estimatedCost)}</span>
                              </div>
                            )}
                            
                            {rec.implementationTimeframe && (
                              <div className="inline-flex items-center px-2 py-1 bg-gray-100 rounded text-xs">
                                <span className="text-gray-500 mr-1">Timeline:</span>
                                <span className="font-medium text-gray-700">{rec.implementationTimeframe}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-start">
              <div className="h-8 w-8 rounded-full bg-success-light flex items-center justify-center mt-1">
                <i className="bi bi-check-circle text-success"></i>
              </div>
              <div className="ml-3 flex-1">
                <h3 className="font-medium">Positive Security Indicators</h3>
                <ul className="mt-2 space-y-3 text-sm">
                  {recommendations.positive.map((rec, index) => (
                    <li key={index} className="border-b border-gray-100 pb-2">
                      <div className="flex items-start">
                        <i className={`bi bi-${rec.icon} text-success mr-2 mt-0.5`}></i>
                        <div className="flex-1">
                          <span className="text-gray-800">{rec.text}</span>
                          
                          {rec.businessBenefit && (
                            <div className="mt-1.5 flex items-center">
                              <span className="text-xs text-gray-500 mr-1">Business value:</span>
                              <span className="text-xs text-blue-700">{rec.businessBenefit}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-medium">Recommended Strategic Actions</h3>
            <button className="text-xs bg-secondary text-white px-3 py-1 rounded-full">
              Export to PDF
            </button>
          </div>
          
          <div className="space-y-4">
            {recommendations.actions.map((action, index) => (
              <div key={index} className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center">
                      <i className={`bi bi-${action.icon} text-white text-lg`}></i>
                    </div>
                  </div>
                  <div className="ml-4 flex-1">
                    <div className="flex justify-between">
                      <h4 className="font-medium text-gray-800">{action.title}</h4>
                      {action.estimatedCost && (
                        <span className="text-sm font-semibold text-primary">
                          {formatCurrency(action.estimatedCost)}
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-gray-600">{action.text}</p>
                    
                    <div className="mt-3 flex flex-wrap gap-3">
                      {action.businessBenefit && (
                        <div className="bg-green-100 text-green-800 text-xs px-2.5 py-1 rounded flex items-center">
                          <i className="bi bi-graph-up mr-1"></i>
                          <span>{action.businessBenefit}</span>
                        </div>
                      )}
                      
                      {action.implementationTimeframe && (
                        <div className="bg-blue-100 text-blue-800 text-xs px-2.5 py-1 rounded flex items-center">
                          <i className="bi bi-calendar3 mr-1"></i>
                          <span>{action.implementationTimeframe}</span>
                        </div>
                      )}
                      
                      <div className="bg-purple-100 text-purple-800 text-xs px-2.5 py-1 rounded flex items-center ml-auto">
                        <i className="bi bi-stars mr-1"></i>
                        <span>Priority: {index === 0 ? 'High' : index === 1 ? 'Medium' : 'Standard'}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-center">
              <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center">
                <i className="bi bi-calculator text-green-700"></i>
              </div>
              <div className="ml-3">
                <h3 className="font-medium text-gray-800">Total Business Impact</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Implementing these recommendations can reduce your security risk exposure by approximately 
                  <span className="font-semibold text-green-700"> 65%</span> with an estimated annual ROI of 
                  <span className="font-semibold text-green-700"> 280%</span>.
                </p>
                <button className="mt-2 text-sm text-secondary hover:text-secondary-dark font-medium flex items-center">
                  Request detailed ROI assessment <i className="bi bi-arrow-right ml-1"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
