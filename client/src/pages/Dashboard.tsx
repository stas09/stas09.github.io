import { securityMetrics } from "@/lib/mockData";
import StatCard from "@/components/dashboard/StatCard";
import CampaignPerformance from "@/components/dashboard/CampaignPerformance";
import RecentCampaigns from "@/components/dashboard/RecentCampaigns";
import SecurityInsights from "@/components/dashboard/SecurityInsights";
import { Link } from "wouter";

export default function Dashboard() {
  return (
    <div id="dashboardView">
      {/* Dashboard Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
        <h1 className="text-2xl font-bold text-gray-800">Security Dashboard</h1>
        <div className="flex mt-2 md:mt-0">
          <Link href="/new-campaign">
            <a className="bg-secondary hover:bg-secondary-dark text-white px-4 py-2 rounded-lg mr-2 flex items-center">
              <i className="bi bi-plus-circle mr-1"></i> New Campaign
            </a>
          </Link>
          <div className="relative">
            <select className="border border-gray-300 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-secondary">
              <option>Last 30 days</option>
              <option>Last 90 days</option>
              <option>This year</option>
              <option>Custom range</option>
            </select>
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {securityMetrics.map((metric, index) => (
          <StatCard key={index} metric={metric} />
        ))}
      </div>

      {/* Campaign Performance Charts */}
      <CampaignPerformance />

      {/* Recent Campaigns */}
      <RecentCampaigns />
      
      {/* Security Insights */}
      <SecurityInsights />
    </div>
  );
}
