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
import { Icon } from "@material-ui/core";
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
  firstName: "",
  lastName: "",
  email: "",
  password: "",
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

export default function SignUp() {
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

  // const registerUser = (e) => {
  //   console.log(formState);
  //   axios
  //     .post("http://localhost:9000/users/register", formState)
  //     .then((res) => console.log(res));
  //   e.preventDefault();
  // };

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
        <form className={classes.form + " " + classes.buttonForm}>
          <Button
            onClick={() =>
              (window.location.href = "http://localhost:4000/api/user/google")
            }
            variant="contained"
            color="primary"
            fullWidth
            className={classes.googleButton}
            startIcon={
              <Icon>
                <img
                  className={classes.icon}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/600px-Google_%22G%22_Logo.svg.png"
                  alt=""
                />
              </Icon>
            }
          >
            Login with Google
          </Button>
        </form>
        <div className={"seperator " + classes.divider}>Or</div>

        <form
          className={classes.form}
          onSubmit={async (event) => {
            event.preventDefault();
            const data = {
              username: formState.firstName + " " + formState.lastName,
              email: formState.email,
              password: formState.password,
              phone: formState.phone,
              isTeacher: checked,
            };
            const response = await fetch(`http://localhost:4000/api/user/add`, {
              method: "POST",
              body: JSON.stringify(data),
              credentials: "include",
              mode: "cors",
              headers: {
                "Content-type": "application/json; charset=UTF-8",
              },
            });
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
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                value={formState.firstName}
                onChange={(e) => handleFormChange(e)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                value={formState.lastName}
                onChange={(e) => handleFormChange(e)}
              />
            </Grid>
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
              <TextField
                error={error}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={formState.email}
                onChange={(e) => {
                  if (error) setError(false);
                  handleFormChange(e);
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                error={error}
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={formState.password}
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
