import React from "react";
import {
  Grid,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";

import { TextValidator } from "react-material-ui-form-validator";

const Medications = (props) => {
  const fontSize = 19;
  console.log(props.firstSubmit, "INSIDE COMPONDENT");
  return (
    <>
      <Grid item xs={12} sm={12}>
        <h2>MEDICATIONS:</h2>
      </Grid>
      <Grid item xs={12} sm={12} container>
        <Grid>
          <h3>
            Please list all medications that you take along with the dosage.
            Include prescriptions and non-prescription medications, vitamins,
            inhalers, naturopathic or over the counter medications.
          </h3>
        </Grid>

        <TextValidator
          fullWidth
          label="1."
          onChange={props.onInputChange}
          name="medication1"
          value={props.state.medication1}
          validators={["minStringLength:0", "maxStringLength:40"]}
          errorMessages={["This field is required", "Too long"]}
          inputProps={{ style: { fontSize: fontSize } }}
          InputLabelProps={{ style: { fontSize: fontSize } }}
        />

        <TextValidator
          fullWidth
          label="2."
          onChange={props.onInputChange}
          name="medication2"
          value={props.state.medication2}
          validators={["minStringLength:0", "maxStringLength:40"]}
          errorMessages={["This field is required", "Too long"]}
          inputProps={{ style: { fontSize: fontSize } }}
          InputLabelProps={{ style: { fontSize: fontSize } }}
        />
        <TextValidator
          fullWidth
          label="3."
          onChange={props.onInputChange}
          name="medication3"
          value={props.state.medication3}
          validators={["minStringLength:0", "maxStringLength:40"]}
          errorMessages={["This field is required", "Too long"]}
          inputProps={{ style: { fontSize: fontSize } }}
          InputLabelProps={{ style: { fontSize: fontSize } }}
        />
        <TextValidator
          fullWidth
          label="4."
          onChange={props.onInputChange}
          name="medication4"
          value={props.state.medication4}
          validators={["minStringLength:0", "maxStringLength:40"]}
          errorMessages={["This field is required", "Too long"]}
          inputProps={{ style: { fontSize: fontSize } }}
          InputLabelProps={{ style: { fontSize: fontSize } }}
        />
        <TextValidator
          fullWidth
          label="5."
          onChange={props.onInputChange}
          name="medication5"
          value={props.state.medication5}
          validators={["minStringLength:0", "maxStringLength:40"]}
          errorMessages={["This field is required", "Too long"]}
          inputProps={{ style: { fontSize: fontSize } }}
          InputLabelProps={{ style: { fontSize: fontSize } }}
        />
        <TextValidator
          fullWidth
          label="6."
          onChange={props.onInputChange}
          name="medication6"
          value={props.state.medication6}
          validators={["minStringLength:0", "maxStringLength:40"]}
          errorMessages={["This field is required", "Too long"]}
          inputProps={{ style: { fontSize: fontSize } }}
          InputLabelProps={{ style: { fontSize: fontSize } }}
        />
      </Grid>
      <Grid item xs={12} sm={12} container>
        <Grid item xs={12} sm={12} lg={7}>
          <h3>
            Periodically we run specials on Botox and Dermal Filler injections.
            Would you like to be contacted by email regarding these promotions?
          </h3>
        </Grid>

        <Grid xs={12} sm={12} lg={3}>
          <Grid className="yesno">
            <FormControl component="fieldset">
              <RadioGroup
                row
                aria-label="position"
                name="promotions"
                defaultValue="top"
                value={props.state.promotions}
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
          </Grid>
        </Grid>
        {props.state.promotions.length < 1 && props.firstSubmit === true ? (
          <p className="error">Please select "yes" or "no".</p>
        ) : (
          ""
        )}
      </Grid>

      <Grid item xs={12} sm={12} container>
        <Grid xs={12} sm={12} lg={7}>
          <h3>
            Would you like to be contacted by our Clinical Skin Care Therarpist
            regarding assistance with your skin care?
          </h3>
        </Grid>

        <Grid xs={12} sm={12} lg={3}>
          <Grid className="yesno">
            <FormControl component="fieldset">
              <RadioGroup
                row
                aria-label="position"
                name="skinCare"
                defaultValue="top"
                value={props.state.skinCare}
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
          </Grid>
        </Grid>
        {props.state.skinCare.length < 1 && props.firstSubmit === true ? (
          <p className="error">Please select "yes" or "no".</p>
        ) : (
          ""
        )}
      </Grid>
    </>
  );
};

export default Medications;
