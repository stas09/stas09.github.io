import { Campaign, departmentBreakdown } from "@/lib/mockData";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface PerformanceMetricsProps {
  campaign: Campaign;
}

export default function PerformanceMetrics({ campaign }: PerformanceMetricsProps) {
  const { emailsSent, emailsOpened, linksClicked, dataSubmitted, reportedPhishing } = campaign;
  
  // Skip rendering if these values aren't available
  if (!emailsSent || !emailsOpened || !linksClicked || !dataSubmitted || !reportedPhishing) {
    return null;
  }
  
  // Calculate percentages
  const emailOpenedPercent = Math.round((emailsOpened / emailsSent) * 100);
  const linksClickedPercent = Math.round((linksClicked / emailsSent) * 100);
  const dataSubmittedPercent = Math.round((dataSubmitted / emailsSent) * 100);
  const reportedPhishingPercent = Math.round((reportedPhishing / emailsSent) * 100);

  // Helper function to get bar color based on risk level
  const getRiskColor = (value: number) => {
    if (value >= 25) return '#E53935'; // High risk (danger)
    if (value >= 10) return '#FFC107'; // Medium risk (warning)
    return '#43A047'; // Low risk (success)
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
      <div className="p-4 border-b border-gray-200">
        <h2 className="font-semibold text-gray-800">Performance Metrics</h2>
      </div>
      
      <div className="p-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Email Metrics */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-3">Email Engagement</h3>
            <div className="flex flex-col space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-600">Emails Delivered</span>
                  <span className="text-sm font-medium text-gray-900">{emailsSent}/{emailsSent} (100%)</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-secondary h-2 rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-600">Emails Opened</span>
                  <span className="text-sm font-medium text-gray-900">{emailsOpened}/{emailsSent} ({emailOpenedPercent}%)</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-secondary h-2 rounded-full" style={{ width: `${emailOpenedPercent}%` }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-600">Links Clicked</span>
                  <span className="text-sm font-medium text-gray-900">{linksClicked}/{emailsSent} ({linksClickedPercent}%)</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-warning h-2 rounded-full" style={{ width: `${linksClickedPercent}%` }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-600">Data Submitted</span>
                  <span className="text-sm font-medium text-gray-900">{dataSubmitted}/{emailsSent} ({dataSubmittedPercent}%)</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-danger h-2 rounded-full" style={{ width: `${dataSubmittedPercent}%` }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-600">Reported as Phishing</span>
                  <span className="text-sm font-medium text-gray-900">{reportedPhishing}/{emailsSent} ({reportedPhishingPercent}%)</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-success h-2 rounded-full" style={{ width: `${reportedPhishingPercent}%` }}></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Department Breakdown */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-3">Department Breakdown</h3>
            <div className="h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={departmentBreakdown}
                  layout="vertical"
                  margin={{ top: 5, right: 30, left: 60, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                  <XAxis type="number" domain={[0, 100]} />
                  <YAxis dataKey="name" type="category" />
                  <Tooltip formatter={(value) => [`${value}%`, 'Failure Rate']} />
                  <Bar 
                    dataKey="value"
                    name="Failure Rate"
                    radius={[0, 4, 4, 0]}
                    fill="#4CAF50"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-end">
              <div className="flex space-x-4">
                <div className="flex items-center">
                  <span className="h-3 w-3 bg-danger rounded-full mr-1"></span>
                  <span className="text-xs text-gray-600">High Risk ({'>'}25%)</span>
                </div>
                <div className="flex items-center">
                  <span className="h-3 w-3 bg-warning rounded-full mr-1"></span>
                  <span className="text-xs text-gray-600">Medium Risk (10-25%)</span>
                </div>
                <div className="flex items-center">
                  <span className="h-3 w-3 bg-success rounded-full mr-1"></span>
                  <span className="text-xs text-gray-600">Low Risk ({'<'}10%)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
