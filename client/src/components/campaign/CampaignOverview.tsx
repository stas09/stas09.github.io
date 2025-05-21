import { Campaign } from "@/lib/mockData";

interface CampaignOverviewProps {
  campaign: Campaign;
}

export default function CampaignOverview({ campaign }: CampaignOverviewProps) {
  const { 
    type, 
    targetGroups, 
    status, 
    duration, 
    description, 
    businessImpact, 
    complianceFramework, 
    costSavings 
  } = campaign;

  // Format currency
  const formatCurrency = (value: number | undefined) => {
    if (!value) return '--';
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      notation: 'compact',
      maximumFractionDigits: 1
    }).format(value);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
      <div className="p-4 border-b border-gray-200">
        <h2 className="font-semibold text-gray-800">Assessment Overview</h2>
      </div>
      
      <div className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="border border-gray-200 rounded-lg p-3">
            <h3 className="text-sm font-medium text-gray-500 mb-1">Assessment Type</h3>
            <div className="flex items-center">
              <i className="bi bi-envelope text-secondary text-xl mr-2"></i>
              <span className="text-lg font-semibold">{type}</span>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-3">
            <h3 className="text-sm font-medium text-gray-500 mb-1">Target Groups</h3>
            <div className="flex items-center">
              <i className="bi bi-people text-secondary text-xl mr-2"></i>
              <span className="text-lg font-semibold">{targetGroups && targetGroups.join(', ')}</span>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-3">
            <h3 className="text-sm font-medium text-gray-500 mb-1">Status</h3>
            <div className="flex items-center">
              <span className={`h-4 w-4 ${status === 'Completed' ? 'bg-green-400' : status === 'In Progress' ? 'bg-blue-400' : 'bg-yellow-400'} rounded-full mr-2`}></span>
              <span className="text-lg font-semibold">{status}</span>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-3">
            <h3 className="text-sm font-medium text-gray-500 mb-1">Duration</h3>
            <div className="flex items-center">
              <i className="bi bi-calendar-event text-secondary text-xl mr-2"></i>
              <span className="text-lg font-semibold">{duration} days</span>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {/* Business Impact */}
          <div className="border border-gray-200 rounded-lg p-3 bg-blue-50">
            <h3 className="text-sm font-medium text-gray-700 mb-2">Business Impact</h3>
            <div className="flex items-start">
              <i className="bi bi-graph-up-arrow text-secondary text-xl mr-2 mt-1"></i>
              <div>
                <p className="text-gray-700">{businessImpact || 'No business impact data available.'}</p>
                {costSavings && (
                  <div className="mt-2 inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    <i className="bi bi-piggy-bank mr-1"></i> Estimated Savings: {formatCurrency(costSavings)}
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Compliance Frameworks */}
          <div className="border border-gray-200 rounded-lg p-3 bg-blue-50">
            <h3 className="text-sm font-medium text-gray-700 mb-2">Compliance Frameworks</h3>
            <div className="flex items-start">
              <i className="bi bi-shield-check text-secondary text-xl mr-2 mt-1"></i>
              <div>
                {complianceFramework ? (
                  <div className="flex flex-wrap gap-2">
                    {complianceFramework.split(', ').map((framework, index) => (
                      <span key={index} className="inline-block px-2 py-1 rounded-md text-xs font-medium bg-blue-100 text-blue-800">
                        {framework}
                      </span>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-700">No compliance frameworks specified.</p>
                )}
              </div>
            </div>
          </div>
          
          {/* ROI Overview */}
          <div className="border border-gray-200 rounded-lg p-3 bg-blue-50">
            <h3 className="text-sm font-medium text-gray-700 mb-2">ROI Summary</h3>
            <div className="flex items-start">
              <i className="bi bi-cash-stack text-secondary text-xl mr-2 mt-1"></i>
              <div>
                <div className="flex items-center space-x-2">
                  <div className="text-xs font-medium text-gray-500">Implementation Cost</div>
                  <div className="text-sm font-semibold text-gray-800">~$25,000</div>
                </div>
                <div className="flex items-center space-x-2 mt-1">
                  <div className="text-xs font-medium text-gray-500">Risk Reduction Value</div>
                  <div className="text-sm font-semibold text-green-700">{formatCurrency(costSavings || 0)}</div>
                </div>
                <div className="flex items-center space-x-2 mt-1">
                  <div className="text-xs font-medium text-gray-500">ROI Factor</div>
                  <div className="text-sm font-semibold text-green-700">
                    {costSavings ? `${Math.round((costSavings / 25000) * 100)}%` : '--'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {description && (
          <div className="mt-4 border-t border-gray-200 pt-4">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Assessment Description</h3>
            <p className="text-gray-700">{description}</p>
          </div>
        )}
      </div>
    </div>
  );
}
