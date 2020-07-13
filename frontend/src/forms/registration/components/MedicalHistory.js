import React from "react";
import {
  Grid,
  Checkbox,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";

import { TextValidator } from "react-material-ui-form-validator";

const MedicalHistory = (props) => {
  const fontSize = 19;
  return (
    <>
      <Grid item xs={12} sm={12}>
        <h1>Medical History</h1>
        <h2>Have you ever had any of the following?</h2>
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl component="fieldset" fullWidth>
          <Grid container>
            <Grid item xs={5} sm={5} className="checkBoxes">
              <FormControlLabel
                value={props.state.heartattack}
                control={
                  <Checkbox
                    checked={props.state.heartattack}
                    color="primary"
                    onChange={props.onCheck}
                    name="heartattack"
                  />
                }
                label="Heart Attack"
                labelPlacement="end"
              />
            </Grid>
            <Grid item xs={7} sm={7}>
              <TextValidator
                fullWidth
                label="Date"
                onChange={props.onInputChange}
                name="heartattackDate"
                value={props.state.heartattackDate}
                validators={["minStringLength:0", "maxStringLength:20"]}
                errorMessages={["This field is required", "Too long"]}
                inputProps={{ style: { fontSize: fontSize } }}
                InputLabelProps={{ style: { fontSize: fontSize } }}
              />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={5} sm={5} className="checkBoxes">
              <FormControlLabel
                value={props.state.heartdisease}
                control={
                  <Checkbox
                    checked={props.state.heartdisease}
                    color="primary"
                    onChange={props.onCheck}
                    name="heartdisease"
                  />
                }
                label="Heart Disease"
                labelPlacement="end"
              />
            </Grid>
            <Grid item xs={7} sm={7}>
              <TextValidator
                fullWidth
                label="Date"
                onChange={props.onInputChange}
                name="heartdiseaseDate"
                value={props.state.heartdiseaseDate}
                validators={["minStringLength:0", "maxStringLength:20"]}
                errorMessages={["This field is required", "Too long"]}
                inputProps={{ style: { fontSize: fontSize } }}
                InputLabelProps={{ style: { fontSize: fontSize } }}
              />
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={5} sm={5} className="checkBoxes">
              <FormControlLabel
                value={props.state.chestpain}
                control={
                  <Checkbox
                    checked={props.state.chestpain}
                    color="primary"
                    onChange={props.onCheck}
                    name="chestpain"
                  />
                }
                label="Chest Pain"
                labelPlacement="end"
              />
            </Grid>
            <Grid item xs={7} sm={7}>
              <TextValidator
                fullWidth
                label="Date"
                onChange={props.onInputChange}
                name="chestpainDate"
                value={props.state.chestpainDate}
                validators={["minStringLength:0", "maxStringLength:20"]}
                errorMessages={["This field is required", "Too long"]}
                inputProps={{ style: { fontSize: fontSize } }}
                InputLabelProps={{ style: { fontSize: fontSize } }}
              />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={5} sm={5} className="checkBoxes">
              <FormControlLabel
                value={props.state.stroke}
                control={
                  <Checkbox
                    checked={props.state.stroke}
                    color="primary"
                    onChange={props.onCheck}
                    name="stroke"
                  />
                }
                label="Stroke"
                labelPlacement="end"
              />
            </Grid>
            <Grid item xs={7} sm={7}>
              <TextValidator
                fullWidth
                label="Date"
                onChange={props.onInputChange}
                name="strokeDate"
                value={props.state.strokeDate}
                validators={["minStringLength:0", "maxStringLength:20"]}
                errorMessages={["This field is required", "Too long"]}
                inputProps={{ style: { fontSize: fontSize } }}
                InputLabelProps={{ style: { fontSize: fontSize } }}
              />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={5} sm={5} className="checkBoxes">
              <FormControlLabel
                value={props.state.bloodclots}
                control={
                  <Checkbox
                    checked={props.state.bloodclots}
                    color="primary"
                    onChange={props.onCheck}
                    name="bloodclots"
                  />
                }
                label="Blood Clots"
                labelPlacement="end"
              />
            </Grid>
            <Grid item xs={7} sm={7}>
              <TextValidator
                fullWidth
                label="Date"
                onChange={props.onInputChange}
                name="bloodclotsDate"
                value={props.state.bloodclotsDate}
                validators={["minStringLength:0", "maxStringLength:20"]}
                errorMessages={["This field is required", "Too long"]}
                inputProps={{ style: { fontSize: fontSize } }}
                InputLabelProps={{ style: { fontSize: fontSize } }}
              />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={5} sm={5} className="checkBoxes">
              <FormControlLabel
                value={props.state.bleeding}
                control={
                  <Checkbox
                    checked={props.state.bleeding}
                    color="primary"
                    onChange={props.onCheck}
                    name="bleeding"
                  />
                }
                label="Prolonged Bleeding"
                labelPlacement="end"
              />
            </Grid>
            <Grid item xs={7} sm={7}>
              <TextValidator
                fullWidth
                label="Date"
                onChange={props.onInputChange}
                name="bleedingDate"
                value={props.state.bleedingDate}
                validators={["minStringLength:0", "maxStringLength:20"]}
                errorMessages={["This field is required", "Too long"]}
                inputProps={{ style: { fontSize: fontSize } }}
                InputLabelProps={{ style: { fontSize: fontSize } }}
              />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={5} sm={5} className="checkBoxes">
              <FormControlLabel
                value={props.state.bloodpressure}
                control={
                  <Checkbox
                    checked={props.state.bloodpressure}
                    color="primary"
                    onChange={props.onCheck}
                    name="bloodpressure"
                  />
                }
                label="High Blood Pressure"
                labelPlacement="end"
              />
            </Grid>
            <Grid item xs={7} sm={7}>
              <TextValidator
                fullWidth
                label="Date"
                onChange={props.onInputChange}
                name="bloodpressureDate"
                value={props.state.bloodpressureDate}
                validators={["minStringLength:0", "maxStringLength:20"]}
                errorMessages={["This field is required", "Too long"]}
                inputProps={{ style: { fontSize: fontSize } }}
                InputLabelProps={{ style: { fontSize: fontSize } }}
              />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={5} sm={5} className="checkBoxes">
              <FormControlLabel
                value={props.state.kidneydisease}
                control={
                  <Checkbox
                    checked={props.state.kidneydisease}
                    color="primary"
                    onChange={props.onCheck}
                    name="kidneydisease"
                  />
                }
                label="Kideny Disease"
                labelPlacement="end"
              />
            </Grid>
            <Grid item xs={7} sm={7}>
              <TextValidator
                fullWidth
                label="Date"
                onChange={props.onInputChange}
                name="kidneydiseaseDate"
                value={props.state.kidneydiseaseDate}
                validators={["minStringLength:0", "maxStringLength:20"]}
                errorMessages={["This field is required", "Too long"]}
                inputProps={{ style: { fontSize: fontSize } }}
                InputLabelProps={{ style: { fontSize: fontSize } }}
              />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={5} sm={5} className="checkBoxes">
              <FormControlLabel
                value={props.state.openingmouth}
                control={
                  <Checkbox
                    checked={props.state.openingmouth}
                    color="primary"
                    onChange={props.onCheck}
                    name="openingmouth"
                  />
                }
                label="Trouble Opening Mouth"
                labelPlacement="end"
              />
            </Grid>
            <Grid item xs={7} sm={7}>
              <TextValidator
                fullWidth
                label="Date"
                onChange={props.onInputChange}
                name="openingmouthDate"
                value={props.state.openingmouthDate}
                validators={["minStringLength:0", "maxStringLength:20"]}
                errorMessages={["This field is required", "Too long"]}
                inputProps={{ style: { fontSize: fontSize } }}
                InputLabelProps={{ style: { fontSize: fontSize } }}
              />
            </Grid>
          </Grid>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl component="fieldset" fullWidth>
          <Grid container>
            <Grid item xs={5} sm={5} className="checkBoxes">
              <FormControlLabel
                value={props.state.diabetes}
                control={
                  <Checkbox
                    checked={props.state.diabetes}
                    color="primary"
                    onChange={props.onCheck}
                    name="diabetes"
                  />
                }
                label="Diabetes"
                labelPlacement="end"
              />
            </Grid>
            <Grid item xs={7} sm={7}>
              <TextValidator
                fullWidth
                label="Date"
                onChange={props.onInputChange}
                name="diabetesDate"
                value={props.state.diabetesDate}
                validators={["minStringLength:0", "maxStringLength:20"]}
                errorMessages={["This field is required", "Too long"]}
                inputProps={{ style: { fontSize: fontSize } }}
                InputLabelProps={{ style: { fontSize: fontSize } }}
              />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={5} sm={5} className="checkBoxes">
              <FormControlLabel
                value={props.state.arthritis}
                control={
                  <Checkbox
                    checked={props.state.arthritis}
                    color="primary"
                    onChange={props.onCheck}
                    name="arthritis"
                  />
                }
                label="Arthritis"
                labelPlacement="end"
              />
            </Grid>
            <Grid item xs={7} sm={7}>
              <TextValidator
                fullWidth
                label="Date"
                onChange={props.onInputChange}
                name="arthritisDate"
                value={props.state.arthritisDate}
                validators={["minStringLength:0", "maxStringLength:20"]}
                errorMessages={["This field is required", "Too long"]}
                inputProps={{ style: { fontSize: fontSize } }}
                InputLabelProps={{ style: { fontSize: fontSize } }}
              />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={5} sm={5} className="checkBoxes">
              <FormControlLabel
                value={props.state.asthma}
                control={
                  <Checkbox
                    checked={props.state.asthma}
                    color="primary"
                    onChange={props.onCheck}
                    name="asthma"
                  />
                }
                label="Asthma/Bronchitis"
                labelPlacement="end"
              />
            </Grid>
            <Grid item xs={7} sm={7}>
              <TextValidator
                fullWidth
                label="Date"
                onChange={props.onInputChange}
                name="asthmaDate"
                value={props.state.asthmaDate}
                validators={["minStringLength:0", "maxStringLength:20"]}
                errorMessages={["This field is required", "Too long"]}
                inputProps={{ style: { fontSize: fontSize } }}
                InputLabelProps={{ style: { fontSize: fontSize } }}
              />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={5} sm={5} className="checkBoxes">
              <FormControlLabel
                value={props.state.seizures}
                control={
                  <Checkbox
                    checked={props.state.seizures}
                    color="primary"
                    onChange={props.onCheck}
                    name="seizures"
                  />
                }
                label="Seizures"
                labelPlacement="end"
              />
            </Grid>
            <Grid item xs={7} sm={7}>
              <TextValidator
                fullWidth
                label="Date"
                onChange={props.onInputChange}
                name="seizuresDate"
                value={props.state.seizuresDate}
                validators={["minStringLength:0", "maxStringLength:20"]}
                errorMessages={["This field is required", "Too long"]}
                inputProps={{ style: { fontSize: fontSize } }}
                InputLabelProps={{ style: { fontSize: fontSize } }}
              />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={5} sm={5} className="checkBoxes">
              <FormControlLabel
                value={props.state.thyroid}
                control={
                  <Checkbox
                    checked={props.state.thyroid}
                    color="primary"
                    onChange={props.onCheck}
                    name="thyroid"
                  />
                }
                label="Thyroid Disease"
                labelPlacement="end"
              />
            </Grid>
            <Grid item xs={7} sm={7}>
              <TextValidator
                fullWidth
                label="Date"
                onChange={props.onInputChange}
                name="thyroidDate"
                value={props.state.thyroidDate}
                validators={["minStringLength:0", "maxStringLength:20"]}
                errorMessages={["This field is required", "Too long"]}
                inputProps={{ style: { fontSize: fontSize } }}
                InputLabelProps={{ style: { fontSize: fontSize } }}
              />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={5} sm={5} className="checkBoxes">
              <FormControlLabel
                value={props.state.liversisease}
                control={
                  <Checkbox
                    checked={props.state.liversisease}
                    color="primary"
                    onChange={props.onCheck}
                    name="liversisease"
                  />
                }
                label="Liver Disease"
                labelPlacement="end"
              />
            </Grid>

            <Grid item xs={7} sm={7}>
              <TextValidator
                fullWidth
                label="Date"
                onChange={props.onInputChange}
                name="liversiseaseDate"
                value={props.state.liversiseaseDate}
                validators={["minStringLength:0", "maxStringLength:20"]}
                errorMessages={["This field is required", "Too long"]}
                inputProps={{ style: { fontSize: fontSize } }}
                InputLabelProps={{ style: { fontSize: fontSize } }}
              />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={5} sm={5} className="checkBoxes">
              <FormControlLabel
                value={props.state.hiv}
                control={
                  <Checkbox
                    color="primary"
                    checked={props.state.hiv}
                    onChange={props.onCheck}
                    name="hiv"
                  />
                }
                label="HIV/Hepatitis"
                labelPlacement="end"
              />
            </Grid>
            <Grid item xs={7} sm={7}>
              <TextValidator
                fullWidth
                label="Date"
                onChange={props.onInputChange}
                name="hivDate"
                value={props.state.hivDate}
                validators={["minStringLength:0", "maxStringLength:20"]}
                errorMessages={["This field is required", "Too long"]}
                inputProps={{ style: { fontSize: fontSize } }}
                InputLabelProps={{ style: { fontSize: fontSize } }}
              />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={5} sm={5} className="checkBoxes">
              <FormControlLabel
                value={props.state.depression}
                control={
                  <Checkbox
                    checked={props.state.depression}
                    color="primary"
                    onChange={props.onCheck}
                    name="depression"
                  />
                }
                label="Depression"
                labelPlacement="end"
              />
            </Grid>
            <Grid item xs={7} sm={7}>
              <TextValidator
                fullWidth
                label="Date"
                onChange={props.onInputChange}
                name="depressionDate"
                value={props.state.depressionDate}
                validators={["minStringLength:0", "maxStringLength:20"]}
                errorMessages={["This field is required", "Too long"]}
                inputProps={{ style: { fontSize: fontSize } }}
                InputLabelProps={{ style: { fontSize: fontSize } }}
              />
            </Grid>
          </Grid>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={12} container>
        <Grid>
          <h3>Do you have, or have you ever been tested for Sleep Apnea?</h3>
        </Grid>
        <Grid className="yesno">
          <FormControl component="fieldset">
            <RadioGroup
              row
              aria-label="position"
              defaultValue="top"
              name="sleepApnea"
              value={props.state.sleepApnea}
              onChange={props.onInputChange}
            >
              <FormControlLabel
                value="Yes"
                control={<Radio color="primary" />}
                label="Yes"
              />

              <FormControlLabel
                value="No"
                control={<Radio color="primary" />}
                label="No"
              />
            </RadioGroup>
          </FormControl>
          {props.state.sleepApnea.length < 1 && props.firstSubmit === true ? (
            <p className="error">Please select "yes" or "no".</p>
          ) : (
            ""
          )}
        </Grid>
        <TextValidator
          fullWidth
          label="Other (Please List):"
          onChange={props.onInputChange}
          name="sleepApneaOther"
          value={props.state.sleepApneaOther}
          validators={["minStringLength:0", "maxStringLength:40"]}
          errorMessages={["This field is required", "Too long"]}
          inputProps={{ style: { fontSize: fontSize } }}
          InputLabelProps={{ style: { fontSize: fontSize } }}
        />
      </Grid>

      <Grid item xs={12} sm={6} container>
        <Grid>
          <h3>Do you smoke?</h3>
        </Grid>
        <Grid className="yesno">
          <FormControl component="fieldset">
            <RadioGroup
              row
              aria-label="position"
              defaultValue="top"
              name="doSmoke"
              value={props.state.doSmoke}
              onChange={props.onInputChange}
            >
              <FormControlLabel
                value="Yes"
                control={<Radio color="primary" />}
                label="Yes"
              />

              <FormControlLabel
                value="No"
                control={<Radio color="primary" />}
                label="No"
              />
            </RadioGroup>
          </FormControl>
          {props.state.doSmoke.length < 1 && props.firstSubmit === true ? (
            <p className="error">Please select "yes" or "no".</p>
          ) : (
            ""
          )}
        </Grid>
        <TextValidator
          fullWidth
          label="If yes, how many per day?"
          onChange={props.onInputChange}
          name="smokeNumn"
          value={props.state.smokeNumn}
          validators={["minStringLength:0", "maxStringLength:20"]}
          errorMessages={["This field is required", "Too long"]}
          inputProps={{ style: { fontSize: fontSize } }}
          InputLabelProps={{ style: { fontSize: fontSize } }}
        />
      </Grid>

      <Grid item xs={12} sm={6} container>
        <Grid>
          <h3>Did you smoke?</h3>
        </Grid>
        <Grid className="yesno">
          <FormControl component="fieldset">
            <RadioGroup
              row
              aria-label="position"
              defaultValue="top"
              name="didSmoke"
              value={props.state.didSmoke}
              onChange={props.onInputChange}
            >
              <FormControlLabel
                value="Yes"
                control={<Radio color="primary" />}
                label="Yes"
              />

              <FormControlLabel
                value="No"
                control={<Radio color="primary" />}
                label="No"
              />
            </RadioGroup>
          </FormControl>
          {props.state.didSmoke.length < 1 &&
          props.firstSubmit === true &&
          props.state.didSmoke === true ? (
            <p className="error">Please select "yes" or "no".</p>
          ) : (
            ""
          )}
        </Grid>

        <TextValidator
          fullWidth
          label="If you quit, when?"
          onChange={props.onInputChange}
          name="smokeQuit"
          value={props.state.smokeQuit}
          validators={["minStringLength:0", "maxStringLength:20"]}
          errorMessages={["This field is required", "Too long"]}
          inputProps={{ style: { fontSize: fontSize } }}
          InputLabelProps={{ style: { fontSize: fontSize } }}
        />
      </Grid>
    </>
  );
};

export default MedicalHistory;
