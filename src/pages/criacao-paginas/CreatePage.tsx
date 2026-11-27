// Formulário de criação da página e do seu endereço público.
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router";
import SignOutButton from "../../components/autenticacao/SignOutButton";
import Button from "../../components/button/Button";
import { supabase } from "../../lib/supabase";
import type { PageValues } from "./pageSchema";
import { slugify } from "./slugify";
import { useCreatePageForm } from "./useCreatePageForm";

const CreatePage = () => {
  const navigate = useNavigate();
  const slugEdited = useRef(false);
  const [submitError, setSubmitError] = useState("");
  const {
    register,
    handleSubmit,
    setValue,
    setError,
    watch,
    formState: { errors, isSubmitting },
  } = useCreatePageForm();
  const slug = watch("slug");
  const titleField = register("title");
  const slugField = register("slug");

  const createPage = async ({ title, slug }: PageValues) => {
    setSubmitError("");
    try {
      const { error } = await supabase.from("pages").insert({ title, slug });
      if (error) {
        console.error("Erro ao criar página:", error);
        if (
          error.code === "23505" &&
          error.message.includes("pages_slug_key")
        ) {
          setError(
            "slug",
            { message: "Esse endereço já está em uso" },
            { shouldFocus: true },
          );
        } else if (
          error.code === "23505" &&
          error.message.includes("pages_user_id_key")
        ) {
          navigate("/dashboard", { replace: true });
        } else if (error.code === "23514") {
          setError(
            "slug",
            { message: "Endereço inválido ou indisponível" },
            { shouldFocus: true },
          );
        } else {
          setSubmitError("Não foi possível criar sua página. Tente novamente.");
        }
        return;
      }
      navigate("/dashboard", { replace: true });
    } catch (error) {
      console.error("Erro ao criar página:", error);
      setSubmitError(
        "Não foi possível criar sua página. Verifique sua conexão e tente novamente.",
      );
    }
  };

  return (
    <main className="flex min-h-svh items-center justify-center bg-linear-to-br from-mist via-sky-light to-mist px-5 py-12">
      <div className="w-full max-w-lg rounded-3xl bg-white p-7 shadow-lg sm:p-10">
        <Link to="/" className="font-heading text-2xl font-bold text-navy">
          Doorbee
        </Link>
        <h1 className="mt-8 text-3xl">Crie sua página</h1>
        <p className="mt-3">
          Sua página começa aqui! Escolha um nome e um endereço para
          compartilhar seus links com o mundo.
        </p>
        <form
          noValidate
          onSubmit={handleSubmit(createPage)}
          className="mt-7 space-y-5"
        >
          <div>
            <label htmlFor="title" className="mb-1 block text-sm font-semibold">
              Título
            </label>
            <input
              id="title"
              type="text"
              required
              maxLength={60}
              placeholder="Ex.: Clínica Pets"
              aria-invalid={Boolean(errors.title)}
              aria-describedby={errors.title ? "title-error" : undefined}
              {...titleField}
              onChange={(event) => {
                void titleField.onChange(event);
                if (!slugEdited.current)
                  setValue("slug", slugify(event.target.value), {
                    shouldValidate: Boolean(errors.slug),
                  });
              }}
              className="w-full rounded-xl border border-slate px-4 py-3"
            />
            {errors.title && (
              <p
                id="title-error"
                role="alert"
                className="mt-1 text-sm text-red-700"
              >
                {errors.title.message}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="slug" className="mb-1 block text-sm font-semibold">
              Endereço
            </label>
            <div className="flex items-center rounded-xl border border-slate">
              <span className="pl-4 text-sm text-slate">doorbee.com/</span>
              <input
                id="slug"
                type="text"
                required
                maxLength={30}
                autoCapitalize="none"
                spellCheck={false}
                aria-invalid={Boolean(errors.slug)}
                aria-describedby={
                  errors.slug ? "slug-preview slug-error" : "slug-preview"
                }
                {...slugField}
                onChange={(event) => {
                  slugEdited.current = true;
                  void slugField.onChange(event);
                }}
                className="min-w-0 flex-1 rounded-xl px-2 py-3"
              />
            </div>
            <p id="slug-preview" className="mt-2 break-all text-sm">
              Prévia: doorbee.com/{slug}
            </p>
            {errors.slug && (
              <p
                id="slug-error"
                role="alert"
                className="mt-1 text-sm text-red-700"
              >
                {errors.slug.message}
              </p>
            )}
          </div>
          {submitError && (
            <p role="alert" className="text-sm text-red-700">
              {submitError}
            </p>
          )}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-5 py-3"
          >
            {isSubmitting ? "Criando..." : "Criar minha página"}
          </Button>
        </form>
        <SignOutButton />
      </div>
    </main>
  );
};

export default CreatePage;
