import React from "react";

import EventItem from "./EventItem";
import { EventType } from "@/dummy-data";

interface EventListType {
  items: EventType[];
}

const EventList: React.FC<EventListType> = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <EventItem
          key={item.id}
          id={item.id}
          title={item.title}
          image={item.image}
          date={item.date}
          location={item.location}
        />
      ))}
    </ul>
  );
};

export default EventList;
