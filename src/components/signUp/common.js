

export const successSignUp = ({
  signUpDetails,
  signUpDetailsSetter,
  signInDetailsSetter,
  currentUserSetter,
}) => {
  signInDetailsSetter({
    password: signUpDetails.password,
    email: signUpDetails.email,
  });
  currentUserSetter((value) => !value);
  signUpDetailsSetter({
    userName: "",
    password: "",
    email: "",
    
  });
};
