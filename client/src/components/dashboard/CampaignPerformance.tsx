import { Link } from "wouter";
import DonutChart from "./DonutChart";
import { latestCampaign } from "@/lib/mockData";

export default function CampaignPerformance() {
  const { name, startDate, emailsSent, emailsOpened, linksClicked, dataSubmitted } = latestCampaign;
  
  // Calculate percentages
  const emailOpenedPercent = Math.round((emailsOpened / emailsSent) * 100);
  const linksClickedPercent = Math.round((linksClicked / emailsSent) * 100);
  const dataSubmittedPercent = Math.round((dataSubmitted / emailsSent) * 100);

  return (
    <div className="mb-6">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <h2 className="font-semibold text-gray-800">Latest Campaign Performance</h2>
          <p className="text-sm text-gray-500">{name} ({startDate})</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 p-4">
          {/* Email Sent */}
          <div className="flex flex-col items-center">
            <DonutChart 
              percentage={100} 
              color="#1E88E5" 
              centerText={emailsSent.toString()}
              subText="emails"
            />
            <h3 className="mt-2 font-medium text-gray-700">Emails Sent</h3>
          </div>
          
          {/* Email Opened */}
          <div className="flex flex-col items-center">
            <DonutChart 
              percentage={emailOpenedPercent} 
              color="#42A5F5" 
              centerText={`${emailOpenedPercent}%`}
              subText={`${emailsOpened} emails`}
            />
            <h3 className="mt-2 font-medium text-gray-700">Emails Opened</h3>
          </div>
          
          {/* Clicked Link */}
          <div className="flex flex-col items-center">
            <DonutChart 
              percentage={linksClickedPercent} 
              color="#FFC107" 
              centerText={`${linksClickedPercent}%`}
              subText={`${linksClicked} clicks`}
            />
            <h3 className="mt-2 font-medium text-gray-700">Clicked Link</h3>
          </div>
          
          {/* Submitted Data */}
          <div className="flex flex-col items-center">
            <DonutChart 
              percentage={dataSubmittedPercent} 
              color="#E53935" 
              centerText={`${dataSubmittedPercent}%`}
              subText={`${dataSubmitted} submissions`}
            />
            <h3 className="mt-2 font-medium text-gray-700">Submitted Data</h3>
          </div>
        </div>
        
        <div className="p-4 border-t border-gray-200 flex justify-end">
          <Link href={`/campaign/${latestCampaign.id}`}>
            <a className="text-secondary hover:text-secondary-dark font-medium text-sm">
              View detailed report <i className="bi bi-arrow-right ml-1"></i>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
