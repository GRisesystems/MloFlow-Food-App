import React, { useState } from 'react';
import {
    Box,
    Button,
    CardMedia,
    Dialog,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Divider,
    FormControl,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    TextField,
    Typography,
} from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { Country, State } from 'country-state-city';
import { useEffect, useRef } from 'react';
import { useAuth } from "../../utils/AuthContext";
import { BASE_URL } from "../signin/constants";
import FileUpload from './FileUpload'; // Adjust the path as needed
import axios from 'axios';
import CertificationInput from './CertificationInput'


const ChefFirstLoginForm = () => {
    const specialities = ['sea food', 'fried chicken', 'Mukimo', 'Pilau', 'Fufu'];
    const { accessToken, updateProfileData } = useAuth();
    const {
        control,
        register,
        handleSubmit,
        formState: { errors },
        watch,
        setValue,
    } = useForm();
    const allcountries = Country.getAllCountries();
    const [countries, setCountries] = useState(allcountries);
    const [states, setStates] = useState([]);
    const [selectedCountryName, setSelectedCountryName] = useState('');
    const [selectedCountry, setSelectedCountry] = useState<string | null>(null); // Initialize with null
    const [selectedStates, setSelectedStates] = useState<State[]>([]);
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
    const [previewImage, setPreviewImage] = useState<string | undefined>(undefined);
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [showFileUpload, setShowFileUpload] = useState(false);
    const [selectedImage, setSelectedImage] = useState<File | null>(null);

    const [additionalFileData, setAdditionalFileData] = useState([]);

    useEffect(() => {
        // Fetch and update the list of states whenever the selected country changes
        if (selectedCountry) {
            const selectedCountryData = countries.find((country) => country.name === selectedCountry);
            if (selectedCountryData) {
                const countryStates = State.getStatesOfCountry(selectedCountryData.isoCode);
                setSelectedStates(countryStates);
            }
        }
    }, [selectedCountry, countries]);

    const handleCountryChange = (event) => {
        const selectedCountryName = event.target.value; // Get selected country name
        const selectedCountry = countries.find(country => country.name === selectedCountryName);

        if (selectedCountry) {
            setValue('country', selectedCountryName); // Update the form value
            const countryStates = State.getStatesOfCountry(selectedCountry.isoCode);
            setStates(countryStates);
        }
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setPreviewImage(reader.result as string);
            };
            reader.readAsDataURL(file);

            // Set the selected image file in the state
            setSelectedImage(file);
        }
    };


    const toggleFileUpload = () => {
        setShowFileUpload(!showFileUpload);
    };



    const onSubmit = async (data) => {
        const formData = new FormData();

        formData.append('country', data.country);
        formData.append('state', data.state);
        formData.append('speciality', data.speciality);
        formData.append('profile_picture', selectedImage);

        // Iterate through additionalFileData and append each certification as a separate field
        additionalFileData.forEach((certification, index) => {
            // Append the file to formData with a unique field name
            formData.append(`certifications[${index}][file]`, certification.file);

            // Append the description as a separate field
            formData.append(`certifications[${index}][description]`, certification.description);
        });

        const config = {
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'multipart/form-data',
            },
        };

        try {
            const response = await axios.post(`${BASE_URL}/chef/chefs/test`, formData, config);
            console.log(response);
            if (response.status === 201 || response.status === 200) {
                const updatedData = await updateProfileData();
                console.log(updatedData);
            }
        } catch (error) {
            console.error('API Error:', error);
        }
    };
    





    return (
        <Dialog open={true} fullWidth={true}>
            <DialogTitle sx={{ color: 'black' }}>Chefs Profile Information</DialogTitle>
            <Divider />

            <Box>
                <Box
                    component="form"
                    noValidate
                    autoComplete="off"
                    onSubmit={handleSubmit(onSubmit)}
                    sx={{ m: 2 }}
                >
                    <Box sx={{ mt: 2 }}>
                        <InputLabel required sx={{ color: 'black' }}>Country</InputLabel>
                        <FormControl fullWidth>
                            <Select {...register('country')} defaultValue='' onChange={handleCountryChange}>
                                {countries.map((country) => (
                                    <MenuItem key={country.isoCode} value={country.name}>
                                        {country.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Box>
                    <Box sx={{ mt: 2 }}>
                        <InputLabel required sx={{ color: 'black' }}>State</InputLabel>
                        <FormControl fullWidth>
                            <Select defaultValue='' {...register('state')}>
                                <MenuItem value=''>Select a state</MenuItem>
                                {states.map((state) => (
                                    <MenuItem key={state.isoCode} value={state.name}> {/* Convert to string */}
                                        {state.name}
                                    </MenuItem>

                                ))}
                            </Select>
                        </FormControl>
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
                                        width: '60%',
                                    }}
                                />
                            )}
                        </Box>
                        <Controller
                            name="profile_picture"
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

                    <Box sx={{ mt: 2, border: 1, p: 2, borderColor: 'grey.500' }}>
                        <InputLabel sx={{ color: 'black' }}>Upload certificates</InputLabel>
                        {showFileUpload && (
                            <Box sx={{ mt: 2 }}>
                                <InputLabel sx={{ color: 'black' }}>Additional Files</InputLabel>
                                <FileUpload onFileDataChange={setAdditionalFileData} additionalFileData={additionalFileData} />
                            </Box>
                        )}

                        <Button
                            variant="contained"
                            color="primary"
                            onClick={toggleFileUpload}
                            sx={{ mt: 2 }}
                        >
                            {showFileUpload ? 'Hide File Upload' : 'Show File Upload'}
                        </Button>
                    </Box>

                    <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
                        <Button variant="contained" color="primary" type="submit">
                            Submit
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Dialog>
    );
};

export default ChefFirstLoginForm;
