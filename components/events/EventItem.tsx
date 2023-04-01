import React from "react";
import Link from "next/link";

import { EventType } from "@/dummy-data";

import classes from "./eventItem.module.css";

const EventItem: React.FC<EventType> = ({
  id,
  title,
  image,
  date,
  location,
}) => {
  const humanReadableDate = new Date(date).toLocaleDateString("ko-KR");

  return (
    <li className={classes.item}>
      <img src={"/" + image} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <address>{location}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Link href={`/events/${id}`}>EXPLORE EVENT</Link>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
