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
      if (errorData.errors && Array.isArray(errorData.errors)) {
        errorData.errors.forEach((error: ApiErrorMessage) => {
          setIsError(true);
          setErrorMessage(error.message);
        });
      }
    } else {
      //Remove this alert when finished
      window.alert("Loged in");
    }
  } catch (error) {
    console.log("Error during API request: ", error);
  }
};
/*
  async function registerUserFetchData(data: RegisterApiFormData) {
    try {
      const response = await fetch(API_REGISTER, {
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
            console.log("Error", error);
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
  }
  */
