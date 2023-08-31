import {  useState, useEffect } from "react";
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from "react-router";
import { Box, Button, Dialog,  DialogActions,  DialogContent,  DialogContentText,    DialogTitle, Paper } from '@mui/material';
import { Field } from './Field';
import { Label } from "@mui/icons-material";
import styled from "@emotion/styled";
import axios from "axios";

const UpdateProductForm: any = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [category, setCategory] = useState('')
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState(null)
    const [weight, setWeight] = useState('')
    const [price, setPrice] = useState('')
    const [stock, setStock] = useState('')


    const {  register,  formState: { errors }, watch } = useForm()
    
    // const hist = useNavigate()
    const {id} = useParams()

      const loadProducts = async () => {    

      const {data} = await axios.get( 'http://localhost:8000/products/${id}');
        console.log(data)
        setCategory(data.category)
        setName(data.name)
        setDescription(data.description)
        setImage(data.image)
        setWeight(data.weight)
        setPrice(data.price)
        setStock(data.stock)
    }
    useEffect(() =>{
      loadProducts()
    },[])


    const UpdateProductInfo = async () => {
      const formField = new FormData()

      formField.append('category', category)
      formField.append('name', name)
      formField.append('description', description)
      formField.append('weight', weight)
      formField.append('price', price)
      formField.append('stock', stock)
      if (image !== null) {
        formField.append('image', image)
      }
    

    await axios({
      method: 'put',
      url: 'http://localhost:8000/products/${id}',
      data: formField

    }).then((response) => {
      console.log(response.data);

    })
  }

  return (
    <Paper>
      <Button variant="contained" sx={{backgroundColor:'#0C0B0B',  m:3, color:'#FBB31D'}} onClick={handleOpen}>Update Product</Button>
      <Dialog
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <DialogTitle  sx={{backgroundColor:'#FBB31D',   textAlign:'center'}}>Update Product</DialogTitle>
        {/* #FBB31D, #0C0B0B */}
        <DialogContentText variant="h5" sx={{backgroundColor:'#0C0B0B', color:'gray', padding:'8px'}}>
            Please edit your product details accurately in the form provided below.
          </DialogContentText>
        <DialogContent sx={{ mt: 2 }} >
            <Box component="form" noValidate autoComplete="off" onSubmit={UpdateProductInfo}
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
      value={weight}
      onChange={(e) => setWeight(e.target.value)}>
        <option value="1">1 kg</option>
        <option value="5">5 kg</option>
        <option value="10">10 kg</option>
      </WeightRangeDropdown>
      </Field>
      <Field label="Product Price">
          <Input
            type="number"
            name="price"
            placeholder="Kenya Shillings"
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
  <DialogActions sx={{fontWeight:600}}>
  <Button  onClick={handleClose} sx={{color:'#FBB31D', marginRight:42, backgroundColor:'#0C0B0B'}}>Cancel</Button>
  <Button variant="contained" type="submit" sx={{backgroundColor:'#FBB31D', color:'#0C0B0B'}} onClick={handleClose} >Update</Button>
</DialogActions>
</Box>
        </DialogContent>
    </Dialog>
  </Paper>
  );
};
export default UpdateProductForm;


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
padding: 11px;
width: 100%;
border: 1px solid #d9d9d9;
border-radius: 6px;
margin: 4px;
`;

const TextArea = styled.textarea`
  padding: 4px 11px;
  width: 100%;
  border-radius: 6px;
`;

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