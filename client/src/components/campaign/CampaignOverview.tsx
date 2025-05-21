import { Campaign } from "@/lib/mockData";

interface CampaignOverviewProps {
  campaign: Campaign;
}

export default function CampaignOverview({ campaign }: CampaignOverviewProps) {
  const { type, targetGroups, status, duration, description } = campaign;

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
      <div className="p-4 border-b border-gray-200">
        <h2 className="font-semibold text-gray-800">Campaign Overview</h2>
      </div>
      
      <div className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="border border-gray-200 rounded-lg p-3">
            <h3 className="text-sm font-medium text-gray-500 mb-1">Campaign Type</h3>
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
        
        {description && (
          <div className="mt-4 border-t border-gray-200 pt-4">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Campaign Description</h3>
            <p className="text-gray-700">{description}</p>
          </div>
        )}
      </div>
    </div>
  );
}
