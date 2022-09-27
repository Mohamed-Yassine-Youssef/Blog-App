export const LoginStart = (userCredentials) => ({
  type: "login_start",
});
export const LoginSuccess = (user) => ({
  type: "login_success",
  payload: user,
});
export const LoginFailure = () => ({
  type: "login_failure",
});
export const Logout = () => ({
  type: "logout",
});
export const UpdateStart = (userCredentials) => ({
  type: "UPDATE_START",
});

export const UpdateSuccess = (user) => ({
  type: "UPDATE_SUCCESS",
  payload: user,
});

export const UpdateFailure = () => ({
  type: "UPDATE_FAILURE",
});
