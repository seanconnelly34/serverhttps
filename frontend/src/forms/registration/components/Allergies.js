import React from "react";
import {
  Grid,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";

import { TextValidator } from "react-material-ui-form-validator";

const Allergies = (props) => {
  const fontSize = 19;
  return (
    <>
      <Grid item xs={12} sm={12}>
        <h2>ALLERGIES:</h2>
        <h3>Are you allergic to any of the follwing?</h3>
      </Grid>
      <Grid item xs={12} sm={12} container>
        <Grid item xs={12} sm={12} lg={2}>
          <h3>Medications</h3>
        </Grid>
        <Grid item xs={12} sm={12} lg={10}>
          <Grid className="yesno">
            <FormControl component="fieldset">
              <RadioGroup
                row
                aria-label="position"
                defaultValue="top"
                name="allergicMed"
                value={props.state.allergicMed}
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
                <FormControlLabel
                  value="Unsure"
                  control={<Radio color="primary" />}
                  label="Unsure"
                />
              </RadioGroup>
            </FormControl>
            {props.state.allergicMed.length < 1 &&
            props.firstSubmit === true ? (
              <p className="error">Please select "yes" or "no".</p>
            ) : (
              ""
            )}
          </Grid>
        </Grid>
        <TextValidator
          fullWidth
          label="Which Medications?"
          onChange={props.onInputChange}
          name="whichMed"
          value={props.state.whichMed}
          validators={["minStringLength:0", "maxStringLength:50"]}
          errorMessages={["This field is required", "Too long"]}
          inputProps={{ style: { fontSize: fontSize } }}
          InputLabelProps={{ style: { fontSize: fontSize } }}
        />
      </Grid>

      <Grid item xs={12} sm={12} container>
        <Grid item xs={12} sm={12} lg={2}>
          <h3>Food</h3>
        </Grid>
        <Grid item xs={12} sm={12} lg={10}>
          <Grid className="yesno">
            <FormControl component="fieldset">
              <RadioGroup
                row
                aria-label="position"
                defaultValue="top"
                name="allergicFood"
                value={props.state.allergicFood}
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
                <FormControlLabel
                  value="Unsure"
                  control={<Radio color="primary" />}
                  label="Unsure"
                />
              </RadioGroup>
            </FormControl>
            {props.state.allergicFood.length < 1 &&
            props.firstSubmit === true ? (
              <p className="error">Please select "yes" or "no".</p>
            ) : (
              ""
            )}
          </Grid>
        </Grid>
        <TextValidator
          fullWidth
          label="Which Foods?"
          onChange={props.onInputChange}
          name="whichFood"
          value={props.state.whichFood}
          validators={["minStringLength:0", "maxStringLength:50"]}
          errorMessages={["This field is required", "Too long"]}
          inputProps={{ style: { fontSize: fontSize } }}
          InputLabelProps={{ style: { fontSize: fontSize } }}
        />
      </Grid>

      <Grid item xs={12} sm={12} container>
        <Grid item xs={12} sm={12} lg={2}>
          <h3>Latex</h3>
        </Grid>
        <Grid item xs={12} sm={12} lg={10}>
          <Grid className="yesno">
            <FormControl component="fieldset">
              <RadioGroup
                row
                aria-label="position"
                defaultValue="top"
                name="allergicLatex"
                value={props.state.allergicLatex}
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
                <FormControlLabel
                  value="Unsure"
                  control={<Radio color="primary" />}
                  label="Unsure"
                />
              </RadioGroup>
            </FormControl>
            {props.state.allergicLatex.length < 1 &&
            props.firstSubmit === true ? (
              <p className="error">Please select "yes" or "no".</p>
            ) : (
              ""
            )}
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12} container>
        <Grid item xs={12} sm={12} lg={2}>
          <h3>Iodine</h3>
        </Grid>
        <Grid item xs={12} sm={12} lg={10}>
          <Grid className="yesno">
            <FormControl component="fieldset">
              <RadioGroup
                row
                aria-label="position"
                defaultValue="top"
                name="allergicIodine"
                value={props.state.allergicIodine}
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
                <FormControlLabel
                  value="Unsure"
                  control={<Radio color="primary" />}
                  label="Unsure"
                />
              </RadioGroup>
            </FormControl>
            {props.state.allergicIodine.length < 1 &&
            props.firstSubmit === true ? (
              <p className="error">Please select "yes" or "no".</p>
            ) : (
              ""
            )}
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} sm={12} container>
        <Grid>
          <h3>
            Do you or your relatives have a history of malignant hyperthermia?
          </h3>
        </Grid>
        <Grid className="yesno">
          <FormControl component="fieldset">
            <RadioGroup
              row
              aria-label="position"
              defaultValue="top"
              name="hyperthermia"
              value={props.state.hyperthermia}
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
          {props.state.hyperthermia.length < 1 && props.firstSubmit === true ? (
            <p className="error">Please select "yes" or "no".</p>
          ) : (
            ""
          )}
        </Grid>
      </Grid>

      <Grid item xs={12} sm={12} container>
        <Grid>
          <h3>Have you or your relatives had problems with anesthetic?</h3>
        </Grid>
        <Grid className="yesno">
          <FormControl component="fieldset">
            <RadioGroup
              row
              aria-label="position"
              defaultValue="top"
              name="anesthetic"
              value={props.state.anesthetic}
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
          {props.state.anesthetic.length < 1 && props.firstSubmit === true ? (
            <p className="error">Please select "yes" or "no".</p>
          ) : (
            ""
          )}
        </Grid>

        <TextValidator
          fullWidth
          label="If yes, please describe."
          onChange={props.onInputChange}
          name="anestheticDescribe"
          value={props.state.anestheticDescribe}
          validators={["minStringLength:0", "maxStringLength:50"]}
          errorMessages={["This field is required", "Too long"]}
          inputProps={{ style: { fontSize: fontSize } }}
          InputLabelProps={{ style: { fontSize: fontSize } }}
        />
      </Grid>
    </>
  );
};

export default Allergies;
