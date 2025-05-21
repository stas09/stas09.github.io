import { securityMetrics } from "@/lib/mockData";
import StatCard from "@/components/dashboard/StatCard";
import CampaignPerformance from "@/components/dashboard/CampaignPerformance";
import RecentCampaigns from "@/components/dashboard/RecentCampaigns";
import SecurityInsights from "@/components/dashboard/SecurityInsights";
import BusinessImpact from "@/components/dashboard/BusinessImpact";
import { Link } from "wouter";

export default function Dashboard() {
  return (
    <div id="dashboardView">
      {/* Dashboard Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Enterprise Security Dashboard</h1>
          <p className="text-gray-500 text-sm mt-1">Actionable insights for your business security posture</p>
        </div>
        <div className="flex mt-2 md:mt-0">
          <Link href="/new-campaign">
            <a className="bg-secondary hover:bg-secondary-dark text-white px-4 py-2 rounded-lg mr-2 flex items-center">
              <i className="bi bi-plus-circle mr-1"></i> New Assessment
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

      {/* Business Impact Analysis - Added for business context */}
      <BusinessImpact />

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
      
      {/* Industry Compliance Section */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
        <div className="flex items-start">
          <div className="flex-shrink-0 h-10 w-10 bg-accent rounded-lg flex items-center justify-center">
            <i className="bi bi-shield-lock text-white text-xl"></i>
          </div>
          <div className="ml-4">
            <h3 className="font-semibold text-gray-800">Compliance Assessment</h3>
            <p className="text-sm text-gray-600 mt-1">
              Our security assessments help your organization meet compliance requirements across multiple frameworks, 
              including NIST, ISO 27001, GDPR, PCI DSS, HIPAA and industry-specific regulations.
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">ISO 27001</span>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">NIST CSF</span>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">GDPR</span>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">PCI DSS</span>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">HIPAA</span>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">SOX</span>
            </div>
            <button className="mt-3 text-sm text-secondary hover:text-secondary-dark font-medium flex items-center">
              Schedule compliance gap assessment <i className="bi bi-arrow-right ml-1"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
