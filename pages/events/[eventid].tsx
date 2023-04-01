import { useRouter } from "next/router";

import EventSummary from "@/components/eventDetail/EventSummary";
import EventLogistics from "@/components/eventDetail/EventLogistics";
import EventContent from "@/components/eventDetail/EventContent";

import { getEventById } from "@/dummy-data";

const EventsDetailPage = () => {
  const router = useRouter();

  const eventId = () => {
    if (router.query.eventId && !Array.isArray(router.query.eventId))
      return router.query.eventId;
    return "";
  };

  const event = getEventById(eventId());

  return event ? <></> : <div>No event found!</div>;
};

export default EventsDetailPage;
