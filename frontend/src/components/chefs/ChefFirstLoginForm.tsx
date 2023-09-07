import { Box, Button, CardMedia, Dialog, DialogContent, DialogContentText, DialogTitle, Divider, FormControl, InputLabel, MenuItem, Paper, Select, TextField, Typography } from "@mui/material"
import { Controller, useForm } from "react-hook-form"
import { Country, State } from 'country-state-city';
import { useEffect, useState, useRef } from "react";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const ChefFirstLoginForm = () => {
    const specialities = ['sea food', 'fried chicken', 'Mukimo', 'Pilau', 'Fufu']
    const { control, register, handleSubmit, formState: { errors }, watch } = useForm()
    const countries = Country.getAllCountries()
    const [selectedCountry, setSelectedCountry] = useState<string | null>(null); // Initialize with null
    const [selectedStates, setSelectedStates] = useState<State[]>([]);
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
    const [previewImage, setPreviewImage] = useState<string | undefined>(undefined);
    const inputRef = useRef<HTMLInputElement | null>(null);


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

    const handleFileChange = () => {
        if (inputRef.current) {
            const file = inputRef.current.files?.[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = () => {
                    setPreviewImage(reader.result as string);
                };
                reader.readAsDataURL(file);
            }
        }
    };


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
                        <InputLabel id="demo-simple-select-label" required sx={{ color: 'black' }}>Select Country</InputLabel>
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
                        <InputLabel id="demo-simple-select-label" required sx={{ color: 'black' }}>Select State</InputLabel>
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
                        <InputLabel required sx={{ color: 'black' }}>Speciality</InputLabel>
                        <FormControl fullWidth>
                            <Controller
                                name="speciality"
                                control={control}
                                defaultValue=""
                                rules={{ required: 'Please select a business type' }}
                                render={({ field, fieldState }) => (
                                    <Select {...field} error={Boolean(fieldState.error)}>
                                        {specialities.map((type) => (
                                            <MenuItem key={type} value={type}>
                                                {type}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                )}
                            />
                        </FormControl>
                    </Box>

                    <Box sx={{ mt: 2 }}>
                        <InputLabel sx={{ color: 'black' }}>Certificate of Qualification</InputLabel>
                        <Controller
                            name="certificate"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <Paper
                                    elevation={0}
                                    variant='outlined'
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        padding: '20px',
                                    }}
                                >
                                    <label htmlFor="certificate-upload">
                                        <input
                                            id="certificate-upload"
                                            type="file"
                                            style={{ display: 'none' }}
                                            {...field}
                                            onChange={(e) => {
                                                field.onChange(e);
                                                handleFileChange(e);
                                            }}
                                        />
                                        <Box sx={{ textAlign: 'center' }}>
                                            <CloudUploadIcon fontSize="large" color="primary" />
                                            <Typography variant="body1" color="textSecondary" mt={1}>
                                                <span style={{ color: 'blue' }}>Click to upload</span> or drag and drop
                                                <br />
                                                PDF, TXT (Max Size 5MB)
                                            </Typography>
                                        </Box>
                                    </label>
                                </Paper>
                            )}
                        />
                    </Box>


                    <Box sx={{ mt: 2 }}>
                        <InputLabel sx={{ color: 'black' }}>Profile Picture</InputLabel>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            {previewImage && (
                                <CardMedia
                                    component="img"
                                    alt="Preview"
                                    height="200"
                                    image={previewImage}
                                    sx={{
                                        borderRadius: '50%', 
                                        width: '60%'
                                    }}
                                />
                            )}
                        </Box>
                        <Controller
                            name="image"
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    type="file"
                                    fullWidth
                                    inputProps={{ accept: 'image/*' }}
                                    inputRef={(e) => {
                                        field.ref(e); // Connect the Controller with the input element
                                        inputRef.current = e; // Assign the input element to the ref
                                    }}
                                    onChange={handleFileChange}
                                />
                            )}
                        />
                    </Box>


                    <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
                        <Button variant="contained" color="primary" type="submit">
                            Submit
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Dialog >
    )
}

export default ChefFirstLoginForm