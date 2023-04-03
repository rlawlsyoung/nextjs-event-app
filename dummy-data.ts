interface DateType {
  year: number;
  month: number;
}

export interface EventType {
  id: string;
  title: string;
  description?: string;
  location: string;
  date: string;
  image: string;
  isFeatured?: boolean;
}

const DUMMY_EVENTS = [
  {
    id: "e1",
    title: "Green day in Korea 2023",
    description: "Green day 내한",
    location: "Seoul National Park",
    date: "2021-05-12",
    image: "images/rock1.jpg",
    isFeatured: false,
  },
  {
    id: "e2",
    title: "INDIE PUNK PARTY",
    description: "ROCKNROLL",
    location: "Hongdae BB Club",
    date: "2021-05-30",
    image: "images/rock2.jpg",
    isFeatured: true,
  },
  {
    id: "e3",
    title: "We love punk rock",
    description: "I'm married with punk rock",
    location: "Itaewon CC Club",
    date: "2022-04-10",
    image: "images/rock3.jpg",
    isFeatured: true,
  },
];

export function getFeaturedEvents() {
  return DUMMY_EVENTS.filter((event) => event.isFeatured);
}

export function getAllEvents() {
  return DUMMY_EVENTS;
}

export function getFilteredEvents(dateFilter: DateType) {
  const { year, month } = dateFilter;

  let filteredEvents = DUMMY_EVENTS.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}

export function getEventById(id: string) {
  return DUMMY_EVENTS.find((event) => event.id === id);
}
