import React from "react";

import EventItem from "./EventItem";
import { EventType } from "@/dummy-data";

interface EventListType {
  items: EventType[];
}

const EventList: React.FC<EventListType> = (props) => {
  const { items } = props;
  return (
    <ul>
      {items.map((item) => (
        <EventItem />
      ))}
    </ul>
  );
};

export default EventList;
