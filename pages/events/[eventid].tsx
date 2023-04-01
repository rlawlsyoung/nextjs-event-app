import { useRouter } from "next/router";

import { getEventById } from "@/dummy-data";

const EventsDetailPage = () => {
  const router = useRouter();

  const eventId = () => {
    if (router.query.eventId && !Array.isArray(router.query.eventId))
      return router.query.eventId;
    return "";
  };

  const event = getEventById(eventId());

  return event ? (
    <div>
      <h1>EventsDetail</h1>
    </div>
  ) : (
    <div>No event found!</div>
  );
};

export default EventsDetailPage;
