import * as yup from "yup";

import { yupValidationErrors, langID } from "./yupValidationErrors.js";

export const validUserSchema = yup.object().shape({
    name: yup
            .string()
            .min(2, yupValidationErrors[langID].nameTooShort)
            .max(50, yupValidationErrors[langID].nameTooLong).
            required(yupValidationErrors[langID].nameMissing),
    username: yup
            .string()
            .min(3, yupValidationErrors[langID].usernameTooShort)
            .max(50, yupValidationErrors[langID].usernameTooLong)
            .required(yupValidationErrors[langID].usernameMissing),
    email: yup
            .string()
            .email(yupValidationErrors[langID].emailInvalid)
            .min(3, yupValidationErrors[langID].emailTooShort)
            .max(255, yupValidationErrors[langID].emailTooLong)
            .required(yupValidationErrors[langID].emailMissing),
    password: yup
            .string()
            .min(6, yupValidationErrors[langID].passwordTooShort)
            .max(255, yupValidationErrors[langID].passwordTooLong)
            .required(yupValidationErrors[langID].passwordMissing)
});
