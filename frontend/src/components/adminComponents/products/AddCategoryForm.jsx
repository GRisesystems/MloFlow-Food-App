import Box from '@mui/material/Box'
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import InputLabel from "@mui/material/InputLabel"
import { useForm, Controller } from "react-hook-form";


const AddCategoryForm = ({ onClose }) => {
    const { register, handleSubmit, formState: { errors } } = useForm({});
    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <Box
            sx={{ p: 2 }}
            component="form"
            noValidate autoComplete="off"
            onSubmit={handleSubmit(onSubmit)}
        >
            <Box>
                <InputLabel>Category name</InputLabel>
                <TextField
                    fullWidth
                    id="outlined-error"
                    {...register('category', { required: true })}
                    error={Boolean(errors.category)}
                    helperText={errors.category ?
                        'Category is required.' : ''}
                />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2, mb: 1 }}>
                <Button variant="outlined" onClick={() => onClose()} sx={{ textTransform: 'none' }}>Cancel</Button>
                <Button variant="contained" type="submit" sx={{ textTransform: 'none' }}>Create pin</Button>
            </Box>
        </Box>
    )
}

export default AddCategoryForm