import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { TextField, MenuItem, Button } from "@material-ui/core";
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
        marginTop: "1rem",
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
const Signup = () => {
    const [details, setDetails] = useState({
        email: "",
        name: "",
        profession: "",
        password: "",
        phone: "",
    });
    const classes = useStyles();
    const dispatch = useDispatch();
    const changeHandler = (e, field) => {
        setDetails({ ...details, [field]: e.target.value });
        console.log(e.target.value, field);
    };
    const submitHandler = (e) => {
        e.preventDefault();
        console.log("subbmit", details);
        dispatch(actionCreators.setUser(details));
    };
    return (
        <div className={classes.root}>
            <form className={classes.form}>
                <div className={classes.form_header}>SignUp</div>
                <TextField
                    id="name"
                    label="Name"
                    variant="outlined"
                    className={classes.form_item}
                    value={details.name}
                    onChange={(e) => changeHandler(e, "name")}
                    required
                />
                <TextField
                    id="password"
                    label="Password"
                    variant="outlined"
                    type="password"
                    required
                    value={details.password}
                    className={classes.form_item}
                    onChange={(e) => changeHandler(e, "password")}
                />
                <TextField
                    id="email"
                    label="Email"
                    variant="outlined"
                    required
                    value={details.email}
                    className={classes.form_item}
                    onChange={(e) => changeHandler(e, "email")}
                />
                <TextField
                    id="phone"
                    label="Phone No."
                    variant="outlined"
                    required
                    value={details.phone}
                    className={classes.form_item}
                    onChange={(e) => changeHandler(e, "phone")}
                />

                <TextField
                    id="select"
                    label="Profession"
                    value={details.profession}
                    variant="outlined"
                    select
                    className={classes.form_item}
                    onChange={(e) => changeHandler(e, "profession")}
                >
                    <MenuItem value="profession1">Profession1</MenuItem>
                    <MenuItem value="profession2">Profession2</MenuItem>
                </TextField>
                <Button
                    variant="contained"
                    type="submit"
                    className={classes.form_button}
                    onClick={submitHandler}
                >
                    Submit
                </Button>

                <Link to="/" className={classes.link}>
                    Already have an account?
                </Link>
            </form>
        </div>
    );
};
export default Signup;
