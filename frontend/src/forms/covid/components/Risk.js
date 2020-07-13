import React from "react";
import { Grid } from "@material-ui/core";
import { TextValidator } from "react-material-ui-form-validator";
import NewDate from "../../../utils/NewDate";
const Risk = (props) => {
  const fontSize = 19;
  return (
    <>
      <Grid item xs={12} sm={6}>
        <TextValidator
          disabled
          fullWidth
          label="Date"
          onChange={props.onInputChange}
          placeholder={NewDate()}
          name="date"
          value={NewDate()}
          validators={["minStringLength:2", "maxStringLength:40"]}
          errorMessages={["This field is required", "Date is not valid"]}
          inputProps={{ style: { fontSize: fontSize } }}
          InputLabelProps={{ style: { fontSize: fontSize } }}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextValidator
          fullWidth
          label="Patient Full Name"
          onChange={props.onInputChange}
          name="name"
          value={props.state.name}
          validators={["minStringLength:4", "maxStringLength:40"]}
          errorMessages={["This field is required", "Date is not valid"]}
          inputProps={{ style: { fontSize: fontSize } }}
          InputLabelProps={{ style: { fontSize: fontSize } }}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextValidator
          fullWidth
          label="Date of Birth (YYYY/MM/DD)"
          onChange={props.onInputChange}
          name="dob"
          placeholder="YYYY/MM/DD"
          value={props.state.dob}
          validators={["minStringLength:10", "maxStringLength:10"]}
          errorMessages={[
            "This field is required",
            "Date of birth is not valid",
          ]}
          inputProps={{ style: { fontSize: fontSize } }}
          InputLabelProps={{ style: { fontSize: fontSize } }}
        />
      </Grid>
    </>
  );
};

export default Risk;
