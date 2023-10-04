import {
    Grid,
    TextField,
    FormHelperText,
    RadioGroup,
    FormControlLabel,
    Radio,
    Typography
  } from "@mui/material";
import React from "react";
  
  const AccountDetails = (props: { formik: any; }) => {
    const { formik } = props;
    const [value, setValue] = React.useState('female');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };
    return (
      <Grid
        container
        spacing={2}
      >
        <Typography variant="h3" >
            Do you own Car?
        </Typography>
        <Grid
          item
          xs={12}
        >
         <RadioGroup
        aria-labelledby="car Used"
        name="carUsed"
        onChange={formik.handleChange}
        value={formik.values.carUsed}
      >
        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="no" control={<Radio />} label="No" />
      </RadioGroup>
        </Grid>
        {
            formik.values.carUsed == 'yes' && (
                <>
                  <Grid
          item
          xs={12}
        >
             <Typography variant="h6" >
        Type of car?
        </Typography>
         <RadioGroup
        aria-labelledby="car_type"
        name="car_type"
        onChange={formik.handleChange}
        value={formik.values.car_type}
      >
        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="no" control={<Radio />} label="No" />
      </RadioGroup>
        </Grid>
        <Grid
          item
          xs={12}
        >
             <Typography variant="h3" >
            Car frequency?
        </Typography>
         <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="carUsed"
        onChange={formik.handleChange}
        value={formik.values.carUsed}
      >
        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="no" control={<Radio />} label="No" />
      </RadioGroup>
        </Grid>
                
                </>
            )
        }
        {formik.errors.submit && (
          <Grid
            item
            xs={12}
          >
            <FormHelperText error>
              {formik.errors.submit}
            </FormHelperText>
          </Grid>
        )}
      </Grid>
    )
  }
  
  export default AccountDetails