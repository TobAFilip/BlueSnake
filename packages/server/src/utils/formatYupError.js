export const formatYupError = (err) => {
    const errors = [];
    err.inner.forEach(e => {
        errors.push(e.message);
        console.log(e.message);
    });

    return errors;
};