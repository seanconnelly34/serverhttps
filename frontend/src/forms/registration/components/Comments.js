import React from "react";
import { Grid } from "@material-ui/core";
import { TextValidator } from "react-material-ui-form-validator";
const Comments = (props) => {
  const fontSize = 19;
  return (
    <>
      <Grid item xs={12} sm={12}>
        <h2>COMMENTS:</h2>
      </Grid>
      <Grid item xs={12} sm={12} container>
        <TextValidator
          fullWidth
          label="Additional comments here.."
          onChange={props.onInputChange}
          name="comments"
          value={props.state.comments}
          validators={["minStringLength:0", "maxStringLength:500"]}
          errorMessages={["This field is required", "Too long"]}
          inputProps={{ style: { fontSize: fontSize } }}
          InputLabelProps={{ style: { fontSize: fontSize } }}
          multiline
          rows={4}
          rowsMax={10}
        />
      </Grid>
    </>
  );
};

export default Comments;
