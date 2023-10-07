const status = (request, response) => {
  response.status(200).json({ oi: "testinhoooo" });
};

export default status;
