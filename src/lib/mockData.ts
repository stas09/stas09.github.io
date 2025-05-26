// Data types
export interface Campaign {
  id: number;
  name: string;
  type: string;
  status: 'Completed' | 'In Progress' | 'Scheduled';
  startDate: string;
  riskLevel: 'Low' | 'Medium' | 'High' | 'Critical';
  riskScore: number;
  successRate: number | null;
  endDate?: string;
  duration?: number;
  description?: string;
  targetGroups?: string[];
  emailsSent?: number;
  emailsOpened?: number;
  linksClicked?: number;
  dataSubmitted?: number;
  reportedPhishing?: number;
  businessImpact?: string;
  complianceFramework?: string;
  costSavings?: number;
}

export interface SecurityMetric {
  name: string;
  value: number;
  maxValue?: number;
  trend: 'up' | 'down';
  trendValue: string;
  unit?: string;
  criticalCount?: number;
  mediumCount?: number;
  industryAverage?: number;
  complianceTarget?: number;
}

export interface DepartmentMetric {
  name: string;
  value: number;
  riskLevel: 'Low' | 'Medium' | 'High';
  employeeCount?: number;
  averageTrainingScore?: number;
}

export interface TimelineEvent {
  id: number;
  title: string;
  timestamp: string;
  description: string;
  icon: string;
  iconBackground: string;
  businessImpact?: string;
}

export interface Recommendation {
  type: 'critical' | 'positive' | 'action';
  title: string;
  text: string;
  icon: string;
  estimatedCost?: number;
  implementationTimeframe?: string;
  businessBenefit?: string;
}

export interface BusinessMetric {
  id: number;
  name: string;
  value: number;
  securityImpact: string;
  description: string;
  costImplication?: number;
}

// Dashboard stats
export const securityMetrics: SecurityMetric[] = [
  {
    name: 'Security Score',
    value: 76,
    maxValue: 100,
    trend: 'up',
    trendValue: '5%',
    unit: '',
    industryAverage: 68,
    complianceTarget: 80
  },
  {
    name: 'Open Vulnerabilities',
    value: 12,
    trend: 'up',
    trendValue: '3',
    unit: 'issues',
    criticalCount: 3,
    mediumCount: 9,
    industryAverage: 18
  },
  {
    name: 'Phishing Success Rate',
    value: 23,
    trend: 'down',
    trendValue: '12%',
    unit: '%',
    industryAverage: 32,
    complianceTarget: 15
  },
  {
    name: 'Staff Awareness',
    value: 68,
    trend: 'up',
    trendValue: '8%',
    unit: '%',
    industryAverage: 55,
    complianceTarget: 75
  }
];

// Business metrics
export const businessMetrics: BusinessMetric[] = [
  {
    id: 1,
    name: 'Estimated Annual Loss Avoidance',
    value: 235000,
    securityImpact: 'Reduced risk of data breaches',
    description: 'Projected financial savings from improved security posture',
    costImplication: 235000
  },
  {
    id: 2,
    name: 'Compliance Readiness',
    value: 82,
    securityImpact: 'Meeting regulatory requirements',
    description: 'Percentage of compliance requirements met',
    costImplication: 75000
  },
  {
    id: 3,
    name: 'Operational Efficiency',
    value: 18,
    securityImpact: 'Reduced downtime from cyber incidents',
    description: 'Percentage improvement in incident response time',
    costImplication: 42000
  },
  {
    id: 4,
    name: 'Brand Protection Value',
    value: 95,
    securityImpact: 'Reduced risk of reputation damage',
    description: 'Estimated protection of brand equity',
    costImplication: 350000
  }
];

// Campaign data
export const latestCampaign = {
  id: 1,
  name: 'Spring Security Drill',
  type: 'Email Campaign',
  status: 'Completed' as const,
  startDate: 'May 15, 2023',
  endDate: 'May 22, 2023',
  duration: 7,
  targetGroups: ['All Departments'],
  riskLevel: 'Medium' as const,
  riskScore: 60,
  successRate: 23,
  description: 'This campaign simulated a phishing attack using a fake software update email from IT department. The email contained a malicious link that directed users to a fake login page designed to capture credentials.',
  emailsSent: 250,
  emailsOpened: 170,
  linksClicked: 105,
  dataSubmitted: 58,
  reportedPhishing: 45,
  businessImpact: 'Identified $125,000 potential risk exposure from credential harvesting vulnerabilities.',
  complianceFramework: 'ISO 27001, NIST CSF',
  costSavings: 125000
};

