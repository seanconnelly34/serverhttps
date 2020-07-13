import React from "react";
import { Grid, Checkbox, FormControlLabel } from "@material-ui/core";

const Section1 = (props) => {
  return (
    <Grid item xs={12}>
      <Grid container>
        <p style={{ marginBottom: 40, fontStyle: "italic", fontSize: 22 }}>
          Do you currently have two of the following symptoms:
        </p>
        <Grid item xs={12} sm={12} className="checkBoxes">
          <FormControlLabel
            value={props.state.cough}
            control={
              <Checkbox
                checked={props.state.cough}
                color="primary"
                onChange={props.onCheck}
                name="cough"
              />
            }
            label="New or worsening cough"
            labelPlacement="end"
          />
        </Grid>
        <Grid item xs={12} sm={12} className="checkBoxes">
          <FormControlLabel
            value={props.state.fever}
            control={
              <Checkbox
                checked={props.state.fever}
                color="primary"
                onChange={props.onCheck}
                name="fever"
              />
            }
            label="Fever greater than 38 C (i.e. chills, sweats)"
            labelPlacement="end"
          />
        </Grid>
        <Grid item xs={12} sm={12} className="checkBoxes">
          <FormControlLabel
            value={props.state.throat}
            control={
              <Checkbox
                checked={props.state.throat}
                color="primary"
                onChange={props.onCheck}
                name="throat"
              />
            }
            label="Sore or hoarse throat"
            labelPlacement="end"
          />
        </Grid>
        <Grid item xs={12} sm={12} className="checkBoxes">
          <FormControlLabel
            value={props.state.headache}
            control={
              <Checkbox
                checked={props.state.headache}
                color="primary"
                onChange={props.onCheck}
                name="headache"
              />
            }
            label="Headache"
            labelPlacement="end"
          />
        </Grid>
        <Grid item xs={12} sm={12} className="checkBoxes">
          <FormControlLabel
            value={props.state.nose}
            control={
              <Checkbox
                checked={props.state.nose}
                color="primary"
                onChange={props.onCheck}
                name="nose"
              />
            }
            label="Nasal congestion/runny nose"
            labelPlacement="end"
          />
        </Grid>
        <Grid item xs={12} sm={12} className="checkBoxes">
          <FormControlLabel
            value={props.state.sneeze}
            control={
              <Checkbox
                checked={props.state.sneeze}
                color="primary"
                onChange={props.onCheck}
                name="sneeze"
              />
            }
            label="Sneezing"
            labelPlacement="end"
          />
        </Grid>
        <Grid item xs={12} sm={12} className="checkBoxes">
          <FormControlLabel
            value={props.state.smellTaste}
            control={
              <Checkbox
                checked={props.state.smellTaste}
                color="primary"
                onChange={props.onCheck}
                name="smellTaste"
              />
            }
            label="Loss of sense of smell or taste"
            labelPlacement="end"
          />
        </Grid>
        <Grid item xs={12} sm={12} className="checkBoxes">
          <FormControlLabel
            value={props.state.breath}
            control={
              <Checkbox
                checked={props.state.breath}
                color="primary"
                onChange={props.onCheck}
                name="breath"
              />
            }
            label="New or worsening shortness of breath"
            labelPlacement="end"
          />
        </Grid>
        <Grid item xs={12} sm={12} className="checkBoxes">
          <FormControlLabel
            value={props.state.aches}
            control={
              <Checkbox
                checked={props.state.aches}
                color="primary"
                onChange={props.onCheck}
                name="aches"
              />
            }
            label="Muscle aches"
            labelPlacement="end"
          />
        </Grid>
        <Grid item xs={12} sm={12} className="checkBoxes">
          <FormControlLabel
            value={props.state.fatigue}
            control={
              <Checkbox
                checked={props.state.fatigue}
                color="primary"
                onChange={props.onCheck}
                name="fatigue"
              />
            }
            label="Unusual fatigue"
            labelPlacement="end"
          />
        </Grid>
        <Grid item xs={12} sm={12} className="checkBoxes">
          <FormControlLabel
            value={props.state.lesions}
            control={
              <Checkbox
                checked={props.state.lesions}
                color="primary"
                onChange={props.onCheck}
                name="lesions"
              />
            }
            label="Red, purple, bluish lesions on the feet, toes or fingers without clear cause"
            labelPlacement="end"
          />
        </Grid>
        <Grid item xs={12} sm={12} className="checkBoxes">
          <FormControlLabel
            value={props.state.diarrhea}
            control={
              <Checkbox
                checked={props.state.diarrhea}
                color="primary"
                onChange={props.onCheck}
                name="diarrhea"
              />
            }
            label="Diarrhea"
            labelPlacement="end"
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Section1;
