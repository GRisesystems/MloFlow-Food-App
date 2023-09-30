import Box from '@mui/material/Box'
import FormControl from "@mui/material/FormControl"
import TextField from "@mui/material/TextField"
import Select from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"
import Button from "@mui/material/Button"
import InputLabel from "@mui/material/InputLabel"
import { useForm, Controller } from "react-hook-form";


const AddProductForm = ({ onClose }) => {
    const { control, register, handleSubmit, formState: { errors }, watch } = useForm({});
    const onSubmit = async (data) => {
        console.log(data)
    }
    return (
        <Box
            sx={{ p: 2 }}
            component="form"
            noValidate autoComplete="off"
            onSubmit={handleSubmit(onSubmit)}
        >
            <InputLabel required sx={{ color: 'black' }}>Select Category</InputLabel>
            <FormControl sx={{ width: '100%' }}>
                <Controller
                    control={control}
                    name="category"
                    defaultValue=""
                    render={({ field }) => (
                        <Select
                            size='small'
                            {...field}
                        >
                            <MenuItem value="vendor">Fish</MenuItem>
                            <MenuItem value="customer">Chicken</MenuItem>
                            <MenuItem value="chef">Beef</MenuItem>
                        </Select>
                    )}
                />
            </FormControl>
            <Box sx={{ mt: 1 }}>
                <InputLabel required sx={{ mt: 2, color: 'black' }}>Product name</InputLabel>
                <TextField
                    size='small'
                    type="text"
                    fullWidth
                    {...register("name", {
                        required: true,
                    })}
                    error={Boolean(errors.name)}
                    helperText={errors.name ? "Product name is required." : ""}
                />
            </Box>
            <Box sx={{ mt: 2 }}>
                <InputLabel required sx={{ color: 'black' }}>Description</InputLabel>
                <TextField
                    id="standard-multiline-static"
                    size='small'
                    multiline
                    rows={2}
                    variant="outlined"
                    fullWidth
                    // maxRows={3}
                    {...register("description", {
                        required: true,
                    })}
                    error={Boolean(errors.description)}
                    helperText={errors.description ?
                        'Description is required.' : ''}

                />
            </Box>
            <Box sx={{ mt: 1 }}>
                <InputLabel required sx={{ mt: 2, color: 'black' }}>Price</InputLabel>
                <TextField
                    size='small'
                    type="number"
                    fullWidth
                    {...register("price", {
                        required: true,
                        min: 1
                    })}
                    error={Boolean(errors.price)}
                    helperText={errors.price ? "Invalid price value" : ""}
                />
            </Box>
            <Box sx={{ mt: 1 }}>
                <InputLabel required sx={{ mt: 2, color: 'black' }}>Stock</InputLabel>
                <TextField
                    size='small'
                    type="number"
                    fullWidth
                    {...register("stock", {
                        required: true,
                        min: 1
                    })}
                    error={Boolean(errors.stock)}
                    helperText={errors.stock ? "Invalid Stock value" : ""}
                />
            </Box>
            <Box sx={{ mt: 1 }}>
                <InputLabel required sx={{ mt: 2, color: 'black' }}>Weight</InputLabel>
                <TextField
                    size='small'
                    type="number"
                    fullWidth
                    {...register("weight", {
                        required: true,
                        min: 0
                    })}
                    error={Boolean(errors.weight)}
                    helperText={errors.weight ? "Invalid Weight value" : ""}
                />
            </Box>
            <Box sx={{ mt: 1 }}>
                <InputLabel required sx={{ mt: 2, color: 'black' }}>Images</InputLabel>
                <TextField
                    size='small'
                    type="file"
                    fullWidth
                    {...register("images", {
                        required: true,
                        
                    })}
                    error={Boolean(errors.images)}
                    helperText={errors.images ? "Product images required" : ""}
                />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2, mb: 1 }}>
                <Button variant="outlined" color='error' onClick={() => onClose()} sx={{ textTransform: 'none' }}>Cancel</Button>
                <Button variant="contained" type="submit" sx={{ textTransform: 'none' }}>Add product</Button>
            </Box>
        </Box>
    )
}

export default AddProductForm