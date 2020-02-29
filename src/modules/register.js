import axios from "axios";

const register = async (email, password, password_confirmation) => {
  try {
    const response = await axios.post("/auth/", {
      email: email,
      password: password,
      password_confirmation: password_confirmation
    });
    // await storeAuthCredentials(response);
    return { authenticated: true };
  } catch (error) {
    return { authenticated: false, message: error.response.data.errors[0] };
  }
};

// const storeAuthCredentials = ({ headers }) => {
//   const credentials = {
//     uid: headers["uid"],
//     client: headers["client"],
//     access_token: headers["access-token"],
//     expiry: headers["expiry"],
//     token_type: "Bearer"
//   };
//   sessionStorage.setItem("credentials", JSON.stringify(credentials));
// };

export { register }