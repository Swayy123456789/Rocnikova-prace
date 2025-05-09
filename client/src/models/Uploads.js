export const createUpload = async (formData) => {
  const req = await fetch(`http://localhost:3000/products`, {
    method: "POST",
    body: formData,
  });
  const data = await req.json();
  return {
    status: req.status,
    payload: data.payload,
    msg: data.msg,
  };
};


export const createUpdate = async (id, formData) => {
  const req = await fetch(`http://localhost:3000/products/${id}`, {
    method: "PUT",
    body: formData,
  });
  const data = await req.json();
  return {
    status: req.status,
    payload: data.payload,
    msg: data.msg,
  };
};
