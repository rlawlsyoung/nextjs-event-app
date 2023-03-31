import EventList from "@/components/events/EventList";
import { getFeaturedEvents } from "@/dummy-data";

const HomePage = () => {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <h1>HOME</h1>
      <EventList items={featuredEvents} />
    </div>
  );
};

export default HomePage;
