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
}

export interface DepartmentMetric {
  name: string;
  value: number;
  riskLevel: 'Low' | 'Medium' | 'High';
}

export interface TimelineEvent {
  id: number;
  title: string;
  timestamp: string;
  description: string;
  icon: string;
  iconBackground: string;
}

export interface Recommendation {
  type: 'critical' | 'positive' | 'action';
  title: string;
  text: string;
  icon: string;
}

// Dashboard stats
export const securityMetrics: SecurityMetric[] = [
  {
    name: 'Security Score',
    value: 76,
    maxValue: 100,
    trend: 'up',
    trendValue: '5%',
    unit: ''
  },
  {
    name: 'Open Vulnerabilities',
    value: 12,
    trend: 'up',
    trendValue: '3',
    unit: 'issues',
    criticalCount: 3,
    mediumCount: 9
  },
  {
    name: 'Phishing Success Rate',
    value: 23,
    trend: 'down',
    trendValue: '12%',
    unit: '%'
  },
  {
    name: 'Staff Awareness',
    value: 68,
    trend: 'up',
    trendValue: '8%',
    unit: '%'
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
  reportedPhishing: 45
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
    successRate: 23
  },
  {
    id: 2,
    name: 'Web Portal Assessment',
    type: 'Vulnerability Scan',
    status: 'In Progress',
    startDate: 'Jun 02, 2023',
    riskLevel: 'High',
    riskScore: 85,
    successRate: null
  },
  {
    id: 3,
    name: 'Password Policy Audit',
    type: 'Security Assessment',
    status: 'Completed',
    startDate: 'Apr 10, 2023',
    riskLevel: 'Low',
    riskScore: 35,
    successRate: 18
  },
  {
    id: 4,
    name: 'Finance Team Phishing',
    type: 'Targeted Campaign',
    status: 'Scheduled',
    startDate: 'Jun 15, 2023',
    riskLevel: 'Critical',
    riskScore: 95,
    successRate: null
  }
];

// Department data for campaign details
export const departmentBreakdown: DepartmentMetric[] = [
  { name: 'Finance', value: 34, riskLevel: 'High' },
  { name: 'HR', value: 27, riskLevel: 'High' },
  { name: 'Sales', value: 24, riskLevel: 'Medium' },
  { name: 'Marketing', value: 18, riskLevel: 'Medium' },
  { name: 'Operations', value: 12, riskLevel: 'Low' },
  { name: 'IT', value: 8, riskLevel: 'Low' }
];

// Timeline events
export const timelineEvents: TimelineEvent[] = [
  {
    id: 1,
    title: 'Campaign Launched',
    timestamp: 'May 15, 2023 - 9:00 AM',
    description: '250 emails were sent to all departments',
    icon: 'play-fill',
    iconBackground: 'bg-secondary'
  },
  {
    id: 2,
    title: 'First Hour Activity',
    timestamp: 'May 15, 2023 - 10:00 AM',
    description: '87 emails opened (35%), 42 links clicked (17%)',
    icon: 'envelope-open',
    iconBackground: 'bg-secondary-light'
  },
  {
    id: 3,
    title: 'First Credential Submission',
    timestamp: 'May 15, 2023 - 10:12 AM',
    description: 'First user submitted credentials on the fake login page',
    icon: 'exclamation-triangle',
    iconBackground: 'bg-warning'
  },
  {
    id: 4,
    title: 'First Phishing Report',
    timestamp: 'May 15, 2023 - 10:23 AM',
    description: 'Security team received first phishing report',
    icon: 'shield-check',
    iconBackground: 'bg-success'
  },
  {
    id: 5,
    title: 'Mid-Campaign Stats',
    timestamp: 'May 18, 2023 - 12:00 PM',
    description: '145 emails opened (58%), 82 links clicked (33%), 42 credentials submitted (17%)',
    icon: 'hourglass-split',
    iconBackground: 'bg-neutral'
  },
  {
    id: 6,
    title: 'Campaign Ended',
    timestamp: 'May 22, 2023 - 9:00 AM',
    description: 'Final stats: 170 emails opened (68%), 105 links clicked (42%), 58 credentials submitted (23%)',
    icon: 'flag-fill',
    iconBackground: 'bg-gray-600'
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
      icon: 'x-circle'
    },
    {
      type: 'critical',
      title: 'Critical Findings',
      text: 'Low phishing reporting rate overall (18%)',
      icon: 'x-circle'
    },
    {
      type: 'critical',
      title: 'Critical Findings',
      text: '23% of staff submitted credentials without verification',
      icon: 'x-circle'
    }
  ],
  positive: [
    {
      type: 'positive',
      title: 'Positive Observations',
      text: 'IT department had the lowest submission rate (8%)',
      icon: 'check-circle'
    },
    {
      type: 'positive',
      title: 'Positive Observations',
      text: 'First phishing report was submitted within 23 minutes',
      icon: 'check-circle'
    },
    {
      type: 'positive',
      title: 'Positive Observations',
      text: '32% of users who opened the email did not click the link',
      icon: 'check-circle'
    }
  ],
  actions: [
    {
      type: 'action',
      title: 'Enhanced Security Training',
      text: 'Schedule targeted security awareness training for Finance and HR departments with focus on identifying phishing emails and proper reporting procedures.',
      icon: 'mortarboard'
    },
    {
      type: 'action',
      title: 'Authentication Enhancement',
      text: 'Implement multi-factor authentication for all sensitive systems, especially for Finance and HR departments to mitigate credential harvesting risks.',
      icon: 'shield-lock'
    },
    {
      type: 'action',
      title: 'Improve Reporting Mechanisms',
      text: 'Add a prominent "Report Phishing" button to the email client and conduct training on how to use it effectively.',
      icon: 'bell'
    }
  ]
};

// Chat responses for the support widget
export const chatResponses = [
  "I'll look into that for you right away.",
  "Thanks for the question. Our security experts recommend regular phishing training for all staff.",
  "Would you like me to schedule a security assessment for your team?",
  "I can help you set up a new phishing simulation campaign. Would you like that?",
  "For more detailed security recommendations, I'd suggest reviewing your latest campaign report."
];
