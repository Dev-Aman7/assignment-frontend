import React from "react";
import { useSelector } from "react-redux";
import AppBar from "@material-ui/core/AppBar";
import Popover from "@material-ui/core/Popover";

import MovieCard from "../components/MovieCard";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/styles/makeStyles";

const useStyles = makeStyles(() => ({
    movies: {
        marginTop: "1rem",
    },
    btn: {
        color: "#fff",
    },
    company: {
        padding: "1rem",
    },
}));

const Home = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const classes = useStyles();
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const movies = useSelector((state) => state.movies.all);
    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;

    return (
        <div>
            <AppBar position="static">
                <Button onClick={handleClick} className={classes.btn}>
                    Company Info
                </Button>
                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "center",
                    }}
                    transformOrigin={{
                        vertical: "top",
                        horizontal: "center",
                    }}
                >
                    <div className={classes.company}>
                        <div>Company: Geeksynergy Technologies Pvt Ltd</div>
                        <div>Address: Sanjayanagar, Bengaluru-56</div>
                        <div>Phone:XXXXXXXXX09</div>
                        <div>Email: XXXXXX@gmail.com</div>
                    </div>
                </Popover>
            </AppBar>
            <div className={classes.movies}>
                {movies.map((elem) => (
                    <MovieCard data={elem} />
                ))}
            </div>
        </div>
    );
};

export default Home;
