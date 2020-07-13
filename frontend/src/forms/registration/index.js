import React, { useState } from "react";
import SignatureCanvas from "react-signature-canvas";
import { Button, Grid, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import State from "./state.js";
import PersonalInfo from "./components/PersonalInfo";
import MedicalHistory from "./components/MedicalHistory";
import MedicalHistory2 from "./components/MedicalHistory2";
import Allergies from "./components/Allergies";
import Medications from "./components/Medications";
import Comments from "./components/Comments";
import { ValidatorForm } from "react-material-ui-form-validator";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const Registration = () => {
  const [firstSubmit, setFirstSubmit] = useState(false);
  const [done, setDone] = useState(false);
  const [state, setState] = useState(State);
  const [result, setResult] = useState(null);
  const [trimmedSignature, setTrimmedSignature] = useState({});
  const classes = useStyles();

  let sigPad = {};

  const clear = () => {
    sigPad.clear();
    setTrimmedSignature({});
  };

  const trim = () => {
    setTrimmedSignature(sigPad.getTrimmedCanvas().toDataURL("image/png"));
  };

  const firstSubmitCheck = () => {
    setFirstSubmit(true);
  };

  const sendEmail = (event) => {
    event.preventDefault();

    if (
      state.name.length > 2 &&
      state.name.length < 40 &&
      state.dob.length === 10 &&
      state.age.length === 2 &&
      state.healthcard.length > 8 &&
      state.healthcard.length < 12 &&
      state.effectivedate.length === 10 &&
      state.expirydate.length === 10 &&
      state.streetaddress.length > 5 &&
      state.streetaddress.length < 50 &&
      state.city.length > 4 &&
      state.city.length < 50 &&
      state.province.length > 2 &&
      state.province.length < 40 &&
      state.postal.length > 5 &&
      state.postal.length < 9 &&
      state.homephone.length < 16 &&
      state.workphone.length < 16 &&
      state.cellphone.length < 16 &&
      state.email.length > 9 &&
      state.email.length < 40 &&
      state.occupation.length > 5 &&
      state.occupation.length < 40 &&
      state.famphysician.length < 40 &&
      state.contacted.length < 40 &&
      state.hearofus.length < 40 &&
      state.sleepApnea !== "" &&
      state.doSmoke !== "" &&
      state.pregnancy !== "" &&
      state.allergicMed !== "" &&
      state.allergicFood !== "" &&
      state.allergicLatex !== "" &&
      state.allergicIodine !== "" &&
      state.hyperthermia !== "" &&
      state.anesthetic !== "" &&
      state.promotions !== "" &&
      state.skinCare !== ""
    ) {
      setDone(true);
      axios
        .post(
          "/registration",
          {
            ...state,
            trimmedSignature,
          },
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
            },
          }
        )
        .then((response) => {
          setResult(response.data);
          setState(State);
          setDone(true);
        })
        .catch(() => {
          setResult({
            success: false,
            message: "Something went wrong. Try again later",
          });
        });
    }
  };

  const onInputChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const onCheck = (e) => {
    const { name } = e.target;
    setState((prevState) => ({ ...prevState, [name]: !prevState[name] }));
  };

  return (
    <>
      <Container>
        {done ? (
          <p>Thank you.</p>
        ) : (
          <div className={classes.root}>
            {/* <form onSubmit={sendEmail}> */}
            <ValidatorForm onSubmit={sendEmail}>
              <Grid container spacing={6}>
                <Grid item xs={12}>
                  {result && (
                    <p className={`${result.success ? "success" : "error"}`}>
                      {result.message}
                    </p>
                  )}
                  <h1 className="registration">Pre-Screening Data</h1>
                </Grid>
                <PersonalInfo onInputChange={onInputChange} state={state} />

                <MedicalHistory
                  onCheck={onCheck}
                  onInputChange={onInputChange}
                  state={state}
                  firstSubmit={firstSubmit}
                />

                <MedicalHistory2
                  onInputChange={onInputChange}
                  state={state}
                  firstSubmit={firstSubmit}
                />

                <Allergies
                  onInputChange={onInputChange}
                  state={state}
                  firstSubmit={firstSubmit}
                />
                <Medications
                  onInputChange={onInputChange}
                  state={state}
                  firstSubmit={firstSubmit}
                />
                <Comments onInputChange={onInputChange} state={state} />

                <Grid item xs={12}>
                  <hr />
                  <h3>
                    Add your signature in the box below. Please use your mouse,
                    or finger if you have a touch screen.
                  </h3>
                </Grid>
                <Grid
                  item
                  xs={12}
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                >
                  <SignatureCanvas
                    penColor="black"
                    canvasProps={{
                      className: "sigCanvas",
                    }}
                    ref={(ref) => {
                      sigPad = ref;
                    }}
                  />

                  <Grid
                    item
                    xs={12}
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                  >
                    <Button
                      style={{
                        padding: "20px 30px",
                        marginTop: 50,
                        marginBottom: 30,
                        border: "1px solid black",
                      }}
                      onClick={clear}
                    >
                      Clear Signature
                    </Button>
                  </Grid>

                  {/* {trimmedSignature ? <img src={trimmedSignature} /> : null} */}
                </Grid>
                <Grid
                  item
                  xs={12}
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                >
                  <div
                    style={{
                      backgroundColor: "#6C0D0D",
                      padding: "14px 14px",
                      marginBottom: "100px",
                    }}
                  >
                    <Button
                      style={{
                        fontSize: "20px",
                        color: "white",
                        fontWeight: 600,
                        border: ".5px solid hsla(0,0%,100%,.5)",
                        padding: "14px 40px",
                        backgroundColor: "#6C0D0D",
                      }}
                      variant="primary"
                      type="submit"
                      onClick={() => {
                        firstSubmitCheck();
                        trim();
                      }}
                    >
                      Submit
                    </Button>
                  </div>
                </Grid>
              </Grid>
              {/* </form> */}
            </ValidatorForm>
          </div>
        )}
      </Container>
    </>
  );
};

export default Registration;
