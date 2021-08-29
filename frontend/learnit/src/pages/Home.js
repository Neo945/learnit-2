import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import Particle from "./Particle";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    fontFamily: "Nunito",
    background: "#fff5ee",
    // width: '100vw'
  },
  appbar: {
    background: "none",
  },
  appbarWrapper: {
    width: "80%",
    margin: "0 auto",
  },
  appbarTitle: {
    flexGrow: "1",
    fontSize: "5rem",
    color: "black",
  },
  icon: {
    color: "#fff",
    fontSize: "2rem",
  },
  colorText: {
    color: "#5AFF3D",
  },
  container: {
    textAlign: "center",
  },
  title: {
    color: "black",
    fontSize: "3.0rem",
    margin: theme.spacing(15, 0, 5, 0),
  },
  subTitle: {
    color: "black",
    fontSize: "1.5rem",
    margin: theme.spacing(8),
  },
  button: {
    margin: theme.spacing(1),
  },
  position: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100vw",
    height: "100vh",
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.root} id="header">
      <div className={classes.position}>
        <Particle />
      </div>
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>
            Learn<span className={classes.colorText}>It</span>
          </h1>
        </Toolbar>
      </AppBar>

      <div className={classes.container}>
        <h1 className={classes.title}>
          Learning without <br />
          any <span className={classes.colorText}>Constraints</span>
        </h1>
        <h3 className={classes.subTitle} paddingTop={3}>
          The online collaborative platform to <br />
          bring students and teachers together anytime, anywhere.
        </h3>
        <Link to='/sign-in'><Button color="secondary">LogIn</Button></Link>
        <Link to="/sign-up" style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
          >
            SignUp
          </Button>
        </Link>
      </div>
    </div>

    // <div className='rectangle'>
    //     <div className='logo'>LearnIt</div>
    //     <div className='login-btn'>Login</div>
    //     <button className='signup-container'>Sign Up</button>
    // <div className="text">
    //     Learning without any Constraints
    // </div>
    // <div className='info'>
    // The online collaborative platform to bring students and teachers together anytime, anywhere.
    // </div>
    // </div>
  );
};

export default Home;
