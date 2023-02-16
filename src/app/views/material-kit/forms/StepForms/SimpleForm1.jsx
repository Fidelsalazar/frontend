//import { DatePicker } from "@mui/lab";
//import AdapterDateFns from "@mui/lab/AdapterDateFns";
//import LocalizationProvider from "@mui/lab/LocalizationProvider";
import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Icon,
  Input,
  styled,
} from "@mui/material";
import { Span } from "app/components/Typography";
import { useEffect, useState } from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";


const TextField = styled(TextValidator)(() => ({
  width: "100%",
  marginBottom: "16px",
}));

const SimpleForm = () => {
  const [state, setState] = useState({ date: new Date() });
  const [Image, setImage] = useState();

  useEffect(() => {
    ValidatorForm.addValidationRule("isPasswordMatch", (value) => {
      if (value !== state.password) return false;

      return true;
    });
    return () => ValidatorForm.removeValidationRule("isPasswordMatch");
  }, [state.password]);

  const handleSubmit = (event) => {
    console.log("submitted");
    console.log(event);
  };

  const changeImage = e => {
    setImage(e.target.files[0]);
    console.log(Image);
  }

  const handleChange = (event) => {
    event.persist();
    setState({ ...state, [event.target.name]: event.target.value });
  };

  //const handleDateChange = (date) => setState({ ...state, date });

  const {
    username,
    firstName,
    //mobile,
    password,
    //date,
    email,
    creditCard,
  } = state;

  return (
    <div>
      <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
        <Grid container spacing={6}>
          <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
            <TextField
              type="text"
              name="username"
              id="standard-basic"
              value={username || ""}
              onChange={handleChange}
              errorMessages={["this field is required"]}
              label="Username"
              validators={["required", "minStringLength: 4", "maxStringLength: 9"]}
            />

            <TextField
              type="text"
              name="firstName"
              label="Address"
              onChange={handleChange}
              value={firstName || ""}
              validators={["required"]}
              errorMessages={["This field is required"]}
            />

            <TextField
              type="text"
              name="email"
              label="Quantity in cubic meters"
              value={email || ""}
              onChange={handleChange}
              validators={["required", "isEmail"]}
              errorMessages={["This field is required", "email is not valid"]}
            />

            {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                value={date}
                onChange={handleDateChange}
                renderInput={(props) => (
                  <TextField
                    {...props}
                    label="Date picker"
                    id="mui-pickers-date"
                    sx={{ mb: 2, width: "100%" }}
                  />
                )}
              />
            </LocalizationProvider> */}
            
          </Grid>

          <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
            
            <TextField
              sx={{ mb: 4 }}
              type="number"
              name="creditCard"
              label="Mobile Number"
              onChange={handleChange}
              value={creditCard || ""}
              errorMessages={["This field is required"]}
              validators={["required", "minStringLength:8", "maxStringLength: 8"]}
            /> 
           
            <TextField
              name="password"
              type="email"
              label="Email"
              value={password || ""}
              onChange={handleChange}
              validators={["required"]}
              errorMessages={["this field is required"]}
            />
            {/* 
            <TextField
              type="password"
              name="confirmPassword"
              onChange={handleChange}
              label="Confirm Password"
              value={confirmPassword || ""}
              validators={["required", "isPasswordMatch"]}
              errorMessages={["this field is required", "password didn't match"]}
            />
            */}
            {/* 
            <RadioGroup
              row
              name="gender"
              sx={{ mb: 2 }}
              value={gender || ""}
              onChange={handleChange}
            >
              <FormControlLabel
                value="Male"
                label="Male"
                labelPlacement="end"
                control={<Radio color="secondary" />}
              />

              <FormControlLabel
                value="Female"
                label="Female"
                labelPlacement="end"
                control={<Radio color="secondary" />}
              />

              <FormControlLabel
                value="Others"
                label="Others"
                labelPlacement="end"
                control={<Radio color="secondary" />}
              />
            </RadioGroup> 
            */}

            <Input
              type="file"
              mane="image"
              onChange={changeImage}
              multiple
            />            

            <FormControlLabel
              control={<Checkbox />}
              label="I have read and agree to the terms of service."
            />
          </Grid>
        </Grid>

        <Button color="primary" variant="contained" type="submit">
          <Icon>send</Icon>
          <Span sx={{ pl: 1, textTransform: "capitalize" }}>Submit</Span>
        </Button>
      </ValidatorForm>
    </div>
  );
};

export default SimpleForm;