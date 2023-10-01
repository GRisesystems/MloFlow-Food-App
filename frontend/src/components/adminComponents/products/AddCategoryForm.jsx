import Box from '@mui/material/Box'
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import InputLabel from "@mui/material/InputLabel"
import { useForm } from "react-hook-form";
import axios from 'axios'
import { BASE_URL } from '../../signin/constants';

// category/


const AddCategoryForm = ({ onClose }) => {
    const { register, handleSubmit, formState: { errors } } = useForm({});
    const onSubmit = async (data) => {
        try {
            const response = await axios.post(`${BASE_URL}/category/`, data)
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <Box
            sx={{ p: 2 }}
            component="form"
            noValidate autoComplete="off"
            onSubmit={handleSubmit(onSubmit)}
        >
            <Box>
                <InputLabel required sx={{ color: 'black' }}>Category name</InputLabel>
                <TextField
                    fullWidth
                    id="outlined-error"
                    size='small'
                    {...register('category', { required: true })}
                    error={Boolean(errors.category)}
                    helperText={errors.category ?
                        'Category is required.' : ''}
                />
                <InputLabel required sx={{ mt: 2, color: 'black' }}>Description</InputLabel>
                <TextField
                    id="standard-multiline-static"
                    multiline
                    rows={2}
                    size='small'
                    variant="outlined"
                    fullWidth
                    maxRows={3}
                    {...register("description", {
                        required: true,
                    })}
                    error={Boolean(errors.description)}
                    helperText={errors.description ?
                        'Description is required.' : ''}

                />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2, mb: 1 }}>
                <Button variant="outlined" color='error' onClick={() => onClose()} sx={{ textTransform: 'none' }}>Cancel</Button>
                <Button color='success' variant="contained" type="submit" sx={{ textTransform: 'none' }}>Add category</Button>
            </Box>
        </Box>
    )
}

export default AddCategoryForm