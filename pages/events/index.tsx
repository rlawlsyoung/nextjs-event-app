import { getAllEvents } from "@/dummy-data";
import EventList from "@/components/events/EventList";

const EventsPage = () => {
  const events = getAllEvents();
  return (
    <>
      <EventList items={events} />
    </>
  );
};

export default EventsPage;