export const campaigns: Campaign[] = [
  {
    id: 1,
    name: 'Spring Security Drill',
    type: 'Email Campaign',
    status: 'Completed',
    startDate: 'May 15, 2023',
    riskLevel: 'Medium',
    riskScore: 60,
    successRate: 23,
    businessImpact: 'Potential $125K risk exposure',
    complianceFramework: 'ISO 27001, NIST CSF',
    costSavings: 125000
  },
  {
    id: 2,
    name: 'Web Portal Assessment',
    type: 'Vulnerability Scan',
    status: 'In Progress',
    startDate: 'Jun 02, 2023',
    riskLevel: 'High',
    riskScore: 85,
    successRate: null,
    businessImpact: 'Customer data protection',
    complianceFramework: 'PCI DSS, GDPR'
  },
  {
    id: 3,
    name: 'Password Policy Audit',
    type: 'Security Assessment',
    status: 'Completed',
    startDate: 'Apr 10, 2023',
    riskLevel: 'Low',
    riskScore: 35,
    successRate: 18,
    businessImpact: 'Access control enhancement',
    complianceFramework: 'NIST 800-53',
    costSavings: 45000
  },
  {
    id: 4,
    name: 'Finance Team Phishing',
    type: 'Targeted Campaign',
    status: 'Scheduled',
    startDate: 'Jun 15, 2023',
    riskLevel: 'Critical',
    riskScore: 95,
    successRate: null,
    businessImpact: 'Financial fraud prevention',
    complianceFramework: 'SOX, GLBA'
  }
];

// Department data for campaign details
export const departmentBreakdown: DepartmentMetric[] = [
  { name: 'Finance', value: 34, riskLevel: 'High', employeeCount: 25, averageTrainingScore: 72 },
  { name: 'HR', value: 27, riskLevel: 'High', employeeCount: 18, averageTrainingScore: 75 },
  { name: 'Sales', value: 24, riskLevel: 'Medium', employeeCount: 42, averageTrainingScore: 80 },
  { name: 'Marketing', value: 18, riskLevel: 'Medium', employeeCount: 31, averageTrainingScore: 82 },
  { name: 'Operations', value: 12, riskLevel: 'Low', employeeCount: 38, averageTrainingScore: 88 },
  { name: 'IT', value: 8, riskLevel: 'Low', employeeCount: 15, averageTrainingScore: 94 }
];

// Timeline events
export const timelineEvents: TimelineEvent[] = [
  {
    id: 1,
    title: 'Campaign Launched',
    timestamp: 'May 15, 2023 - 9:00 AM',
    description: '250 emails were sent to all departments',
    icon: 'play-fill',
    iconBackground: 'bg-secondary',
    businessImpact: 'Initial deployment of security testing resources'
  },
  {
    id: 2,
    title: 'First Hour Activity',
    timestamp: 'May 15, 2023 - 10:00 AM',
    description: '87 emails opened (35%), 42 links clicked (17%)',
    icon: 'envelope-open',
    iconBackground: 'bg-secondary-light',
    businessImpact: 'Early indicators of security awareness gaps'
  },
  {
    id: 3,
    title: 'First Credential Submission',
    timestamp: 'May 15, 2023 - 10:12 AM',
    description: 'First user submitted credentials on the fake login page',
    icon: 'exclamation-triangle',
    iconBackground: 'bg-warning',
    businessImpact: 'Identified critical security training need'
  },
  {
    id: 4,
    title: 'First Phishing Report',
    timestamp: 'May 15, 2023 - 10:23 AM',
    description: 'Security team received first phishing report',
    icon: 'shield-check',
    iconBackground: 'bg-success',
    businessImpact: 'Evidence of effective security culture in some areas'
  },
  {
    id: 5,
    title: 'Mid-Campaign Stats',
    timestamp: 'May 18, 2023 - 12:00 PM',
    description: '145 emails opened (58%), 82 links clicked (33%), 42 credentials submitted (17%)',
    icon: 'hourglass-split',
    iconBackground: 'bg-neutral',
    businessImpact: 'Ongoing assessment of potential business risk exposure'
  },
  {
    id: 6,
    title: 'Campaign Ended',
    timestamp: 'May 22, 2023 - 9:00 AM',
    description: 'Final stats: 170 emails opened (68%), 105 links clicked (42%), 58 credentials submitted (23%)',
    icon: 'flag-fill',
    iconBackground: 'bg-gray-600',
    businessImpact: 'Completed calculation of security risk metrics and ROI'
  }
];

