import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import logo from '../images/logo.png';
import styled from 'styled-components';
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'

const Span = styled.span`
font-size: 5vw;
`;

const drawerWidth = 150;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        backgroundColor: "#e5eee5",
    },
    appBar: {
        backgroundColor: "#e5eee5",
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: drawerWidth,
    },
    title: {
        flexGrow: 1,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        backgroundColor: "#e5eee5",
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        backgroundColor: "#e5eee5",
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginRight: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: 0,
    },
    menu:{
        textDecoration:"none",
        color:"#556b2f",
        fontWeight:600,
    }
}));

export default function PersistentDrawerRight(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [islogo, setlogo] = React.useState(true);

    const handleDrawerOpen = () => {
        setOpen(true);
        setlogo(false)
    };

    const handleDrawerClose = () => {
        setOpen(false);
        setlogo(true)
    };

    return (
        <div className={classes.root} >
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar style={{ height: "50px",float:"none"}}>
                    <div>
                        <img src={logo} alt="logo" style={{ width: "8vw", height: "8vw", display: islogo ? "inline-block" : "none" }} />
                        <div style={{ margin: "1.5vw 0 0 .8vw", color: "#556b2f", display: "inline-block", fontFamily: "Aroma", fontSize: "4vw" }}><Span>E</Span>DASSERY <Span>M</Span>AJLIS <Span>G</Span>ROUP</div>
                    </div>
                    <IconButton
                        color="#556b2f"
                        aria-label="open drawer"
                        edge="end"
                        onClick={handleDrawerOpen}
                        className={clsx(open && classes.hide)}
                    >
                        <MenuIcon style={{ fontWeight: "bolder",fontSize: "9vw",color: "#556b2f",position:"relative",right:'-7vw'}} />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="right"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader} >
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List >
                    {props.menu.map((option) => (
                        <Link to={option.url} onClick={handleDrawerClose} className={classes.menu}>
                            <ListItem button key={option.text}>
                                <ListItemText primary={option.text} />
                            </ListItem>
                        </Link>
                    ))}
                </List>
                <Divider />
            </Drawer>
        </div>
    );
}