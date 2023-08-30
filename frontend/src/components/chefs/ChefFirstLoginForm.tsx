import { Box, Dialog, DialogContent, DialogContentText, DialogTitle, Divider, InputLabel, MenuItem, Select } from "@mui/material"
import { Controller, useForm } from "react-hook-form"
import { Country, State, City } from 'country-state-city';
import { useEffect, useState } from "react";

const ChefFirstLoginForm = () => {
    const { control, register, handleSubmit, formState: { errors }, watch } = useForm()
    const countries = Country.getAllCountries()
    const [selectedCountry, setSelectedCountry] = useState<string | null>(null); // Initialize with null
    const [selectedStates, setSelectedStates] = useState<State[]>([]);
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

    useEffect(() => {
        // Fetch and update the list of states whenever the selected country changes
        if (selectedCountry) {
            const selectedCountryData = countries.find(country => country.name === selectedCountry);
            if (selectedCountryData) {
                const countryStates = State.getStatesOfCountry(selectedCountryData.isoCode);
                setSelectedStates(countryStates);
            }
        }
    }, [selectedCountry, countries]);

    const onSubmit = async (data: any) => {
        console.log(data)
    }
    return (
        <Dialog
            open={true}
            fullWidth={true}
        >
            <DialogTitle sx={{ color: 'black' }}>Chefs Profile Information</DialogTitle>
            <Divider />

            <Box>
                <Box
                    component="form" noValidate autoComplete="off"
                    onSubmit={
                        handleSubmit(onSubmit)
                    }
                    sx={{ m: 2 }}
                >
                    <Box>
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
                    </Box>
                    <Box sx={{ mt: 2 }}>
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
                </Box>
            </Box>
        </Dialog>
    )
}

export default ChefFirstLoginForm