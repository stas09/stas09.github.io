import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Mock data for charts - in a real application this would come from API
const vulnerabilityData = [
  { name: 'Jan', detected: 15, remediated: 12 },
  { name: 'Feb', detected: 18, remediated: 14 },
  { name: 'Mar', detected: 25, remediated: 20 },
  { name: 'Apr', detected: 20, remediated: 18 },
  { name: 'May', detected: 28, remediated: 22 },
  { name: 'Jun', detected: 22, remediated: 19 },
];

const departmentData = [
  { name: 'Finance', risk: 85 },
  { name: 'HR', risk: 60 },
  { name: 'IT', risk: 35 },
  { name: 'Sales', risk: 70 },
  { name: 'Marketing', risk: 48 },
];

// Helper to determine risk color
const getRiskColor = (value: number) => {
  if (value >= 70) return '#E53935'; // High risk (danger)
  if (value >= 50) return '#FFC107'; // Medium risk (warning)
  return '#4CAF50'; // Low risk (success)
};

export default function SecurityInsights() {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Security Insights</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium text-gray-700">Vulnerability Trends</h3>
            <div className="text-sm text-gray-500">Last 90 days</div>
          </div>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={vulnerabilityData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Area type="monotone" dataKey="detected" stackId="1" stroke="#1E88E5" fill="#1E88E5" fillOpacity={0.5} />
                <Area type="monotone" dataKey="remediated" stackId="2" stroke="#E53935" fill="#E53935" fillOpacity={0.5} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center space-x-6 mt-2">
            <div className="flex items-center">
              <span className="h-3 w-3 bg-secondary rounded-full mr-1"></span>
              <span className="text-xs text-gray-600">Detected</span>
            </div>
            <div className="flex items-center">
              <span className="h-3 w-3 bg-danger rounded-full mr-1"></span>
              <span className="text-xs text-gray-600">Remediated</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium text-gray-700">Department Risk Levels</h3>
            <select className="text-sm border border-gray-300 rounded px-2 py-1">
              <option>All Departments</option>
              <option>Finance</option>
              <option>HR</option>
              <option>IT</option>
              <option>Marketing</option>
            </select>
          </div>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={departmentData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                layout="vertical"
              >
                <CartesianGrid strokeDasharray="3 3" opacity={0.2} horizontal={true} vertical={false} />
                <XAxis type="number" domain={[0, 100]} tick={{ fontSize: 12 }} />
                <YAxis dataKey="name" type="category" tick={{ fontSize: 12 }} width={80} />
                <Tooltip />
                <Bar 
                  dataKey="risk" 
                  radius={4}
                  barSize={20}
                  fillOpacity={0.9}
                  fill="#4CAF50"
                  name="Risk Score"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center space-x-4 mt-2">
            <div className="flex items-center">
              <span className="h-3 w-3 bg-danger rounded-full mr-1"></span>
              <span className="text-xs text-gray-600">High Risk ({'>'}70%)</span>
            </div>
            <div className="flex items-center">
              <span className="h-3 w-3 bg-warning rounded-full mr-1"></span>
              <span className="text-xs text-gray-600">Medium Risk (50-70%)</span>
            </div>
            <div className="flex items-center">
              <span className="h-3 w-3 bg-success rounded-full mr-1"></span>
              <span className="text-xs text-gray-600">Low Risk ({'<'}50%)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
