import React, { useState } from "react";
import { Grid, Container, Button } from "@material-ui/core";
import { ValidatorForm } from "react-material-ui-form-validator";
import axios from "axios";
import State from "./state.js";
import Risk from "./components/Risk";
import Paragraph from "./components/Paragrapgh";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import SignatureCanvas from "react-signature-canvas";
import { makeStyles } from "@material-ui/core/styles";
import "./styles.css";

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

const Covid = () => {
  const [state, setState] = useState(State);
  const [done, setDone] = useState(false);
  const [firstSubmit, setFirstSubmit] = useState(false);
  const classes = useStyles();
  const [trimmedSignature, setTrimmedSignature] = useState({});
  const [trimmedSignature2, setTrimmedSignature2] = useState({});
  const [result, setResult] = useState(null);

  let sigPad = {};

  const clear = () => {
    sigPad.clear();
    setTrimmedSignature({});
  };

  const trim = () => {
    setTrimmedSignature(sigPad.getTrimmedCanvas().toDataURL("image/png"));
  };

  const onInputChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
    console.log("name: ", name, "value: ", value);
  };

  const onCheck = (e) => {
    const { name } = e.target;
    setState((prevState) => ({ ...prevState, [name]: !prevState[name] }));
  };

  const firstSubmitCheck = (e) => {
    setFirstSubmit(true);
  };

  const sendEmail = (event) => {
    event.preventDefault();

    if (
      state.name.length > 2 &&
      state.name.length < 40 &&
      state.dob.length === 10 &&
      state.day14Travel !== "" &&
      state.closeContact !== "" &&
      state.custerHub !== "" &&
      state.covidRisk !== "" &&
      state.tested !== ""
    ) {
      setDone(true);
      axios
        .post("/covid", { ...state })
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

  return (
    <Container>
      {done ? (
        <p>Thank you</p>
      ) : (
        <div className={classes.root}>
          <Grid item xs={12}>
            <h1 className="registration title">COVID-19 Risk Assessment</h1>
          </Grid>
          <ValidatorForm onSubmit={sendEmail}>
            <Grid container spacing={6}>
              <Grid item xs={12}>
                {result && (
                  <p className={`${result.success ? "success" : "error"}`}>
                    {result.message}
                  </p>
                )}
              </Grid>
              <Risk onInputChange={onInputChange} state={state} />
              <Paragraph />
              <Section1
                onInputChange={onInputChange}
                onCheck={onCheck}
                state={state}
              />
              <Section2
                onInputChange={onInputChange}
                state={state}
                firstSubmit={firstSubmit}
              />
              <Section3
                onInputChange={onInputChange}
                state={state}
                firstSubmit={firstSubmit}
              />

              <Grid item xs={12}>
                <h3>
                  Add your signature in the box below. Please use your mouse, or
                  finger if you have a touch screen.
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
          </ValidatorForm>
        </div>
      )}
    </Container>
  );
};

export default Covid;
