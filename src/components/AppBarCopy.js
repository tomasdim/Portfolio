import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import "../styles/AppBar.css";
import { Link } from "react-router-dom";
import {
  Hidden,
  Typography,
  AppBar,
  Toolbar,
  ListItemText,
  IconButton,
  SwipeableDrawer,
  List,
  ListItem,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 10,
    backgroundColor: "white",
    position: "fixed",
    zIndex: 200,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    fontFamily: "'Roboto Slab', serif",
    cursor: "pointer",
    textDecoration: "none",
    "&:visited": {
      textDecoration: "none",
    },
    "&:link": {
      textDecoration: "none",
    },
  },
  linkText: {
    textDecoration: "none",
    color: "rgb(30,30,30)",
  },
  smallText: {
    color: "#01b7ff",
    fontSize: "14px",
  },
  grow: {
    flexGrow: 1,
  },
  button: {
    color: "rgb(30,30,30)",
    fontFamily: "'Roboto Slab', serif",
    fontSize: "20px",
    textDecoration: "none",
    backgroundImage:
      "linear-gradient(rgb(255, 255, 255), rgb(255, 255, 255)),linear-gradient(#01b7ff, #01b7ff)",
    backgroundSize: " 100% 2px, 0 2px",
    backgroundPosition: "100% 100%, 0 100%",
    backgroundRepeat: "no-repeat",
    margin: "15px",
    transition: "background-size 0.3s linear",
    "&:hover": {
      backgroundSize: "0 2px, 100% 2px",
      cursor: "pointer",
    },
    "&:visited": {
      color: "inherit",
    },
  },
  divider: {
    width: "1px",
    height: "20px",
    backgroundColor: "rgb(170,170,170)",
    marginTop: "4px",
    marginRight: "5px",
  },
  mediaIcon: {
    color: "black",
    cursor: "pointer",
    transition: "0.5s",
    "&:hover": {
      color: "#01b7ff",
    },
  },
  AppbarSocialIconContainer: {
    display: "flex",
    width: "32px",
    height: "30px",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: "8px",
    paddingRight: "8px",
  },
  asdfr: {
    minHeight: "81px",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-around",
  },
  menuIcon: {
    borderRadius: "4px",
    border: "1px solid rgb(220,220,220)",
    padding: "1.8%",
  },
  drawerButton: {
    color: "rgb(30,30,30)",
    fontSize: "20px",
    textDecoration: "none",
    backgroundImage:
      "linear-gradient(rgb(255, 255, 255), rgb(255, 255, 255)),linear-gradient(#01b7ff, #01b7ff)",
    backgroundSize: " 100% 2px, 0 2px",
    backgroundPosition: "100% 100%, 0 100%",
    backgroundRepeat: "no-repeat",
    transition: "background-size 0.3s linear",
    "&:hover": {
      backgroundSize: "0 2px, 100% 2px",
      cursor: "pointer",
    },
    "&:visited": {
      color: "inherit",
    },
    "& .MuiTypography-body1": {
      fontFamily: "'Roboto Slab', serif",
    },
  },
}));

export default function ButtonAppBarCopy() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  //Breakpoints

  return (
    <div className={classes.root}>
      <AppBar justifyContent="center" color="white" elevation={0}>
        <Toolbar className={classes.asdfr}>
          <a href="/Portfolio" className={classes.linkText}>
            <Typography variant="h6" className={classes.title}>
              <div className={classes.nameText}>Tomás Di Maria</div>
              <div className={classes.smallText}>Front End Developer</div>
            </Typography>
          </a>
          <Hidden smDown>
            <div className={classes.grow}></div>
            <div className={classes.buttonContainer}>
              <a href="./#Home" className={classes.button}>
                Home
              </a>
              <a href="./#Works" className={classes.button} color="inherit">
                Proyectos
              </a>
              <a href="#Inquiry" className={classes.button} color="inherit">
                Contacto
              </a>
            </div>
            <div className={classes.divider}></div>
            <div className={classes.AppbarSocialIconContainer}>
              <GitHubIcon
                style={{ fontSize: 28 }}
                className={classes.mediaIcon}
                onClick={() => {
                  window.open("https://github.com", "_blank");
                }}
              />
            </div>
            <div className={classes.AppbarSocialIconContainer}>
              <LinkedInIcon
                style={{ fontSize: 28 }}
                className={classes.mediaIcon}
                onClick={() => {
                  window.open("https://linkedin.com", "_blank");
                }}
              />
            </div>
            <div className={classes.AppbarSocialIconContainer}>
              <AssignmentIndIcon
                style={{ fontSize: 28 }}
                className={classes.mediaIcon}
                onClick={() => {
                  window.open("https://canva.com", "_blank");
                }}
              />
            </div>
          </Hidden>
          <Hidden mdUp>
            <div className={classes.grow}></div>
            <IconButton onClick={() => setOpen(true)}>
              <MenuIcon className={classes.menuIcon} />
            </IconButton>
            <SwipeableDrawer
              anchor="top"
              open={open}
              onClose={() => setOpen(false)}
              onOpen={() => {}}
            >
              <div>
                <List>
                  <Link className={classes.drawerButton} to="/Portfolio">
                    <ListItem>
                      <ListItemText className={classes.drawerButton}>
                        Volver a Home
                      </ListItemText>
                    </ListItem>
                  </Link>
                </List>
              </div>
            </SwipeableDrawer>
          </Hidden>
        </Toolbar>
      </AppBar>
    </div>
  );
}
