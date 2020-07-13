import React from "react";
import { Grid } from "@material-ui/core";

const Paragraph = () => {
  return (
    <Grid item xs={12} sm={12}>
      <p>
        The following risk assessment must be completed for every patient who
        recieves face to face services or is admitted.
      </p>
      <p>
        The COVID-19 Risk Assessment should be placed in front of the patient's
        chart when completed or placed in a location and communicated to team
        members who are caring for the patient. The Risk Assessment is used to
        facilitate patient, staff and physician safety.
      </p>
      <h3>
        It is the responsibility of the Most Responsible Provider to ensure that
        the assessment is completed and signed at the time of healthcare
        interaction or admission
      </h3>
      <h2>
        PATIENT RISK COVID-19 IDENTIFICATION: (Completed by any healthcare
        worker)
      </h2>
      <h3 style={{ marginBottom: 0 }}>
        If the patient meets any of the boxes below, have the patients
        wash/sanitize their hands and put on a surgical mask.
      </h3>
    </Grid>
  );
};
export default Paragraph;
