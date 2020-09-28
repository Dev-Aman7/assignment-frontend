import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import { TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import * as actionCreators from "../store/actions";

const useStyles = makeStyles(() => ({
    root: {
        // margin: "auto",
    },

    form: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        maxWidth: "30rem",
        margin: "auto",
        marginTop: "5rem",
        borderRadius: "1rem",
        padding: "3rem 0",
        background: "linear-gradient(to top right, #33ccff 0%, #ff99cc 100%)",
    },
    form_header: {
        color: "#fff",
        fontWeight: "600",
        fontSize: "5rem",
    },
    form_item: {
        width: "20rem",
        margin: "0.5rem 0",
        color: "#fff",
    },
    form_button: {
        width: "20rem",
        background: "linear-gradient(to top right, #3333ff 0%, #ff99cc 100%)",
        color: "#fff",
    },
    link: {
        textDecoration: "none",
        marginTop: "1rem",
        color: "#fff",
        cursor: "pointer",
    },
}));
const Signin = () => {
    const [details, setDetails] = useState({ name: "", password: "" });
    const validated = useSelector((state) => state.user.validated);
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        if (validated === true) {
            history.push("/home");
        }
        return () => {};
        //eslint-disable-next-line
    }, [validated]);
    const changeHandler = (e, field) => {
        setDetails({ ...details, [field]: e.target.value });
        console.log(e.target.value, field);
    };
    const submitHandler = (e) => {
        e.preventDefault();
        // console.log("subbmit", details);
        dispatch(actionCreators.verifyUser(details));
    };
    return (
        <div className={classes.root}>
            <form className={classes.form}>
                <div className={classes.form_header}>Login</div>
                <TextField
                    id="name"
                    label="Name"
                    variant="outlined"
                    className={classes.form_item}
                    required
                    value={details.name}
                    onChange={(e) => changeHandler(e, "name")}
                />
                <TextField
                    id="password"
                    label="Password"
                    variant="outlined"
                    type="password"
                    required
                    className={classes.form_item}
                    value={details.password}
                    onChange={(e) => changeHandler(e, "password")}
                />

                <Button
                    variant="contained"
                    type="submit"
                    className={classes.form_button}
                    onClick={submitHandler}
                >
                    Submit
                </Button>
                <Link className={classes.link} to="/signup">
                    Create an account
                </Link>
            </form>
        </div>
    );
};
export default Signin;