// Recommendations
export const recommendations: {
  critical: Recommendation[];
  positive: Recommendation[];
  actions: Recommendation[];
} = {
  critical: [
    {
      type: 'critical',
      title: 'Critical Findings',
      text: 'High submission rate in Finance department (34%)',
      icon: 'x-circle',
      businessBenefit: 'Protecting financial assets and sensitive fiscal data',
      estimatedCost: 18000,
      implementationTimeframe: '1-2 weeks'
    },
    {
      type: 'critical',
      title: 'Critical Findings',
      text: 'Low phishing reporting rate overall (18%)',
      icon: 'x-circle',
      businessBenefit: 'Accelerating threat identification and mitigation',
      estimatedCost: 5000,
      implementationTimeframe: '1 week'
    },
    {
      type: 'critical',
      title: 'Critical Findings',
      text: '23% of staff submitted credentials without verification',
      icon: 'x-circle',
      businessBenefit: 'Preventing unauthorized access to sensitive systems',
      estimatedCost: 12000,
      implementationTimeframe: '2-3 weeks'
    }
  ],
  positive: [
    {
      type: 'positive',
      title: 'Positive Observations',
      text: 'IT department had the lowest submission rate (8%)',
      icon: 'check-circle',
      businessBenefit: 'Strong security culture in technical teams',
      implementationTimeframe: 'Already established'
    },
    {
      type: 'positive',
      title: 'Positive Observations',
      text: 'First phishing report was submitted within 23 minutes',
      icon: 'check-circle',
      businessBenefit: 'Some evidence of effective threat reporting',
      implementationTimeframe: 'Already established'
    },
    {
      type: 'positive',
      title: 'Positive Observations',
      text: '32% of users who opened the email did not click the link',
      icon: 'check-circle',
      businessBenefit: 'Foundation for effective security awareness',
      implementationTimeframe: 'Already established'
    }
  ],
  actions: [
    {
      type: 'action',
      title: 'Enhanced Security Training',
      text: 'Schedule targeted security awareness training for Finance and HR departments with focus on identifying phishing emails and proper reporting procedures.',
      icon: 'mortarboard',
      businessBenefit: 'Reduced risk of financial fraud and data breaches',
      estimatedCost: 28000,
      implementationTimeframe: '1 month'
    },
    {
      type: 'action',
      title: 'Authentication Enhancement',
      text: 'Implement multi-factor authentication for all sensitive systems, especially for Finance and HR departments to mitigate credential harvesting risks.',
      icon: 'shield-lock',
      businessBenefit: 'Enhanced protection of critical business systems',
      estimatedCost: 45000,
      implementationTimeframe: '2-3 months'
    },
    {
      type: 'action',
      title: 'Improve Reporting Mechanisms',
      text: 'Add a prominent "Report Phishing" button to the email client and conduct training on how to use it effectively.',
      icon: 'bell',
      businessBenefit: 'Faster identification and response to real threats',
      estimatedCost: 15000,
      implementationTimeframe: '3 weeks'
    }
  ]
};

// Chat responses for the support widget
export const chatResponses = [
  "I'll look into that for you right away. Our business security consultants are here to help.",
  "Thanks for the question. Our security experts recommend regular phishing training for all staff to protect your business assets.",
  "Would you like me to schedule a security assessment for your organization? We can tailor it to your industry compliance needs.",
  "I can help you set up a new phishing simulation campaign targeting specific departments. Would you like that?",
  "For detailed security recommendations with ROI analysis, I'd suggest reviewing your latest campaign report.",
  "We've helped similar businesses in your industry reduce security risks by 35%. Would you like to know how?",
  "Our enterprise security assessment can help identify potential compliance gaps in your organization. Should we schedule one?",
  "Based on industry benchmarks, companies similar to yours typically invest 8-10% of IT budget in cybersecurity. We can help optimize that investment."
];
