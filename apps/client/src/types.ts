import { email, z } from "zod";

export type ProductType = {
    id: string | number;
    name: string;
    shortDescription: string;
    description: string;
    price: number;
    sizes: string[];
    colors: string[];
    images: Record<string, string>;
}

export type ProductsTypes = ProductType[]

export type CartItemsType = ProductType & {
    quantity: number;
    selectedSize: string;
    selectedColor: string;
}

export type CartItemsTypes = CartItemsType[]

// zod schema
export const shippingFormSchema = z.object({
    name: z.string().trim().nonempty("Name is Required!"),
    email: z.email().trim().nonempty("Email is Required!"),
    phone: z
        .string()
        .min(7, "Phone number must be between 7 to 10 digits")
        .max(10, "Phone number must be between 7 to 10 digits")
        .regex(/^\d+$/, "Phone number must only contain number"),
    address: z.string().trim().nonempty("Address is Required!"),
    city: z.string().trim().nonempty("City is Required!")
})

export type ShippingFormInputs = z.infer<typeof shippingFormSchema>



export const paymentFormSchema = z.object({
  cardHolder: z.string().min(1, "Card holder is required!"),
  cardNumber: z
    .string()
    .min(16, "Card Number is required!")
    .max(16, "Card Number is required!"),
  expirationDate: z
    .string()
    .regex(
      /^(0[1-9]|1[0-2])\/\d{2}$/,
      "Expiration date must be in MM/YY format!"
    ),
  cvv: z.string().min(3, "CVV is required!").max(3, "CVV is required!"),
});

export type PaymentFormInputs = z.infer<typeof paymentFormSchema>;


export type CartStoreStateType = {
    cart: CartItemsTypes,
    hasHydrated: boolean,
}

export type CartStoreActionsType = {
    addToCart: (product: CartItemsType)=> void,
    removeFromCart:(product: CartItemsType)=> void,
    clearCart: ()=> void,
}