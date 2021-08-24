import * as bcrypt from "bcrypt";

const SALT_FACTOR = 10;
let hashedPassword;

export const hashPass = (password) => {
    // Generate salt
    bcrypt.genSalt(SALT_FACTOR, (err, salt) => {
        // If error, log it
        if (err) {
            console.log(err);
        }

        // Hash password using salt
        bcrypt.hash(password, salt, (err, hash) => {
            // If error, log it
            if (err) {
                console.log(err);
            }

            // Save hashed password
            hashedPassword = hash;
            console.log(hash);
        })
    });

    // Return hashed password
    console.log(hashedPassword);
    return hashedPassword;
}