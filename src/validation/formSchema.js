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
    Pepperoni: yup.boolean(),
    Canadian_Bacon: yup.boolean(),
    Grilled_Chicken: yup.boolean(),
    Green_Peppers: yup.boolean(),
    Black_Olive: yup.boolean(),
    Artichoke_Hearts: yup.boolean(),
    Pineapple: yup.boolean(),
    Sausage: yup.boolean(),
    Spicy_Italian_Sausage: yup.boolean(),
    Onion: yup.boolean(),
    Diced_Tomatoes: yup.boolean(),
    Roasted_Garlic: yup.boolean(),
    Three_Cheese: yup.boolean(),
    Extra_Cheese: yup.boolean(),
    name: yup 
    .string()
    .trim()
    .required("name must be at least 2 characters")
    .min(3, "name must be at least 2 characters"),
    role: yup.boolean(),
    
})

export default formSchema;