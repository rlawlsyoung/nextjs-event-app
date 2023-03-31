import React from "react";
import Link from "next/link";

import { EventType } from "@/dummy-data";

const EventItem: React.FC<EventType> = ({
  id,
  title,
  image,
  date,
  location,
}) => {
  const humanReadableDate = new Date(date).toLocaleDateString("ko-KR");

  return (
    <li>
      <img src={"/" + image} alt={title} />
      <div>
        <div>
          <h2>{title}</h2>
          <div>
            <time>{humanReadableDate}</time>
          </div>
          <div>
            <address>{location}</address>
          </div>
        </div>
        <div>
          <Link href={`/events/${id}`}>EXPLORE EVENT</Link>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
