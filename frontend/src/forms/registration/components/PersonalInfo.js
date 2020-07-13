import React from "react";
import { Grid } from "@material-ui/core";
import { TextValidator } from "react-material-ui-form-validator";
import NewDate from "../../../utils/NewDate";
const PersonalInfo = (props) => {
  const fontSize = 19;
  return (
    <>
      <Grid item xs={12} sm={12}>
        <h1>Personal Info</h1>
      </Grid>
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
          label="Name"
          onChange={props.onInputChange}
          name="name"
          value={props.state.name}
          validators={["minStringLength:2", "maxStringLength:40"]}
          errorMessages={["This field is required", "Name is not valid"]}
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
      <Grid item xs={12} sm={6}>
        <TextValidator
          fullWidth
          label="Age"
          onChange={props.onInputChange}
          name="age"
          value={props.state.age}
          validators={["isNumber", "minStringLength:2", "maxStringLength:2"]}
          errorMessages={[
            "Must be a number.",
            "Age is not valid",
            "Age is not valid",
          ]}
          inputProps={{ style: { fontSize: fontSize } }}
          InputLabelProps={{ style: { fontSize: fontSize } }}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextValidator
          fullWidth
          label="Provincial Health #"
          onChange={props.onInputChange}
          name="healthcard"
          value={props.state.healthcard}
          validators={["minStringLength:8", "maxStringLength:12"]}
          errorMessages={["Number is not valid", "Number is not valid"]}
          inputProps={{ style: { fontSize: fontSize } }}
          InputLabelProps={{ style: { fontSize: fontSize } }}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextValidator
          fullWidth
          label="Effective Date (YYYY/MM/DD)"
          placeholder="(YYYY/MM/DD)"
          onChange={props.onInputChange}
          name="effectivedate"
          value={props.state.effectivedate}
          validators={["minStringLength:10", "maxStringLength:10"]}
          errorMessages={["Date is not valid", "Date is not valid"]}
          inputProps={{ style: { fontSize: fontSize } }}
          InputLabelProps={{ style: { fontSize: fontSize } }}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextValidator
          fullWidth
          label="Expiry Date (YYYY/MM/DD)"
          placeholder="(YYYY/MM/DD)"
          onChange={props.onInputChange}
          name="expirydate"
          value={props.state.expirydate}
          validators={["minStringLength:10", "maxStringLength:10"]}
          errorMessages={["Date is not valid", "Date is not valid"]}
          inputProps={{ style: { fontSize: fontSize } }}
          InputLabelProps={{ style: { fontSize: fontSize } }}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextValidator
          fullWidth
          label="Street Address"
          onChange={props.onInputChange}
          name="streetaddress"
          value={props.state.streetaddress}
          validators={["minStringLength:5", "maxStringLength:50"]}
          errorMessages={["Enter your address", "Too long"]}
          inputProps={{ style: { fontSize: fontSize } }}
          InputLabelProps={{ style: { fontSize: fontSize } }}
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <TextValidator
          fullWidth
          label="City"
          onChange={props.onInputChange}
          name="city"
          value={props.state.city}
          validators={["minStringLength:4", "maxStringLength:30"]}
          errorMessages={["Enter your city", "Too long"]}
          inputProps={{ style: { fontSize: fontSize } }}
          InputLabelProps={{ style: { fontSize: fontSize } }}
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <TextValidator
          fullWidth
          label="Province"
          onChange={props.onInputChange}
          name="province"
          value={props.state.province}
          validators={["minStringLength:2", "maxStringLength:40"]}
          errorMessages={["Enter your province", "Too long"]}
          inputProps={{ style: { fontSize: fontSize } }}
          InputLabelProps={{ style: { fontSize: fontSize } }}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextValidator
          fullWidth
          label="Postal Code"
          onChange={props.onInputChange}
          name="postal"
          value={props.state.postal}
          validators={["minStringLength:5", "maxStringLength:9"]}
          errorMessages={["Enter your postal code", "Too long"]}
          inputProps={{ style: { fontSize: fontSize } }}
          InputLabelProps={{ style: { fontSize: fontSize } }}
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <TextValidator
          fullWidth
          label="Home Phone (include area code)"
          onChange={props.onInputChange}
          name="homephone"
          value={props.state.homephone}
          validators={["minStringLength:0", "maxStringLength:16"]}
          errorMessages={[
            "Enter your home phone number with area code",
            "Too long",
          ]}
          inputProps={{ style: { fontSize: fontSize } }}
          InputLabelProps={{ style: { fontSize: fontSize } }}
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <TextValidator
          fullWidth
          label="Work Phone (include area code)"
          onChange={props.onInputChange}
          name="workphone"
          value={props.state.workphone}
          validators={["minStringLength:0", "maxStringLength:16"]}
          errorMessages={[
            "Enter your work phone number with area code",
            "Too long",
          ]}
          inputProps={{ style: { fontSize: fontSize } }}
          InputLabelProps={{ style: { fontSize: fontSize } }}
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <TextValidator
          fullWidth
          label="Cell Phone (include area code)"
          onChange={props.onInputChange}
          name="cellphone"
          value={props.state.cellphone}
          validators={["minStringLength:0", "maxStringLength:16"]}
          errorMessages={["Enter a valid phone number", "Too long"]}
          inputProps={{ style: { fontSize: fontSize } }}
          InputLabelProps={{ style: { fontSize: fontSize } }}
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <TextValidator
          fullWidth
          label="Email"
          onChange={props.onInputChange}
          name="email"
          value={props.state.email}
          validators={[
            "required",
            "isEmail",
            "minStringLength:9",
            "maxStringLength:40",
          ]}
          errorMessages={[
            "This field is required",
            "email is not valid",
            "email is not valid",
            "email is too long",
          ]}
          inputProps={{ style: { fontSize: fontSize } }}
          InputLabelProps={{ style: { fontSize: fontSize } }}
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <TextValidator
          fullWidth
          label="Occupation"
          onChange={props.onInputChange}
          name="occupation"
          value={props.state.occupation}
          validators={["minStringLength:5", "maxStringLength:40"]}
          errorMessages={["Enter your occupation", "Too long"]}
          inputProps={{ style: { fontSize: fontSize } }}
          InputLabelProps={{ style: { fontSize: fontSize } }}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextValidator
          fullWidth
          label="Family Physician"
          onChange={props.onInputChange}
          name="famphysician"
          value={props.state.famphysician}
          validators={["minStringLength:0", "maxStringLength:40"]}
          errorMessages={["Enter your Family Physician", "Too long"]}
          inputProps={{ style: { fontSize: fontSize } }}
          InputLabelProps={{ style: { fontSize: fontSize } }}
        />
      </Grid>
      <Grid item xs={12} sm={12}>
        <TextValidator
          fullWidth
          label="How would you like to be contacted?"
          onChange={props.onInputChange}
          name="contacted"
          value={props.state.contacted}
          validators={["minStringLength:0", "maxStringLength:40"]}
          errorMessages={["How would you like to be contacted?", "Too long"]}
          inputProps={{ style: { fontSize: fontSize } }}
          InputLabelProps={{ style: { fontSize: fontSize } }}
        />
      </Grid>
      <Grid item xs={12} sm={12}>
        <TextValidator
          fullWidth
          label="How did you hear of us?"
          onChange={props.onInputChange}
          name="hearofus"
          value={props.state.hearofus}
          validators={["minStringLength:0", "maxStringLength:40"]}
          errorMessages={["How did you hear of us?", "Too long"]}
          inputProps={{ style: { fontSize: fontSize } }}
          InputLabelProps={{ style: { fontSize: fontSize } }}
        />
      </Grid>
    </>
  );
};

export default PersonalInfo;
