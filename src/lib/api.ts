import axios from "axios";

const API_URL = "https://api.truehospitals.com/leads";

export const getLeads = async () => (await axios.get(API_URL)).data.leads;
export const createLead = async (lead: any) =>
  (await axios.post(API_URL, lead)).data.lead;
export const updateLead = async (id: string, lead: any) =>
  (await axios.put(`${API_URL}/${id}`, lead)).data.lead;
export const deleteLead = async (id: string) =>
  (await axios.delete(`${API_URL}/${id}`)).data;
