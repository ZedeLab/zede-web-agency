import React from "react";
import { useRouter } from "next/router";
import { makeStyles } from "@material-ui/core/styles";
import cNames from "classnames";
import Link from "next/link";
import { Typography } from "@material-ui/core";
const useStyle = makeStyles((theme) => ({
  link: {
    ...theme.typography.link,
    marginLeft: theme.spacing(4),
    color: theme.palette.text.primary,
    fontSize: "1.1rem",
  },
  selected: {
    color: theme.palette.secondary.main,
  },
}));

const Cutomlink = ({ lable, path, children }) => {
  const classes = useStyle();
  const router = useRouter();

  return (
    <Link href={path}>
      <a
        className={cNames(classes.link, {
          [`${classes.selected}`]: router.pathname == path,
        })}
      >
        {children}
      </a>
    </Link>
  );
};

export default Cutomlink;
