const validation = (user) => {
    const validate = {
        isValid: false,
        errors: [],
    }
    if (!(user.firstName && /^[A-Za-z]+$/.test(user.firstName.trim()))) {
        validate.errors.push({
            name: 'firstName',
            message: '*special characters not allowed'
        })
    }
    if (!(user.lastName && /^[A-Za-z]+$/.test(user.lastName.trim()))) {
        validate.errors.push({
            name: 'lastName',
            message: '*special characters not allowed'
        })
    }

    if (!(user.phone && /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/.test(user.phone.trim()))) {
        validate.errors.push({
            name: 'phone',
            message: '*enter correct phone'
        })
    }
    if (!(user.email && /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(user.email.trim()))) {
        validate.errors.push({
            name: 'email',
            message: '*enter correct email'
        })
    }
    if(user.gender && user.gender === null){
        validate.errors.push({
            name: 'gender',
            message: '*select gender'
        })
    }
    if (!(user.password && /[a-zA-Z]+[0-9]+[A-Za-z]?/.test(user.password.trim()))) {
        validate.errors.push({
            name: 'password',
            message: '*password should be alphanumeric'
        })
    }
    if (!(user.confirmPassword && user.confirmPassword === user.password )) {
        validate.errors.push({
            name: 'confirmPassword',
            message: "*didn't matched"
        })
    }

    const today = new Date();
    const userDob = new Date(user.dob)
    if (user.dob && (userDob.getFullYear() > today.getFullYear())) {
        validate.errors.push({
            name: 'dob',
            message: '*enter dob'
        })
    }

    if (validate.errors.length === 0) {
        validate.isValid = true
    }
    return validate;
};

export default validation;