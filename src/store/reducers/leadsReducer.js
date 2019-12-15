import { fetchLead } from "../api/api";
import { store } from "../index";
const leadsReducer = (leads = [], action) => {
  if (action.type === "FETCH_LEAD") {
    fetchLead(store);
  }

  if (action.type === "UPDATE_LEAD") {
    let lead = {
      converted: false,
      lead: action.payload
    };
    leads = [...leads, lead];
  }
  if (action.type === "TURN_CONVERTED") {
    return leads.map((lead, index) => {
      if (lead.lead.info.seed === action.payload) {
        return {
          ...lead,
          converted: !lead.converted
        };
      }
      return lead;
    });
  }
  return leads;
};

export default leadsReducer;
