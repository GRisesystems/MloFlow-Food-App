import { useEffect, useState } from "react";
import { Controller, useForm } from 'react-hook-form'
import { Box, Button,  DialogContent, DialogContentText, DialogTitle, Divider,  InputLabel, MenuItem, Select, TextField } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import { Country, State } from 'country-state-city';
import { useAuth } from "../../utils/AuthContext";
import { BASE_URL } from "../signin/constants";
import axios from "axios";
import styled from "@emotion/styled";
import { Field } from "../newproductupload/Field";


const WeightRangeDropdown = styled.select`
  margin-top: 5px;
  padding: 8px;
  color: #0C0B0B;
  max-width: 100%;
  margin-bottom: 0px;
  border-radius: 6px;
  font-weight: 600;
  font-size: 1.1rem;
`;

const VendorFirstLoginForm = ({ is_profile_complete }) => {
    const countries = Country.getAllCountries()
    const [selectedCountry, setSelectedCountry] = useState(null); // Initialize with null
    const [selectedStates, setSelectedStates] = useState([]);
    const [category, setCategory] = useState('');
    const [selectedOptions, setSelectedOptions] = useState([]);

    const [open, setOpen] = useState(!is_profile_complete);
    const [maxWidth] = useState('sm');
    const { control,  handleSubmit, formState: { errors } } = useForm()


    // get access token from Auth Context
    const { accessToken, updateProfileData } = useAuth();


     useEffect(() => {
        // Fetch and update the list of states whenever the selected country changes
        if (selectedCountry) {
            const selectedCountryData = countries.find(country => country.name === selectedCountry);
            if (selectedCountryData) {
                const countryStates = State.getStatesOfCountry(selectedCountryData.isoCode);
                setSelectedStates(countryStates);
            }
        }
    }, [selectedCountry, countries]); // include `countries` as a dependency


    const onSubmit = async (data) => {

        data.country = selectedCountry;
        data.selectedOptions = selectedOptions;

        const config = {
            headers: {
                Authorization: `Bearer ${accessToken}`, // Include the accessToken
            },
        };

        try {
            const response = await axios.post(`${BASE_URL}/api/v1/vendors/`, data, config);
            if (response.status == 201) {
                const updatedData = await updateProfileData()
                console.log(updatedData)

            }

        } catch (error) {
            console.error('API Error:', error);

        }
    };



    return (
        <Dialog
            fullWidth
            maxWidth={maxWidth}
            open={open}
        >
            <DialogTitle sx={{ color: 'black' }}>Vendors Information</DialogTitle>
            <Divider />
            <DialogContent>
                <DialogContentText sx={{ color: 'black' }}>
                    Kindly fill the information inorder to proceed
                </DialogContentText>

                <Box sx={{ mt: 2 }} >
                    <Box component="form" noValidate autoComplete="off"
                        onSubmit={
                            handleSubmit(onSubmit)
                        }
                    >
                        <InputLabel id="demo-simple-select-label">Select Country</InputLabel>
                        <Controller
                            name="country"
                            control={control}
                            rules={{ required: false }}
                            render={({ field }) => (
                                <>

                                    <Select
                                        {...field}
                                        autoFocus
                                        fullWidth
                                        inputProps={{
                                            name: 'country',
                                            id: 'country',
                                        }}
                                        value={selectedCountry || ''}
                                        onChange={event => setSelectedCountry(event.target.value)}
                                    >
                                        {countries &&
                                            countries.map((country) => (
                                                <MenuItem key={country.isoCode} value={country.name}>
                                                    {country.name}
                                                </MenuItem>
                                            ))}
                                    </Select>
                                    {errors.country && <span>This field is required</span>}
                                </>
                            )}
                        />
                        <Box sx={{mt:2}}>
                            <InputLabel id="demo-simple-select-label">Select State</InputLabel>
                            <Controller
                                name="state"
                                control={control}
                                rules={{ required: true }}
                                render={({ field }) => (
                                    <Select
                                        {...field}
                                        fullWidth
                                        inputProps={{
                                            name: 'state',
                                            id: 'state',
                                        }}
                                    >
                                        {selectedStates && selectedStates.map(state => (
                                            <MenuItem key={state.stateCode} value={state.name}>
                                                {state.name}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                )}
                            />
                        </Box>


                        <Box sx={{ mt: 2 }}>
                            <Controller
                                name="city"
                                control={control}
                                defaultValue=""
                                rules={{ required: true }}
                                render={({ field }) => (
                                    <TextField {...field} label="City" variant="outlined" fullWidth error={!!errors.city} />
                                )}
                            />
                            {errors.city && <span>This field is required</span>}
                        </Box>
                        <Field label="Select Category"  >
          <WeightRangeDropdown name="category"
      value={category}
      onChange={(e) => setCategory(e.target.value)}>
        <option value="Fresh Produce">Fresh Produce</option>
        <option value="Fish">Fish</option>
        <option value="Poultry">Poultry</option>
      </WeightRangeDropdown>
      </Field>

                        <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
                            <Button variant="contained" color="primary" type="submit">
                                Submit
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </DialogContent>

        </Dialog >
    );
};

export default VendorFirstLoginForm;


