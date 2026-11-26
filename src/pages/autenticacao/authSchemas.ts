// Regras de validação e tipos dos formulários de login e cadastro.
import { z } from "zod";

const email = z
  .string()
  .trim()
  .min(1, "Informe seu e-mail.")
  .check(z.email("Informe um e-mail válido."));
const loginPassword = z.string().min(1, "Informe sua senha.");

export const signInSchema = z.object({
  email,
  password: loginPassword,
});

export const signUpSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(1, "Informe seu nome e sobrenome.")
    .max(100, "O nome deve ter no máximo 100 caracteres.")
    .refine(
      (value) => /^\S+\s+\S+/u.test(value),
      "Informe seu nome e sobrenome.",
    ),
  email,
  password: loginPassword
    .min(6, "A senha deve ter pelo menos 6 caracteres.")
    .regex(/\p{L}/u, "A senha deve conter pelo menos uma letra.")
    .regex(/[0-9]/, "A senha deve conter pelo menos um número."),
});

export type SignInValues = z.infer<typeof signInSchema>;
export type SignUpValues = z.infer<typeof signUpSchema>;
