import React, { useReducer } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const initialformState = {
  phone: "",
};
const formReducer = (state, action) => {
  switch (action.type) {
    case "handleInput":
      return {
        ...state,
        [action.field]: action.payload,
      };
    default:
      return state;
  }
};

export default function AddInfo() {
  const classes = useStyles();
  const [error, setError] = React.useState(false);
  const [formState, dispatch] = useReducer(formReducer, initialformState);

  const handleFormChange = (e) => {
    dispatch({
      type: "handleInput",
      field: e.target.name,
      payload: e.target.value,
    });
  };
  const [checked, setChecked] = React.useState(false);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form
          className={classes.form}
          onSubmit={async (event) => {
            event.preventDefault();
            const data = {
              phone: formState.phone,
              isTeacher: checked,
            };
            const response = await fetch(
              `http://localhost:4000/api/user/add/info`,
              {
                method: "POST",
                body: JSON.stringify(data),
                credentials: "include",
                mode: "cors",
                headers: {
                  "Content-type": "application/json; charset=UTF-8",
                },
              }
            );
            const json = await response.json();
            if (json.message === "success") {
              window.location.href = "http://localhost:3000/sign-in";
              setError(false);
            } else {
              console.log(json);
              setError(true);
            }
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="phone"
                label="Phone number"
                type="number"
                id="phone"
                autoComplete="current-password"
                value={formState.phone}
                onChange={(e) => {
                  if (error) setError(false);
                  handleFormChange(e);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    checked={checked}
                    onChange={() => {
                      setChecked(!checked);
                    }}
                  />
                }
                label="Are you a instructor?"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            // onClick={registerUser}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
