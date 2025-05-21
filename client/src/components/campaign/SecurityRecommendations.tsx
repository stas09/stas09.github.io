import { recommendations } from "@/lib/mockData";

export default function SecurityRecommendations() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
      <div className="p-4 border-b border-gray-200">
        <h2 className="font-semibold text-gray-800">Security Recommendations</h2>
      </div>
      
      <div className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-start">
              <div className="h-8 w-8 rounded-full bg-danger-light flex items-center justify-center mt-1">
                <i className="bi bi-exclamation-circle text-danger"></i>
              </div>
              <div className="ml-3">
                <h3 className="font-medium">Critical Findings</h3>
                <ul className="mt-2 space-y-2 text-sm">
                  {recommendations.critical.map((rec, index) => (
                    <li key={index} className="flex items-start">
                      <i className={`bi bi-${rec.icon} text-danger mr-2 mt-0.5`}></i>
                      <span>{rec.text}</span>
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
              <div className="ml-3">
                <h3 className="font-medium">Positive Observations</h3>
                <ul className="mt-2 space-y-2 text-sm">
                  {recommendations.positive.map((rec, index) => (
                    <li key={index} className="flex items-start">
                      <i className={`bi bi-${rec.icon} text-success mr-2 mt-0.5`}></i>
                      <span>{rec.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6">
          <h3 className="font-medium mb-3">Recommended Actions</h3>
          <div className="space-y-3">
            {recommendations.actions.map((action, index) => (
              <div key={index} className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <i className={`bi bi-${action.icon} text-secondary text-lg`}></i>
                  </div>
                  <div className="ml-3">
                    <h4 className="text-sm font-medium text-gray-800">{action.title}</h4>
                    <p className="mt-1 text-sm text-gray-600">{action.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
