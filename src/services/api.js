import { backend } from "@zede-utils/AxiosInstance";

export const getAboutZede = async () => {
  const resp = await backend.get(`/content/aboutZede`);
  return resp.data;
};

export const getPortfolios = async () => {
  const resp = await backend.get(`/content/portfolios`);
  return resp.data;
};

export const getServices = async () => {
  const resp = await backend.get(`/content/services`);
  return resp.data;
};

export const getTeam = async () => {
  const resp = await backend.get(`/content/team`);
  return resp.data;
};

export const getWorkFlow = async () => {
  const resp = await backend.get(`/content/workflow`);
  return resp.data;
};
