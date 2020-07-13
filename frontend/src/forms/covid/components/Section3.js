import React from "react";
import {
  Grid,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import { TextValidator } from "react-material-ui-form-validator";

const Section2 = (props) => {
  const fontSize = 19;
  return (
    <Grid item xs={12}>
      <Grid container>
        <Grid item xs={12}>
          <h3>
            Most Responsible Provider must verify the above (or complete if not
            one by another team member) and complete the boxes below.
          </h3>
          <h3>PATIENT RISK COVID-19 ASSESSMENT:</h3>
        </Grid>
        <Grid item xs={12}>
          <FormControl component="fieldset">
            <RadioGroup
              row
              aria-label="position"
              defaultValue="top"
              name="covidRisk"
              value={props.state.covidRisk}
              onChange={props.onInputChange}
            >
              <FormControlLabel
                value="Yes"
                control={<Radio color="primary" />}
                label="IDENTIFIED COVID-19 RISK"
              />

              <FormControlLabel
                value="No"
                control={<Radio color="primary" />}
                label="NO IDENTIFIED OVID-19 RISK"
              />
            </RadioGroup>
          </FormControl>
          {props.state.covidRisk < 1 && props.firstSubmit === true ? (
            <p className="error">Please select above.</p>
          ) : (
            ""
          )}
        </Grid>
        <Grid item xs={12}>
          <h3 style={{ marginTop: 70 }}>COVID-19 SWAB HISTORY:</h3>
          <p style={{ fontStyle: "italic", fontSize: 22 }}>
            Have you been tested for COVID-19:
          </p>
        </Grid>
        <Grid item xs={12} sm={12}>
          <FormControl component="fieldset">
            <RadioGroup
              row
              aria-label="position"
              defaultValue="top"
              name="tested"
              value={props.state.tested}
              onChange={props.onInputChange}
            >
              <FormControlLabel
                value="Not indicated"
                control={<Radio color="primary" />}
                label="Not indicated"
              />

              <FormControlLabel
                value="Done"
                control={<Radio color="primary" />}
                label="Done"
              />
            </RadioGroup>
          </FormControl>
          {props.state.tested < 1 && props.firstSubmit === true ? (
            <p className="error">Please select above.</p>
          ) : (
            ""
          )}
        </Grid>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={12} lg={4}>
            <TextValidator
              fullWidth
              label="Date of Swab"
              onChange={props.onInputChange}
              name="dateOfSwab"
              value={props.state.dateOfSwab}
              inputProps={{ style: { fontSize: fontSize } }}
              InputLabelProps={{ style: { fontSize: fontSize } }}
            />
          </Grid>
          <Grid item xs={12} sm={12} lg={4}>
            <FormControl component="fieldset">
              <RadioGroup
                row
                aria-label="position"
                defaultValue="top"
                name="other"
                value={props.state.other}
                onChange={props.onInputChange}
              >
                <FormControlLabel
                  value="POS"
                  control={<Radio color="primary" />}
                  label="POS"
                />

                <FormControlLabel
                  value="NEG"
                  control={<Radio color="primary" />}
                  label="NEG"
                />
                <FormControlLabel
                  value="Pending"
                  control={<Radio color="primary" />}
                  label="Pending"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Section2;
