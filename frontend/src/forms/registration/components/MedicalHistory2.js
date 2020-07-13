import React from "react";
import {
  Grid,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";

import { TextValidator } from "react-material-ui-form-validator";

const MedicalHistory2 = (props) => {
  const fontSize = 19;
  return (
    <>
      <Grid item xs={12} sm={6}>
        <TextValidator
          fullWidth
          label="What is your height?"
          onChange={props.onInputChange}
          name="height"
          value={props.state.height}
          validators={["minStringLength:2", "maxStringLength:20"]}
          errorMessages={["This field is required", "Too long"]}
          inputProps={{ style: { fontSize: fontSize } }}
          InputLabelProps={{ style: { fontSize: fontSize } }}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextValidator
          fullWidth
          label="What is your current weight?"
          onChange={props.onInputChange}
          name="weight"
          value={props.state.weight}
          validators={["minStringLength:2", "maxStringLength:20"]}
          errorMessages={["This field is required", "Too long"]}
          inputProps={{ style: { fontSize: fontSize } }}
          InputLabelProps={{ style: { fontSize: fontSize } }}
        />
      </Grid>

      <Grid item xs={12} sm={12} container>
        <Grid>
          <h3>Possibility of pregnancy?</h3>
        </Grid>
        <Grid className="yesno">
          <FormControl component="fieldset">
            <RadioGroup
              row
              aria-label="position"
              defaultValue="top"
              name="pregnancy"
              value={props.state.pregnancy}
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
          {props.state.pregnancy.length < 1 && props.firstSubmit === true ? (
            <p className="error">Please select "yes" or "no".</p>
          ) : (
            ""
          )}
        </Grid>
      </Grid>

      <Grid item xs={12} sm={12}>
        <h3>Please list any previous surgeries.</h3>
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextValidator
          fullWidth
          label="1."
          onChange={props.onInputChange}
          name="prevSurg1"
          value={props.state.prevSurg1}
          validators={["minStringLength:0", "maxStringLength:60"]}
          errorMessages={["This field is required", "Too long"]}
          inputProps={{ style: { fontSize: fontSize } }}
          InputLabelProps={{ style: { fontSize: fontSize } }}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextValidator
          fullWidth
          label="2."
          onChange={props.onInputChange}
          name="prevSurg2"
          value={props.state.prevSurg2}
          validators={["minStringLength:0", "maxStringLength:60"]}
          errorMessages={["This field is required", "Too long"]}
          inputProps={{ style: { fontSize: fontSize } }}
          InputLabelProps={{ style: { fontSize: fontSize } }}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextValidator
          fullWidth
          label="3."
          onChange={props.onInputChange}
          name="prevSurg3"
          value={props.state.prevSurg3}
          validators={["minStringLength:0", "maxStringLength:60"]}
          errorMessages={["This field is required", "Too long"]}
          inputProps={{ style: { fontSize: fontSize } }}
          InputLabelProps={{ style: { fontSize: fontSize } }}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextValidator
          fullWidth
          label="4."
          onChange={props.onInputChange}
          name="prevSurg4"
          value={props.state.prevSurg4}
          validators={["minStringLength:0", "maxStringLength:60"]}
          errorMessages={["This field is required", "Too long"]}
          inputProps={{ style: { fontSize: fontSize } }}
          InputLabelProps={{ style: { fontSize: fontSize } }}
        />
      </Grid>
    </>
  );
};

export default MedicalHistory2;
