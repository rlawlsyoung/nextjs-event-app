import React from "react";
import Link from "next/link";

import classes from "./button.module.css";

interface ButtonType {
  children: string;
  link: string;
}

const Button: React.FC<ButtonType> = ({ children, link }) => {
  return (
    <Link href={link} className={classes.btn}>
      {children}
    </Link>
  );
};

export default Button;
