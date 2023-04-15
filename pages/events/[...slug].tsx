import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";

import EventList from "@/components/events/EventList";
import { EventType } from "@/helpers/api-util";

const FilterEventsPage = () => {
  const [loadedEvents, setLoadedEvents] = useState<EventType[]>();
  const router = useRouter();

  const filterData = router.query.slug;

  const { data, error } = useSWR(
    "https://nextjs-event-app-f461b-default-rtdb.asia-southeast1.firebasedatabase.app/events.json",
    (url) => fetch(url).then((res) => res.json())
  );

  useEffect(() => {
    console.log(data);

    if (data) {
      const events = [];
      for (const key in data) {
        events.push({
          id: key,
          ...data[key],
        });
      }
      setLoadedEvents(events);
    }
  }, [data]);

  if (!loadedEvents) {
    return <p className="center">Loading...</p>;
  }

  const filteredYear = Number(filterData![0]);
  const filteredMonth = Number(filterData![1]);

  const filteredEvents = loadedEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === filteredYear &&
      eventDate.getMonth() === filteredMonth - 1
    );
  });

  return isNaN(filteredYear) ||
    isNaN(filteredMonth) ||
    filteredYear > 3000 ||
    filteredYear < 1999 ||
    filteredMonth > 12 ||
    filteredMonth < 1 ||
    !filteredEvents ||
    filteredEvents.length === 0 ||
    error ? (
    <p className="center">
      필터에 해당하는 이벤트가 없거나 필터 값이 잘못되었습니다. (혹은 오류)
    </p>
  ) : (
    <div>
      <EventList items={filteredEvents} />
    </div>
  );
};

// export const getServerSideProps: GetServerSideProps = async ({ params }) => {
//   const filterData = params?.slug;

//   if (!filterData) {
//     return <p className="center">Loading...</p>;
//   }

//   const filteredYear = Number(filterData![0]);
//   const filteredMonth = Number(filterData![1]);

//   const filteredEvents = await getFilteredEvents({
//     year: filteredYear,
//     month: filteredMonth,
//   });

//   return isNaN(filteredYear) ||
//     isNaN(filteredMonth) ||
//     filteredYear > 3000 ||
//     filteredYear < 1999 ||
//     filteredMonth > 12 ||
//     filteredMonth < 1 ||
//     !filteredEvents ||
//     filteredEvents.length === 0
//     ? {
//         props: {
//           hasError: true,
//         },
//         // 주석 처리된건 2개의 다른 대안이다.
//         // notFound: true,
//         // redirect: {
//         //   destination: "/error",
//         // },
//       }
//     : {
//         props: {
//           events: filteredEvents,
//         },
//       };
// };

export default FilterEventsPage;
