import { useRouter } from "next/router";

import { getFilteredEvents } from "@/dummy-data";
import EventList from "@/components/events/EventList";
const FilterEventsPage = () => {
  const router = useRouter();

  const filterData = router.query.slug;

  const filteredYear = Number(filterData![0]);
  const filteredMonth = Number(filterData![1]);

  const filteredEvents = getFilteredEvents({
    year: filteredYear,
    month: filteredMonth,
  });

  if (!filterData) {
    return <p className="center">Loading...</p>;
  }

  return isNaN(filteredYear) ||
    isNaN(filteredMonth) ||
    filteredYear > 3000 ||
    filteredYear < 1999 ||
    filteredMonth > 12 ||
    filteredMonth < 1 ||
    !filteredEvents ||
    filteredEvents.length === 0 ? (
    <p className="center">
      필터에 해당하는 이벤트가 없거나 필터 값이 잘못되었습니다.
    </p>
  ) : (
    <div>
      <EventList items={filteredEvents} />
    </div>
  );
};

export default FilterEventsPage;
