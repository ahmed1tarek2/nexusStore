import { useMutation } from "@tanstack/react-query";
import { AxiosUser } from "./AxiosUser";

const auth = async ({ email, password }) => {
  const response = await AxiosUser.get("/users");
  const user = response.data.find((user) => user.email === email);
  if (!user) {
    throw new Error("User not found");
  }
  if (user.password !== password) {
    throw new Error("Invalid password");
  }
  return user;
};

export const useLogin = () => {
  return useMutation({ mutationFn: auth });
};

export const useRegister = () => {
  return useMutation({
    mutationFn: async (data) => {
      const respons = await AxiosUser.post("/users", data);
      return respons.data;
    },
  });
};
