import React from "react";
import { useRouter } from "next/router";
import { makeStyles } from "@material-ui/core/styles";
import cNames from "classnames";
import Link from "next/link";
import { Typography } from "@material-ui/core";

const Cutomlink = ({ lable, path, children, underLine }) => {
  const useStyle = makeStyles((theme) => ({
    link: {
      ...theme.typography.link,
      marginLeft: theme.spacing(4),
      color: theme.palette.text.primary,
      // textAlign: "center",
      fontSize: "1.1rem",
      [theme.breakpoints.down("sm")]: {
        marginBottom: theme.spacing(2),
        marginLeft: 0,
        fontWeight: 600,
      },
    },
    selected: {
      color: theme.palette.secondary.dark,

      [theme.breakpoints.down("sm")]: {
        borderBottom: underLine
          ? `2px solid ${theme.palette.secondary.light}`
          : "none",
        paddingBottom: theme.spacing(1),
      },
    },
  }));
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
