import { EMAIL, NAME } from "./action";

export const email = (data) => {
  return {
    type: EMAIL,
    payLoad: data,
  };
};

export const name = (data) => {
  return {
    type: NAME,
    payLoad: data,
  };
};
