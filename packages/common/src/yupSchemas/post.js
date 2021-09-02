import * as yup from "yup";

import { yupValidationErrors, langID } from "./yupValidationErrors.js";

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