import { backend } from "@vc-utils/axios";

export const getAboutZede = async () => {
  const resp = await backend.get(`/accounts/${uid}`);
  return resp.data;
};

export const getPortfolios = async () => {
  const resp = await backend.get(`/accounts/${uid}`);
  return resp.data;
};

export const getServices = async () => {
  const resp = await backend.get(`/accounts/${uid}`);
  return resp.data;
};

export const getTeams = async () => {
  const resp = await backend.get(`/accounts/${uid}`);
  return resp.data;
};

export const getWorkFlow = async () => {
  const resp = await backend.get(`/accounts/${uid}`);
  return resp.data;
};
