import { useState } from "react";
import { businessMetrics, securityMetrics } from "@/lib/mockData";

export default function Reports() {
  const [reportType, setReportType] = useState("executive");
  const [timeframe, setTimeframe] = useState("month");

  // Format currency
  const formatCurrency = (value: number | undefined) => {
    if (!value) return '--';
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(value);
  };

  // Sample compliance metrics
  const complianceData = [
    { framework: "ISO 27001", compliance: 82, gap: 18, critical: 2, status: "In Progress" },
    { framework: "NIST CSF", compliance: 75, gap: 25, critical: 3, status: "In Progress" },
    { framework: "GDPR", compliance: 94, gap: 6, critical: 0, status: "Compliant" },
    { framework: "PCI DSS", compliance: 68, gap: 32, critical: 5, status: "At Risk" },
  ];

  // Sample risk trend data
  const riskTrends = [
    { month: 'Jan', phishing: 45, vulnerabilities: 65, awareness: 40 },
    { month: 'Feb', phishing: 42, vulnerabilities: 58, awareness: 45 },
    { month: 'Mar', phishing: 38, vulnerabilities: 52, awareness: 50 },
    { month: 'Apr', phishing: 35, vulnerabilities: 48, awareness: 55 },
    { month: 'May', phishing: 30, vulnerabilities: 40, awareness: 62 },
    { month: 'Jun', phishing: 28, vulnerabilities: 35, awareness: 68 },
  ];

  return (
    <div className="px-2">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Security Reports</h1>
          <p className="text-gray-600">
            Comprehensive cybersecurity assessment reports with business impact metrics
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 mt-3 md:mt-0">
          <select 
            value={reportType}
            onChange={(e) => setReportType(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-secondary"
          >
            <option value="executive">Executive Summary</option>
            <option value="technical">Technical Details</option>
            <option value="compliance">Compliance Report</option>
            <option value="business">Business Impact</option>
          </select>
          
          <select 
            value={timeframe}
            onChange={(e) => setTimeframe(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-secondary"
          >
            <option value="month">Last 30 Days</option>
            <option value="quarter">Last Quarter</option>
            <option value="year">Last Year</option>
            <option value="custom">Custom Range</option>
          </select>
          
          <button className="bg-secondary hover:bg-secondary-dark text-white font-medium py-2 px-4 rounded-lg">
            <i className="bi bi-download mr-1"></i> Export Report
          </button>
        </div>
      </div>

      {/* Report Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium text-gray-700">Security Posture</h2>
            <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full">Improving</span>
          </div>
          <div className="mt-3 flex items-center">
            <div className="w-16 h-16">
              <svg viewBox="0 0 36 36" className="circular-chart">
                <path
                  className="circle-bg"
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#EEEEEE"
                  strokeWidth="3"
                />
                <path
                  className="donut-segment"
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#4CAF50"
                  strokeWidth="3"
                  strokeDasharray="76, 100"
                />
              </svg>
            </div>
            <div className="ml-4">
              <div className="text-3xl font-bold text-gray-800">76%</div>
              <div className="text-sm text-gray-500">Overall Score</div>
            </div>
            <div className="ml-auto text-right">
              <div className="text-sm font-medium text-green-600">+5%</div>
              <div className="text-xs text-gray-500">vs last period</div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium text-gray-700">Risk Exposure</h2>
            <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full">Decreasing</span>
          </div>
          <div className="mt-3">
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-medium text-gray-500">Current Risk</span>
              <span className="text-sm font-medium text-gray-800">$340,000</span>
            </div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-medium text-gray-500">Previous Risk</span>
              <span className="text-sm font-medium text-gray-400">$420,000</span>
            </div>
            <div className="mt-3 flex items-center">
              <span className="text-lg font-semibold text-green-600">-19%</span>
              <div className="ml-auto flex items-center">
                <button className="text-sm text-secondary hover:text-secondary-dark">View Details</button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium text-gray-700">ROI</h2>
            <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full">Positive</span>
          </div>
          <div className="mt-3">
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-medium text-gray-500">Investment</span>
              <span className="text-sm font-medium text-gray-800">$120,000</span>
            </div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-medium text-gray-500">Risk Reduction Value</span>
              <span className="text-sm font-medium text-gray-800">$350,000</span>
            </div>
            <div className="mt-3 flex items-center">
              <span className="text-lg font-semibold text-green-600">292% ROI</span>
              <div className="ml-auto flex items-center">
                <button className="text-sm text-secondary hover:text-secondary-dark">View Calculation</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Risk Trend Analysis */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
        <h2 className="font-medium text-gray-800 mb-4">Risk Trend Analysis</h2>
        <div className="h-72">
          <div className="grid grid-cols-6 h-full gap-1">
            {riskTrends.map((item, index) => (
              <div key={index} className="flex flex-col h-full justify-end">
                <div className="text-xs text-center text-gray-500 mb-1">{item.month}</div>
                <div 
                  className="bg-danger rounded-t w-full" 
                  style={{ height: `${item.phishing}%` }}
                  title={`Phishing Risk: ${item.phishing}%`}
                ></div>
                <div 
                  className="bg-warning rounded-t w-full" 
                  style={{ height: `${item.vulnerabilities}%` }}
                  title={`Vulnerability Risk: ${item.vulnerabilities}%`}
                ></div>
                <div 
                  className="bg-success rounded-t w-full" 
                  style={{ height: `${item.awareness}%` }}
                  title={`Staff Awareness: ${item.awareness}%`}
                ></div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center space-x-6 mt-4">
          <div className="flex items-center">
            <span className="h-3 w-3 bg-danger rounded-full mr-1"></span>
            <span className="text-sm text-gray-600">Phishing Risk</span>
          </div>
          <div className="flex items-center">
            <span className="h-3 w-3 bg-warning rounded-full mr-1"></span>
            <span className="text-sm text-gray-600">Vulnerability Risk</span>
          </div>
          <div className="flex items-center">
            <span className="h-3 w-3 bg-success rounded-full mr-1"></span>
            <span className="text-sm text-gray-600">Staff Awareness</span>
          </div>
        </div>
      </div>

      {/* Compliance Status */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-medium text-gray-800">Compliance Status</h2>
          <button className="text-sm text-secondary hover:text-secondary-dark">View All Frameworks</button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {complianceData.map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-3">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium">{item.framework}</h3>
                <span 
                  className={`text-xs px-2 py-0.5 rounded-full ${
                    item.status === 'Compliant' ? 'bg-green-100 text-green-700' : 
                    item.status === 'At Risk' ? 'bg-red-100 text-red-700' : 
                    'bg-blue-100 text-blue-700'
                  }`}
                >
                  {item.status}
                </span>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                <div 
                  className={`h-2 rounded-full ${
                    item.compliance >= 90 ? 'bg-green-500' : 
                    item.compliance >= 70 ? 'bg-yellow-500' : 
                    'bg-red-500'
                  }`}
                  style={{ width: `${item.compliance}%` }}
                ></div>
              </div>
              
              <div className="flex justify-between text-xs">
                <span>{item.compliance}% compliant</span>
                {item.critical > 0 && 
                  <span className="text-red-600">{item.critical} critical gaps</span>
                }
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Business Impact Metrics */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-medium text-gray-800">Business Impact Metrics</h2>
          <button className="text-sm text-secondary hover:text-secondary-dark">Export to PDF</button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Metric</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Value</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Business Impact</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Financial Implication</th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {businessMetrics.map((metric) => (
                <tr key={metric.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{metric.name}</div>
                    <div className="text-xs text-gray-500">{metric.description}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {typeof metric.value === 'number' && metric.value > 1000 ? (
                      <span className="text-sm font-semibold text-gray-900">{formatCurrency(metric.value)}</span>
                    ) : (
                      <span className="text-sm font-semibold text-gray-900">{metric.value}{typeof metric.value === 'number' && metric.value < 100 ? '%' : ''}</span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-900">{metric.securityImpact}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {metric.costImplication ? (
                      <span className="text-sm font-semibold text-green-600">{formatCurrency(metric.costImplication)}</span>
                    ) : (
                      <span className="text-sm text-gray-500">N/A</span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Addressed
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Security Recommendations Summary */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-medium text-gray-800">Security Recommendations Summary</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border border-red-200 bg-red-50 rounded-lg p-4">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                <i className="bi bi-exclamation-triangle text-red-600"></i>
              </div>
              <div className="ml-3">
                <h3 className="font-medium">Critical Issues</h3>
                <p className="text-sm text-gray-600">3 issues requiring immediate action</p>
              </div>
            </div>
            <ul className="space-y-2">
              <li className="flex items-start">
                <i className="bi bi-x-circle text-red-500 mt-0.5 mr-2"></i>
                <div>
                  <p className="text-sm font-medium">Authentication Vulnerability</p>
                  <p className="text-xs text-gray-600">Multiple failed attempts not triggering lockout</p>
                  <div className="mt-1 flex items-center">
                    <span className="text-xs text-red-700 bg-red-100 px-2 py-0.5 rounded">High Priority</span>
                    <span className="ml-2 text-xs text-gray-500">Est. Cost: $18,000</span>
                  </div>
                </div>
              </li>
              <li className="flex items-start">
                <i className="bi bi-x-circle text-red-500 mt-0.5 mr-2"></i>
                <div>
                  <p className="text-sm font-medium">Outdated Software</p>
                  <p className="text-xs text-gray-600">Critical security patches missing on web servers</p>
                  <div className="mt-1 flex items-center">
                    <span className="text-xs text-red-700 bg-red-100 px-2 py-0.5 rounded">High Priority</span>
                    <span className="ml-2 text-xs text-gray-500">Est. Cost: $5,000</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="border border-yellow-200 bg-yellow-50 rounded-lg p-4">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
                <i className="bi bi-exclamation text-yellow-600"></i>
              </div>
              <div className="ml-3">
                <h3 className="font-medium">Medium Risk Issues</h3>
                <p className="text-sm text-gray-600">7 issues requiring planned action</p>
              </div>
            </div>
            <ul className="space-y-2">
              <li className="flex items-start">
                <i className="bi bi-dash-circle text-yellow-500 mt-0.5 mr-2"></i>
                <div>
                  <p className="text-sm font-medium">Password Policy</p>
                  <p className="text-xs text-gray-600">Current policy allows simple passwords</p>
                  <div className="mt-1 flex items-center">
                    <span className="text-xs text-yellow-700 bg-yellow-100 px-2 py-0.5 rounded">Medium Priority</span>
                    <span className="ml-2 text-xs text-gray-500">Est. Cost: $3,500</span>
                  </div>
                </div>
              </li>
              <li className="flex items-start">
                <i className="bi bi-dash-circle text-yellow-500 mt-0.5 mr-2"></i>
                <div>
                  <p className="text-sm font-medium">User Access Reviews</p>
                  <p className="text-xs text-gray-600">Irregular review of user access rights</p>
                  <div className="mt-1 flex items-center">
                    <span className="text-xs text-yellow-700 bg-yellow-100 px-2 py-0.5 rounded">Medium Priority</span>
                    <span className="ml-2 text-xs text-gray-500">Est. Cost: $7,000</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="border border-green-200 bg-green-50 rounded-lg p-4">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                <i className="bi bi-check2-circle text-green-600"></i>
              </div>
              <div className="ml-3">
                <h3 className="font-medium">Positive Improvements</h3>
                <p className="text-sm text-gray-600">5 areas of security enhancement</p>
              </div>
            </div>
            <ul className="space-y-2">
              <li className="flex items-start">
                <i className="bi bi-check-circle text-green-500 mt-0.5 mr-2"></i>
                <div>
                  <p className="text-sm font-medium">MFA Implementation</p>
                  <p className="text-xs text-gray-600">Successfully deployed across all critical systems</p>
                </div>
              </li>
              <li className="flex items-start">
                <i className="bi bi-check-circle text-green-500 mt-0.5 mr-2"></i>
                <div>
                  <p className="text-sm font-medium">Security Awareness</p>
                  <p className="text-xs text-gray-600">Staff training completion rate increased to 95%</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Report History */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-medium text-gray-800">Report History</h2>
          <select className="border border-gray-300 rounded px-2 py-1 text-sm">
            <option>All Reports</option>
            <option>Compliance Reports</option>
            <option>Vulnerability Reports</option>
            <option>Phishing Reports</option>
          </select>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Report Name</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Generated</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Security Score</th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">Q2 2023 Security Assessment</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">Quarterly Review</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Jun 30, 2023
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm font-medium text-gray-900">76/100</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <a href="#" className="text-secondary hover:text-secondary-dark mr-3">View</a>
                  <a href="#" className="text-secondary hover:text-secondary-dark">Download</a>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">Spring Phishing Campaign Results</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800">Phishing Assessment</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  May 22, 2023
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm font-medium text-gray-900">68/100</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <a href="#" className="text-secondary hover:text-secondary-dark mr-3">View</a>
                  <a href="#" className="text-secondary hover:text-secondary-dark">Download</a>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">ISO 27001 Gap Analysis</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Compliance Assessment</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Apr 15, 2023
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm font-medium text-gray-900">82/100</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <a href="#" className="text-secondary hover:text-secondary-dark mr-3">View</a>
                  <a href="#" className="text-secondary hover:text-secondary-dark">Download</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}