import { Link } from "wouter";
import { campaigns } from "@/lib/mockData";

export default function RecentCampaigns() {
  // Helper function to get risk color class
  const getRiskColorClass = (riskLevel: string) => {
    switch (riskLevel) {
      case 'Low': return 'bg-success';
      case 'Medium': return 'bg-warning';
      case 'High': return 'bg-danger';
      case 'Critical': return 'bg-danger';
      default: return 'bg-secondary';
    }
  };

  // Helper function to get status badge class
  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'In Progress': return 'bg-blue-100 text-blue-800';
      case 'Scheduled': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  // Helper function to get campaign icon class
  const getCampaignIconClass = (type: string) => {
    switch (type) {
      case 'Email Campaign': return 'bg-secondary-light text-white';
      case 'Vulnerability Scan': return 'bg-indigo-100 text-indigo-600';
      case 'Security Assessment': return 'bg-purple-100 text-purple-600';
      case 'Targeted Campaign': return 'bg-orange-100 text-orange-600';
      default: return 'bg-secondary-light text-white';
    }
  };

  // Helper function to get campaign icon
  const getCampaignIcon = (type: string) => {
    switch (type) {
      case 'Email Campaign': return 'envelope';
      case 'Vulnerability Scan': return 'globe';
      case 'Security Assessment': return 'shield-check';
      case 'Targeted Campaign': return 'link-45deg';
      default: return 'graph-up';
    }
  };

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Recent Campaigns</h2>
        <Link href="/campaigns">
          <a className="text-secondary hover:text-secondary-dark font-medium text-sm">
            View all campaigns <i className="bi bi-arrow-right ml-1"></i>
          </a>
        </Link>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Campaign Name</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Start Date</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Risk Score</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Business Impact</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Compliance</th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {campaigns.map((campaign) => (
                <tr key={campaign.id} className="hover:bg-gray-50 cursor-pointer">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className={`flex-shrink-0 h-8 w-8 flex items-center justify-center ${getCampaignIconClass(campaign.type)} rounded-lg`}>
                        <i className={`bi bi-${getCampaignIcon(campaign.type)}`}></i>
                      </div>
                      <div className="ml-3">
                        <div className="text-sm font-medium text-gray-900">{campaign.name}</div>
                        <div className="text-xs text-gray-500">{campaign.type}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeClass(campaign.status)}`}>
                      {campaign.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {campaign.startDate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 font-medium">{campaign.riskLevel}</div>
                    <div className="w-16 bg-gray-200 rounded-full h-1.5">
                      <div 
                        className={`${getRiskColorClass(campaign.riskLevel)} h-1.5 rounded-full`} 
                        style={{ width: `${campaign.riskScore}%` }}
                      ></div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {campaign.businessImpact || '--'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {campaign.complianceFramework || '--'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Link href={`/campaign/${campaign.id}`}>
                      <a className="text-secondary hover:text-secondary-dark">View details</a>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
