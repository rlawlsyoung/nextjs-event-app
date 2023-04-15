import { useRouter } from "next/router";

import { getFilteredEvents } from "@/helpers/api-util";
import EventList from "@/components/events/EventList";
import { GetServerSideProps } from "next";
import { EventType } from "@/helpers/api-util";

interface FilterEventsPageProps {
  hasError: boolean;
  events: EventType[];
}

const FilterEventsPage: React.FC<FilterEventsPageProps> = ({
  hasError,
  events,
}) => {
  console.log(events);

  // const router = useRouter();

  // const filterData = router.query.slug;

  // if (!filterData) {
  //   return <p className="center">Loading...</p>;
  // }

  // const filteredYear = Number(filterData![0]);
  // const filteredMonth = Number(filterData![1]);

  // const filteredEvents = getFilteredEvents({
  //   year: filteredYear,
  //   month: filteredMonth,
  // });

  return hasError ? (
    <p className="center">
      필터에 해당하는 이벤트가 없거나 필터 값이 잘못되었습니다.
    </p>
  ) : (
    <div>
      <EventList items={events} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const filterData = params?.slug;

  if (!filterData) {
    return <p className="center">Loading...</p>;
  }

  const filteredYear = Number(filterData![0]);
  const filteredMonth = Number(filterData![1]);

  const filteredEvents = await getFilteredEvents({
    year: filteredYear,
    month: filteredMonth,
  });

  return isNaN(filteredYear) ||
    isNaN(filteredMonth) ||
    filteredYear > 3000 ||
    filteredYear < 1999 ||
    filteredMonth > 12 ||
    filteredMonth < 1 ||
    !filteredEvents ||
    filteredEvents.length === 0
    ? {
        props: {
          hasError: true,
        },
        // 주석 처리된건 2개의 다른 대안이다.
        // notFound: true,
        // redirect: {
        //   destination: "/error",
        // },
      }
    : {
        props: {
          events: filteredEvents,
        },
      };
};

export default FilterEventsPage;
