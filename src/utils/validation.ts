import { FormikErrors, FormikValues } from "formik";
import { object, string } from "yup";

export const validateDetails = (
  values: FormikValues
): FormikErrors<FormikValues> => {
  const errors: FormikErrors<FormikValues> = {};
  if (!values.username) {
    errors.username = "Username is required";
  } else if (values.username.length < 3) {
    errors.username = "Username too short";
  }
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 4) {
    errors.password = "Password too short";
  }
  return errors;
};

export const ContactValidationSchema = object({
  firstName: string()
    .required("First Name is required")
    .min(4, "Are you sure the value is correct"),
  lastName: string()
    .required("Last name is required")
    .min(4, "Provide a valid name"),
  message: string()
    .required("Message is required")
    .min(10, "Provide a clear message"),
  email: string()
    .required("This is required")
    .email("This doesn't look like a valid email"),
});
