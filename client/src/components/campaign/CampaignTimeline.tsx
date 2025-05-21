import { timelineEvents } from "@/lib/mockData";

export default function CampaignTimeline() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
      <div className="p-4 border-b border-gray-200">
        <h2 className="font-semibold text-gray-800">Campaign Timeline</h2>
      </div>
      
      <div className="p-4">
        <div className="relative">
          <div className="absolute h-full w-0.5 bg-gray-200 left-7 top-0"></div>
          
          {timelineEvents.map((event, index) => (
            <div key={event.id} className={`${index !== timelineEvents.length - 1 ? 'mb-6' : ''} relative`}>
              <div className="flex items-start">
                <div className={`h-6 w-6 rounded-full ${event.iconBackground} flex items-center justify-center mt-1 z-10`}>
                  <i className={`bi bi-${event.icon} text-white text-sm`}></i>
                </div>
                <div className="ml-4">
                  <div className="font-medium">{event.title}</div>
                  <div className="text-sm text-gray-500">{event.timestamp}</div>
                  <div className="mt-1 text-sm text-gray-600">{event.description}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
