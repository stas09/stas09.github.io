import { Link, useParams } from "wouter";
import { latestCampaign } from "@/lib/mockData";
import CampaignOverview from "@/components/campaign/CampaignOverview";
import PerformanceMetrics from "@/components/campaign/PerformanceMetrics";
import CampaignTimeline from "@/components/campaign/CampaignTimeline";
import SecurityRecommendations from "@/components/campaign/SecurityRecommendations";

export default function CampaignDetails() {
  const { id } = useParams();
  const campaignId = parseInt(id);
  
  // In a real app, we would fetch the campaign data based on the ID
  // For now, we'll use the latestCampaign as an example
  const campaign = latestCampaign;

  return (
    <div id="campaignDetailsView">
      {/* Campaign Details Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
        <div>
          <Link href="/">
            <a className="text-gray-600 hover:text-gray-800 mb-2 flex items-center">
              <i className="bi bi-arrow-left mr-1"></i> Back to Dashboard
            </a>
          </Link>
          <h1 className="text-2xl font-bold text-gray-800">{campaign.name}</h1>
          <p className="text-gray-500">{campaign.type} • {campaign.startDate}</p>
        </div>
        <div className="flex mt-2 md:mt-0">
          <button className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-lg mr-2">
            <i className="bi bi-download mr-1"></i> Export Report
          </button>
          <button className="bg-secondary hover:bg-secondary-dark text-white px-4 py-2 rounded-lg">
            <i className="bi bi-share mr-1"></i> Share
          </button>
        </div>
      </div>

      {/* Campaign Overview */}
      <CampaignOverview campaign={campaign} />

      {/* Detailed Performance Metrics */}
      <PerformanceMetrics campaign={campaign} />

      {/* Timeline and Events */}
      <CampaignTimeline />

      {/* Recommendations */}
      <SecurityRecommendations />
    </div>
  );
}
