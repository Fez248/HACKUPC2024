import React from 'react';

interface TimelineEvent {
  id: number;
  timestamp: Date;
  title: string;
  description?: string;
}

interface TimelineProps {
  events: TimelineEvent[];
}

const Timeline: React.FC<TimelineProps> = ({ events }) => {
    const randomNumber = (Math.floor(Math.random() * 4));

    let color: string;
    switch (randomNumber) {
        case 0:
            color = 'red';
            break;
        case 1:
            color = 'green';
            break;
        case 2:
            color = 'yellow';
            break;
        case 3:
            color = 'blue';
            break;
        case 4:
            color = 'purple';
            break;
        default:
            color = 'NULL'
    }

    return (
        <div className="timeline">
            {events.map(event => (
                <div key={event.id} className="bg-[#40A2E3] rounded-lg shadow-xl p-4 mb-4 ml-4" style={{width: '100%'}}>
                    <div className="flex items-center mb-2">
                        <div className="ml-4">
                            <h3 className="text-lg font-medium text-gray-900">{event.title}</h3>
                            <p className="text-sm text-gray-700">{event.timestamp.toDateString()}</p>
                        </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-300 to-white rounded-lg shadow-md p-4 mb-1">
                        <div className="flex items-center mb-2">
                            <div className="flex-shrink-0">
                                {event.description && (
                                    <p className="text-sm text-gray-700">{event.description}</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Timeline;
