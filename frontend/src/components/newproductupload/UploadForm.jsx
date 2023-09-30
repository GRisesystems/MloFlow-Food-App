import styled from "@emotion/styled";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import { FieldSet } from "./FieldSet.js";
import { Field } from "./Field.js";
import { NumberInput } from "./NumberInput.js";
import { Label } from "@mui/icons-material";


export const ProductUploadForm = ({ saveData}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();
  const { fields, append, remove } = useFieldArray({
    name: "products",
    control,
  });

  const submitForm = (formData) => {
    saveData(formData);
  };

  return (
    <Container>
      <h1 style={{backgroundColor:'#FFA000', textAlign:'center'}}>Add New Product</h1>
      <form onSubmit={handleSubmit(submitForm)}>
        <FieldSet >
          <Field htmlFor={Label} label="Product Name" error={errors.name}>
            <Input
              {...register("name", { required: "Product name is required" })}
              type="text"
              id="name"
            />
          </Field>
          <Field htmlFor={Label} label="Product Image" error={errors.picture}>
            <Input
              {...register("picture", {
                required: "Product Image is required",
              })}
              type="file"
              id="picture"
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
              rows={10}
            />
          </Field>
          <Field label="Product Price" error={errors.amount} htmlFor="amount">
            <Controller
              name="amount"
              control={control}
              render={({ field: { ...field } }) => (
                <NumberInput {...field} id="amount" />
              )}
              rules={{
                max: {
                  value: 10,
                  message: "Product price in Kenya shillings.",
                },
              }}
            />
          </Field>

          {/*Alternative approach using controlled component*/}
          {/*<Field label="Picture" error={errors.picture}>*/}
          {/*  <Controller*/}
          {/*    control={control}*/}
          {/*    name={"picture"}*/}
          {/*    rules={{ required: "Recipe picture is required" }}*/}
          {/*    render={({ field: { value, onChange, ...field } }) => {*/}
          {/*      return (*/}
          {/*        <Input*/}
          {/*          {...field}*/}
          {/*          value={value?.fileName}*/}
          {/*          onChange={(event) => {*/}
          {/*            onChange(event.target.files[0]);*/}
          {/*          }}*/}
          {/*          type="file"*/}
          {/*          id="picture"*/}
          {/*        />*/}
          {/*      );*/}
          {/*    }}*/}
          {/*  />*/}
          {/*</Field>*/}
 
        </FieldSet>
        <FieldSet label="Select Category">
          {fields.map((field, index) => {
            return (
              <Row key={field.id}>
                <Field htmlFor={Label} label="Product Category">
                  <Input
                    type="text"
                    {...register(`products[${index}].name`)}
                    id={`products[${index}].name`}
                  />
                </Field>
                <Field label="Weight">
                <WeightRangeDropdown>
                <option value="0.5-1">0.5 - 1 kg</option>
                <option value="1-3">1 - 3 kg</option>
                <option value="3-5">3 - 5 kg</option>
              </WeightRangeDropdown>
                </Field>
                  <Field label="Amount">
                  <Input
                    type="text"
                    {...register(`ingredients[${index}].amount`)}
                    defaultValue={field.amount}
                    id={`ingredients[${index}].amount`}
                  />
                </Field>
                <Button
                  type="button"
                  onClick={() => remove(index)}
                  aria-label={`Remove product ${index}`}
                >
                  &#8722;
                </Button>
              </Row>
            );
          })}
          <Button
            type="button"
            onClick={() => append({ name: "", amount: "" })}
          >
            Add Category
          </Button>
        </FieldSet>
        <Field >
          <Button variant="primary" >Save</Button>
        </Field>
      </form>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 700px;
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
  border: 1px solid #d9d9d9;
  border-radius: 6px;
`;

const Button = styled.button`
  font-size: 14px;
  cursor: pointer;
  padding: 0.6em 1.2em;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  margin-right: auto;
  background-color: ${({ variant }) =>
    variant === "primary" ? "#FFA000" : "white"};
  color: ${({ variant }) => (variant === "primary" ? "white" : "#FFA000")};
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  & > * {
    margin-right: 20px;
  }

  button {
    margin: 25px 0 0 8px;
  }
`;
const WeightRangeDropdown = styled.select`
  margin-top: 6px;
  padding: 5px;
  color: #FFA000;
  margin-bottom: 0px;
  border: solid #000;
  border-radius: 6px;
`;