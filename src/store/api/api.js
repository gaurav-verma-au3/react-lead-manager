import { url } from "../../config";

const fetchLead = store => {
  fetch(`${url}`)
    .then(data => data.json())
    .then(response => {
      store.dispatch({
        type: "UPDATE_LEAD",
        payload: response
      });
    });
};

export { fetchLead };
