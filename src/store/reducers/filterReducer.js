const filterReducer = (filter = "all", action) => {
  if (action.type === "ALL") {
    filter = "all";
  }

  if (action.type === "MALE") {
    filter = "male";
  }
  if (action.type === "FEMALE") {
    filter = "female";
  }
  if (action.type === "CONVERTED") {
    filter = "converted";
  }
  return filter;
};

export default filterReducer;
