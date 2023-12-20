import {
  RegisterApiFormData,
  ApiErrorMessage,
  LoginApiFormData,
} from "../types";
export const registerUserFetchData = async (
  url: string,
  data: RegisterApiFormData,
  setIsError: React.Dispatch<React.SetStateAction<boolean>>,
  setErrorMessage: React.Dispatch<React.SetStateAction<string | undefined>>,
  setSuccessMessage: React.Dispatch<React.SetStateAction<string | undefined>>,
) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      if (errorData.errors && Array.isArray(errorData.errors)) {
        errorData.errors.forEach((error: ApiErrorMessage) => {
          setIsError(true);
          setErrorMessage(error.message);
        });
      }
    } else {
      setSuccessMessage("User registered successfully");
    }
  } catch (error) {
    console.log("Error during API request: ", error);
  }
};

export const loginUserFetchData = async (
  url: string,
  data: LoginApiFormData,
  setIsError: React.Dispatch<React.SetStateAction<boolean>>,
  setErrorMessage: React.Dispatch<React.SetStateAction<string | undefined>>,
) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.log("Error: ", errorData);
      if (errorData.errors && Array.isArray(errorData.errors)) {
        errorData.errors.forEach((error: ApiErrorMessage) => {
          setIsError(true);
          setErrorMessage(error.message);
        });
      }
    } else {
      console.log("Success");
    }
  } catch (error) {
    console.log("Error during API request: ", error);
  }
};
