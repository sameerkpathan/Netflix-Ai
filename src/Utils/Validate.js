export const chechVlidateData = (email, password) => {
  const isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(
    email
  );

  const isPasswordValid =
    /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password);

 

  if (!isEmailValid) {
    return "Email is not valid ";
  } else if (!isPasswordValid) {
    return "Password is not Valid";
  }  else {
    return null;
  }
};

// export const nameValidation = (name)=>{
//     const isNamevalid = /(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/.test(name);

//      if (!isNamevalid) {
//         return "Name is not correct";
//       } else {
//         return null;
//       }
// }
