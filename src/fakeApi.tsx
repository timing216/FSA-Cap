// src/fakeApi.ts

export const fakeLogin = async (
  username: string,
  password: string
): Promise<string> => {
  if (username === "user" && password === "pass") {
    return Promise.resolve("fake-jwt-token");
  }
  return Promise.reject("Invalid username or password");
};

export const fakeRegister = async (): // username: string,
// password: string
Promise<string> => {
  // Simulating usage of username and password
  return Promise.resolve("fake-jwt-token-for-new-user");
};

export const fakeLogout = async (): Promise<void> => {
  return Promise.resolve();
};
