import React, { useState } from "react";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

import { makeStyles } from "@material-ui/styles";
import { Button, IconButton } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    root: {
        maxWidth: "25rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        margin: "auto",
        paddingBottom: "1rem",

        background: "#fff",
    },
    movie_wrapper: {
        display: "flex",
        padding: "0 0.5rem",
        margin: "auto",
        justifyContent: "center",
    },
    icon: { fontSize: "5rem" },
    vote: {
        display: "flex",
        flexDirection: "column",
        flex: 0.2,
        justifyContent: "center",
        alignItems: "center",
    },
    image_wrapper: {
        flex: 0.1,
        padding: "0.5rem",
        borderRadius: "0.5rem",
    },
    image: {
        width: "8rem",
        height: "90%",
        borderRadius: "0.5rem",
    },
    text: {
        flex: 0.5,
        margin: "0.5rem 0",
    },
    sub_text: { color: "#787878" },
    header: {
        fontSize: "2rem",
        fontWeight: "600",
    },
    btn: {
        width: "85%",
        textAlign: "center",
        margin: "auto",
    },
    line: {
        width: "95%",
        color: "#787878",
    },
}));

const MovieCard = ({ data }) => {
    const classes = useStyles();
    const [vote, setVote] = useState(0);
    const { name, category, language, genre, sort } = data;
    return (
        <div className={classes.root}>
            <div className={classes.movie_wrapper}>
                <div className={classes.vote}>
                    <IconButton onClick={() => setVote((vote) => vote + 1)}>
                        <ArrowDropUpIcon className={classes.icon} />
                    </IconButton>
                    <div>{vote}</div>
                    <IconButton onClick={() => setVote((vote) => vote - 1)}>
                        <ArrowDropDownIcon className={classes.icon} />
                    </IconButton>
                </div>
                <div className={classes.image_wrapper}>
                    <img
                        src="https://picsum.photos/200"
                        alt="dummy"
                        className={classes.image}
                    />
                </div>
                <div className={classes.text}>
                    <div className={classes.header}>{name}</div>
                    <div className={classes.text}>
                        <span className={classes.sub_text}>Category:</span>
                        {category}
                    </div>
                    <div className={classes.text}>
                        <span className={classes.sub_text}>Language:</span>
                        {language}
                    </div>
                    <div className={classes.text}>
                        <span className={classes.sub_text}>Genre:</span>
                        {genre}
                    </div>
                    <div className={classes.text}>
                        <span className={classes.sub_text}>Sort:</span>
                        {sort}
                    </div>
                </div>
            </div>
            <Button variant="contained" color="primary" className={classes.btn}>
                Watch Trailer
            </Button>
            <hr className={classes.line} />
        </div>
    );
};

export default MovieCard;
