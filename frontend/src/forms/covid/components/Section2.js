import React from "react";
import {
  Grid,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";

const Section2 = (props) => {
  return (
    <Grid item xs={12}>
      <Grid container>
        <Grid item xs={12}>
          <p style={{ marginTop: 40, fontStyle: "italic", fontSize: 22 }}>
            Have you travelled outside of Maritime Canada in the last 14 days
            (outside of NB, NS, PEI):
          </p>
        </Grid>
        <Grid item xs={12}>
          <FormControl component="fieldset">
            <RadioGroup
              row
              aria-label="position"
              defaultValue="top"
              name="day14Travel"
              value={props.state.day14Travel}
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
          {props.state.day14Travel < 1 && props.firstSubmit === true ? (
            <p className="error">Please select "yes" or "no".</p>
          ) : (
            ""
          )}
        </Grid>
        <Grid item xs={12}>
          <p style={{ marginTop: 60, fontStyle: "italic", fontSize: 22 }}>
            Have you had close contact with Covid-19:
          </p>
        </Grid>
        <Grid item xs={12}>
          <FormControl component="fieldset">
            <RadioGroup
              row
              aria-label="position"
              defaultValue="top"
              name="closeContact"
              value={props.state.closeContact}
              onChange={props.onInputChange}
            >
              <FormControlLabel
                value="Known case"
                control={<Radio color="primary" />}
                label="Known case"
              />

              <FormControlLabel
                value="Suspected cases"
                control={<Radio color="primary" />}
                label="Suspected case"
              />
              <FormControlLabel
                value="No known cases"
                control={<Radio color="primary" />}
                label="No known COVID-19 contacts"
              />
            </RadioGroup>
          </FormControl>
          {props.state.closeContact < 1 && props.firstSubmit === true ? (
            <p className="error">Please select above.</p>
          ) : (
            ""
          )}
        </Grid>

        <Grid item xs={12}>
          <p style={{ marginTop: 60, fontStyle: "italic", fontSize: 22 }}>
            Do you live within a known cluster as identified on the COVID-19
            Hub:
          </p>
        </Grid>
        <Grid item xs={12}>
          <FormControl component="fieldset">
            <RadioGroup
              row
              aria-label="position"
              defaultValue="top"
              name="clusterHub"
              value={props.state.clusterHub}
              onChange={props.onInputChange}
            >
              <FormControlLabel
                value="Community Cluster"
                control={<Radio color="primary" />}
                label="Community cluster"
              />
              <FormControlLabel
                value="Facility Cluster"
                control={<Radio color="primary" />}
                label="Facility cluster"
              />

              <FormControlLabel
                value="No"
                control={<Radio color="primary" />}
                label="Does not live in a cluster"
              />
            </RadioGroup>
          </FormControl>
          {props.state.clusterHub < 1 && props.firstSubmit === true ? (
            <p className="error">Please select above.</p>
          ) : (
            ""
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Section2;
