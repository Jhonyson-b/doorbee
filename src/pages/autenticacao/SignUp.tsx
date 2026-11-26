import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { authRedirectUrl } from "../../auth/authRedirect";
import AuthLayout from "../../components/autenticacao/AuthLayout";
import CredentialsFields from "../../components/autenticacao/CredentialsFields";
import GoogleSignIn from "../../components/autenticacao/GoogleSignIn";
import Button from "../../components/button/Button";
import { supabase } from "../../lib/supabase";
import { signUpSchema, type SignUpValues } from "./authSchemas";

const SignUp = () => {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");
  const [confirmation, setConfirmation] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: { fullName: "", email: "", password: "" },
  });

  const signUp = async ({ fullName, email, password }: SignUpValues) => {
    setError("");
    setPending(true);
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: authRedirectUrl(),
          data: { full_name: fullName },
        },
      });
      if (error) throw error;
      if (!data.session) setConfirmation(true);
    } catch (error) {
      console.error("Erro de autenticação:", error);
      setError(
        "Não foi possível criar a conta. Verifique os dados e tente novamente.",
      );
    } finally {
      setPending(false);
    }
  };

  return (
    <AuthLayout
      title="Crie sua conta"
      description="Comece criando seu Doorbee."
    >
      {confirmation ? (
        <div className="mt-6 rounded-xl bg-sky-light p-4" role="status">
          <p>
            Se o cadastro puder ser concluído, você receberá um e-mail de
            confirmação. Confira também sua caixa de spam.
          </p>
          <Link
            to="/sign-in"
            className="mt-3 inline-block font-semibold text-navy underline"
          >
            Ir para login
          </Link>
        </div>
      ) : (
        <>
          <GoogleSignIn
            pending={pending}
            setPending={setPending}
            setError={setError}
          />
          <form
            noValidate
            onSubmit={handleSubmit(signUp)}
            className="space-y-4"
          >
            <div>
              <label
                htmlFor="fullName"
                className="mb-1 block text-sm font-semibold"
              >
                Nome e sobrenome
              </label>
              <input
                id="fullName"
                type="text"
                autoComplete="name"
                required
                maxLength={100}
                aria-invalid={Boolean(errors.fullName)}
                aria-describedby={
                  errors.fullName ? "fullName-error" : undefined
                }
                {...register("fullName")}
                className="w-full rounded-xl border border-slate px-4 py-3"
              />
              {errors.fullName && (
                <p
                  id="fullName-error"
                  role="alert"
                  className="mt-1 text-sm text-red-700"
                >
                  {errors.fullName.message}
                </p>
              )}
            </div>
            <CredentialsFields
              emailRegistration={register("email")}
              passwordRegistration={register("password")}
              emailError={errors.email?.message}
              passwordError={errors.password?.message}
              passwordAutoComplete="new-password"
            />
            {error && (
              <p role="alert" className="text-sm text-red-700">
                {error}
              </p>
            )}
            <Button
              type="submit"
              disabled={pending}
              className="w-full px-5 py-3"
            >
              {pending ? "Aguarde..." : "Criar conta"}
            </Button>
          </form>
        </>
      )}
      <p className="mt-6 text-sm">
        Já tem uma conta?{" "}
        <Link to="/sign-in" className="font-semibold text-navy underline">
          Entrar
        </Link>
      </p>
    </AuthLayout>
  );
};

export default SignUp;
