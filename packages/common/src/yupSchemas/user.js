import * as yup from "yup";

import { yupValidationErrors } from "./yupValidationErrors.js";

let langID = 0;

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

export const validDiveJourneySchema = yup.object().shape({
    title: yup
            .string()
            .min(3, yupValidationErrors[langID].titleTooShort)
            .max(25, yupValidationErrors[langID].titleTooLong)
            .required(yupValidationErrors[langID].titleMissing),
    description: yup
            .string()
            .min(3, yupValidationErrors[langID].descriptionTooShort)
            .max(255, yupValidationErrors[langID].descriptionTooLong),
    diveLocation: yup
            .string()
            .min(3, yupValidationErrors[langID].diveLocationTooShort)
            .max(25, yupValidationErrors[langID].diveLocationTooLong),
    diveDepth: yup.number(),
    diveTime: yup.number(),
});