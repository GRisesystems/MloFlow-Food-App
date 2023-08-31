import {  useState } from "react";
import { useForm } from 'react-hook-form'
import { Box, Button, Dialog,  DialogActions,  DialogContent,  DialogContentText,    DialogTitle } from '@mui/material';
import { Field } from './Field';
import { Label } from "@mui/icons-material";
import styled from "@emotion/styled";
import axios from "axios";

const AddProductsForm: any = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [category, setCategory] = useState('')
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState(null)
    const [choose_weight, setChooseWeight] = useState('')
    const [price, setPrice] = useState('')
    const [stock, setStock] = useState('')


    const {  register,  formState: { errors }, watch } = useForm()
    
    // const history = useHistory()

      const AddProductInfo = async () => {
        const formField = new FormData()

        formField.append('category', category)
        formField.append('name', name)
        formField.append('description', description)
        formField.append('choose_weight', choose_weight)
        formField.append('price', price)
        formField.append('stock', stock)
        if (image !== null) {
          formField.append('image', image)
        }
      

      await axios({
        method: 'post',
        url: 'http://localhost:8000/products/',
        data: formField

      }).then((response) => {
        console.log(response.data);
      })
    }

  return (
    <Box>
      <Button variant="contained" sx={{backgroundColor:'#FBB31D',  m:3, color:'#0C0B0B'}} onClick={handleOpen}>Add Products</Button>
      <Dialog
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <DialogTitle  sx={{backgroundColor:'#FBB31D',   textAlign:'center'}}>Add New Product</DialogTitle>
        {/* #FBB31D, #0C0B0B */}
        <DialogContentText variant="h5" sx={{backgroundColor:'#0C0B0B', color:'gray', padding:'8px'}}>
            Please enter your products details accurately in the form provided below.
          </DialogContentText>
        <DialogContent sx={{ mt: 2 }} >
            <Box component="form" noValidate autoComplete="off" onSubmit={AddProductInfo}
            >
                      <Field label="Select Category"  >
          <WeightRangeDropdown name="category"
      value={category}
      onChange={(e) => setCategory(e.target.value)}>
        <option value="farm">Farm</option>
        <option value="fish">Fish</option>
        <option value="poulty">Poultry</option>
      </WeightRangeDropdown>
      </Field>
  <Field htmlFor={Label} label="Product Name" error={errors.name}>
    <Input
      {...register("name", { required: "Product name is required" })}
      type="text"
      id="name"
      name="name"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  </Field>
  <Field htmlFor={Label} label="Product Image" error={errors.picture}>
    <Input
      {...register("image", {
        required: "Product Image is required",
      })} 
      type="file"
      id="image"
      name="image"
      src={image}
      onChange={(e) => setImage(e.target.files[0])}
    />
  </Field>
  <Field htmlFor={Label} label="Product Description" error={errors.description}>
    <TextArea
      {...register("description", {
        maxLength: {
          value: 100,
          message: "Description cannot be longer than 100 characters",
        },
      })}
      id="description"
      rows={5}
      placeholder="Maximum Product Description is 200 characters"
      name="description"
      value={description}
      onChange={(e) => setDescription(e.target.value)}
    />
  </Field>

    <Row >
        <Field label="Select Weight" >
          <WeightRangeDropdown  name="weight"
      value={choose_weight}
      onChange={(e) => setChooseWeight(e.target.value)}>
        <option value="1">1 kg</option>
        <option value="5">5 kg</option>
        <option value="10">10 kg</option>
      </WeightRangeDropdown>
      </Field>
      <Field label="Product Price">
          <Input
            type="number"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </Field>
      </Row>
      <Field label="Quantity of Stock Available">
          <Input
            type="number"
            name="stock"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />
        </Field>
  <DialogActions>
  <Button variant="outlined" sx={{outlineColor:'#FBB31D'}} onClick={handleClose}>Cancel</Button>
  <Button variant="contained" type="submit" sx={{backgroundColor:'#FBB31D'}} onClick={handleClose} >Add </Button>
</DialogActions>
</Box>
        </DialogContent>
    </Dialog>
  </Box>
  );
};
export default AddProductsForm;


const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  & > * {
    margin-right: 10px;
  }

  button {
    margin: 25px 0 0 8px;
  }
`;

const Input = styled.input`
  padding: 10px;
  width: 100%;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
`;

const TextArea = styled.textarea`
  padding: 4px 11px;
  width: 100%;
  border-radius: 6px;
`;

const WeightRangeDropdown = styled.select`
  margin-top: 6px;
  padding: 8px;
  color: #0C0B0B;
  max-width: 100%;
  margin-bottom: 0px;
  border-radius: 6px;
  font-weight: 600;
  font-size: 1.1rem;
`;