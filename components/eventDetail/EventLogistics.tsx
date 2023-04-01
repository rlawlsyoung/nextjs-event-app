import React from "react";
import { MdDateRange, MdPlace } from "react-icons/md";

import LogisticsItem from "./LogisticsItem";

import classes from "./event-logistics.module.css";

interface EventLogisticsType {
  date: string;
  address: string;
  image: string;
  imageAlt: string;
}

const EventLogistics: React.FC<EventLogisticsType> = ({
  date,
  address,
  image,
  imageAlt,
}) => {
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const addressText = address.replace(", ", "\n");

  return (
    <section className={classes.logistics}>
      <div className={classes.image}>
        <img src={`/${image}`} alt={imageAlt} />
      </div>
      <ul className={classes.list}>
        <LogisticsItem icon={<MdDateRange />}>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={<MdPlace />}>
          <address>{addressText}</address>
        </LogisticsItem>
        /
      </ul>
    </section>
  );
};

export default EventLogistics;
