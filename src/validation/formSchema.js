import * as yup from 'yup';

const formSchema = yup.object().shape({
    size: yup
    .string()
    .oneOf([
        "Small",
        "Medium", 
        "Large", 
        "Xtra Large", 
        "DOUBLE EXTRA LARGE", 
        "heart Disease"
    ], "Please pick a size."),
    
    sauce: yup
    .string()
    .oneOf([
        "Original Red", 
        "Garlic Ranch", 
        "BBQ Sauce", 
        "Spinach Alfredo"], "You must pick a sauce, saucy guy."),
    substitute: yup.boolean(),
    quantity: yup
    .string()
    .oneOf(["1", "2", "3", "4", "5" ,"6", "7"], "Must select a quanity"),
    special: yup
    .string()
    .trim(),
    toppings: yup 
    .string()
    .trim()
})

export default formSchema;