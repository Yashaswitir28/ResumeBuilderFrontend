import React, { Component } from "react";
import Profile from "./Profile";
import Education from "./Education";
import Projects from "./Projects";
import Experience from "./Experience";
import Extras from "./Extras";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from "../firebase";
import { onValue, ref } from "firebase/database";

export class Resume extends Component {
  state = {
    step: 1,
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    github: "",
    linkedin: "",
    twitter: "",
    website: "",
    college: "",
    fromyear1: "",
    toyear1: "",
    qualification1: "",
    description1: "",
    title1: "",
    link1: "",
    projectDescription1: "",
    institute1: "",
    position1: "",
    duration1: "",
    experienceDescription1: "",
    skill1: "",
    skill2: "",
    skill3: "",
    skill4: "",
    skill5: "",
    skill6: "",
    interest1: "",
    interest2: "",
    interest3: "",
    interest4: "",
    interest5: "",
    interest6: "",
    tempUuid: "",
  };

  getData = () => {
    onValue(ref(db), (snapshot) => {
      const wholeData = snapshot.val();
      if (wholeData !== null) {
        const data = wholeData[this.state.tempUuid];
        console.log(data);
        this.setState({
          firstname: data.firstname || "",
          lastname: data.lastname || "",
          email: data.email || "",
          phone: data.phone || "",
          github: data.github || "",
          linkedin: data.linkedin || "",
          twitter: data.twitter || "",
          website: data.website || "",
          college: data.college || "",
          fromyear1: data.fromyear1 || "",
          toyear1: data.toyear1 || "",
          qualification1: data.qualification1 || "",
          description1: data.description1 || "",
          title1: data.title1 || "",
          link1: data.link1 || "",
          projectDescription1: data.projectDescription1 || "",
          institute1: data.institute1 || "",
          position1: data.position1 || "",
          duration1: data.duration1 || "",
          experienceDescription1: data.experienceDescription1 || "",
          skill1: data.skill1 || "",
          skill2: data.skill2 || "",
          skill3: data.skill3 || "",
          skill4: data.skill4 || "",
          skill5: data.skill5 || "",
          skill6: data.skill6 || "",
          interest1: data.interest1 || "",
          interest2: data.interest2 || "",
          interest3: data.interest3 || "",
          interest4: data.interest4 || "",
          interest5: data.interest5 || "",
          interest6: data.interest6 || "",
        });
      }
    });
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  signIn = () => {
    var provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => this.setState({ tempUuid: result.user.uid }))
      .catch((e) => console.log(e));
  };

  render() {
    const { step } = this.state;
    const {
      firstname,
      lastname,
      email,
      phone,
      website,
      github,
      linkedin,
      twitter,
      college,
      fromyear1,
      toyear1,
      qualification1,
      description1,
      title1,
      link1,
      projectDescription1,
      institute1,
      position1,
      duration1,
      experienceDescription1,
      skill1,
      skill2,
      skill3,
      skill4,
      skill5,
      skill6,
      interest1,
      interest2,
      interest3,
      interest4,
      interest5,
      interest6,
      tempUuid,
    } = this.state;
    const values = {
      firstname,
      lastname,
      email,
      phone,
      website,
      github,
      linkedin,
      twitter,
      college,
      fromyear1,
      toyear1,
      qualification1,
      description1,
      title1,
      link1,
      projectDescription1,
      institute1,
      position1,
      duration1,
      experienceDescription1,
      skill1,
      skill2,
      skill3,
      skill4,
      skill5,
      skill6,
      interest1,
      interest2,
      interest3,
      interest4,
      interest5,
      interest6,
      tempUuid,
    };
    const fnc = () => {
      switch (step) {
        case 1:
          return (
            <div className="App mt-3">
              <div className="container col-lg-10 mx-auto text-center">
                <Profile
                  nextStep={this.nextStep}
                  handleChange={this.handleChange}
                  values={values}
                />
              </div>
            </div>
          );
        case 2:
          return (
            <div className="App mt-3">
              <div className="container col-lg-10 mx-auto text-center">
                <Education
                  nextStep={this.nextStep}
                  prevStep={this.prevStep}
                  handleChange={this.handleChange}
                  values={values}
                />
              </div>
            </div>
          );
        case 3:
          return (
            <div className="App mt-3">
              <div className="container col-lg-8 mx-auto text-center">
                <Projects
                  nextStep={this.nextStep}
                  prevStep={this.prevStep}
                  handleChange={this.handleChange}
                  values={values}
                />
              </div>
            </div>
          );
        case 4:
          return (
            <div className="App mt-3">
              <div className="container col-lg-10 mx-auto text-center">
                <Experience
                  nextStep={this.nextStep}
                  prevStep={this.prevStep}
                  handleChange={this.handleChange}
                  values={values}
                />
              </div>
            </div>
          );
        case 5:
          return (
            <div className="App mt-3">
              <div className="container col-lg-10 mx-auto text-center">
                <Extras
                  prevStep={this.prevStep}
                  handleChange={this.handleChange}
                  values={values}
                />
              </div>
            </div>
          );
        default:
          return <div />;
      }
    };
    return (
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={this.props.classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={this.props.classes.title}>
              Resume Builder
            </Typography>
            <Button color="inherit" onClick={this.signIn}>
              Login
            </Button>
            <Button color="inherit" onClick={this.getData}>
              Update Your Data
            </Button>
          </Toolbar>
        </AppBar>
        {fnc()}
      </div>
    );
  }
}

export default Resume;
