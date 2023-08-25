import { useEffect, useState } from "react";
import { Controller, useForm } from 'react-hook-form'
import { Box, Button, DialogContent, DialogContentText, DialogTitle, Divider, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import { Country, State, City } from 'country-state-city';

interface VendorFirstLoginFormProps {
    is_first_time_login: boolean; // Specify the type of the prop
}

const VendorFirstLoginForm = ({ is_first_time_login }: VendorFirstLoginFormProps) => {
    const countries = Country.getAllCountries()
    const [selectedCountry, setSelectedCountry] = useState<string | null>(null); // Initialize with null
    const [selectedStates, setSelectedStates] = useState<State[]>([]);
    const [fullWidth, setFullWidth] = useState(true);
    const [open, setOpen] = useState(is_first_time_login);
    const [maxWidth, setMaxWidth] = useState<DialogProps['maxWidth']>('sm');
    const { control, register, handleSubmit, formState: { errors } } = useForm()



    useEffect(() => {
        // Fetch and update the list of states whenever the selected country changes
        if (selectedCountry) {
            const selectedCountryData = countries.find(country => country.name === selectedCountry);
            if (selectedCountryData) {
                const countryStates = State.getStatesOfCountry(selectedCountryData.isoCode);
                setSelectedStates(countryStates);
            }
        }
    }, [selectedCountry, countries]); // Also include `countries` as a dependency


    const onSubmit = (data: any) => {
        // Set the selected country in the form data
        data.country = selectedCountry;
      
        // Now you can log the form data
        console.log(data);
      };



    return (
        <Dialog
            fullWidth={fullWidth}
            maxWidth={maxWidth}
            open={open}
        >
            <DialogTitle>Vendors Information</DialogTitle>
            <Divider />
            <DialogContent>
                <DialogContentText>
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
