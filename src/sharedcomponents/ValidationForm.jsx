
export const ValidationForm = (email, password, name) => {
    const isEmailvalid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);
    const isNameValid = /^[a-zA-Z]+$/.test(name);
    if (!isEmailvalid) return "Please enter a valid email address.";
    if (!isPasswordValid) return "Password is invalid.";
    if(!isNameValid) return "Please Enter the Name"

    return null
}
