import React from "react";
import { useRouter } from "next/router";
import { makeStyles } from "@material-ui/core/styles";
import cNames from "classnames";
import Link from "next/link";
import { Typography } from "@material-ui/core";
const useStyle = makeStyles((theme) => ({
  link: {
    ...theme.typography.link,
    marginLeft: theme.spacing(2),
    color: theme.palette.text.primary,
  },
  selected: {
    color: theme.palette.text.secondary,
  },
}));

const Cutomlink = ({ lable, path, children }) => {
  const classes = useStyle();
  const router = useRouter();
  return (
    <Link href={path}>
      <a
        //   active={router.pathname === "/"}
        className={cNames(classes.link, {
          [`${classes.selected}`]: router.pathname === path,
        })}
      >
        {children}
      </a>
    </Link>
  );
};

export default Cutomlink;
