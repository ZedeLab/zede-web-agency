import React from "react";
import { useRouter } from "next/router";
import {
  makeStyles,
  useTheme,
  useMediaQuery,
  Box,
  Typography,
} from "@material-ui/core";
import cNames from "classnames";
import Link from "next/link";

import { TimelineDot } from "@material-ui/lab";

const useStyle = makeStyles((theme) => ({
  container: {
    display: "flex",
    jus: "center",
  },
  link: {
    textDecoration: "none",
    "&:focus": {
      WebkitTapHighlightColor: "transparent",
    },
  },
  label: {
    ...theme.typography.subtitle1,
    color: theme.palette.text.primary,
  },
  selected: {
    color: theme.palette.secondary.dark,

    [theme.breakpoints.down("sm")]: {},
    "& :active": {
      outline: "none",
    },
  },
  dot: {
    backgroundColor: theme.palette.secondary.light,
    marginLeft: theme.spacing(1),
  },
}));

const CustomLink = ({ path, children }) => {
  const classes = useStyle();
  const router = useRouter();
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isPortfolioPage =
    router.pathname === path ||
    (router.pathname.startsWith("/portfolios") && path === "/portfolios");

  return (
    <Box mx={2} my={1} className={cNames(classes.container)}>
      <Link href={path}>
        <a className={cNames(classes.link)}>
          <Typography
            className={cNames(classes.label, {
              [`${classes.selected}`]: isPortfolioPage,
            })}
          >
            {children}
          </Typography>
        </a>
      </Link>
      {isPortfolioPage && smallScreen && typeof children === "string" ? (
        <TimelineDot className={classes.dot} />
      ) : null}
    </Box>
  );
};

export default CustomLink;
