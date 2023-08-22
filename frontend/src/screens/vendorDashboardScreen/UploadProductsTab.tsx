import styled from "@emotion/styled";
import { ProductUploadForm } from "../../components/newproductupload/UploadForm";



export default function UploadProductTab() {
  const submitForm = (data) => {
    const formData = new FormData();
    formData.append("files", data.picture[0]);
    data = { ...data, picture: data.picture[0].name };
    formData.append("recipe", JSON.stringify(data));

    return fetch("/api/products/create", {
      method: "POST",
      body: formData,
    }).then((response) => {
      if (response.ok) {
        // Handle successful upload
      } else {
        // Handle error
      }
    });
  };

  return (
    <Container>
      <ProductUploadForm saveData={submitForm} />
    </Container>
  );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    margin: auto;
`;