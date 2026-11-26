import type { UseFormRegisterReturn } from "react-hook-form";

type CredentialsFieldsProps = {
  emailRegistration: UseFormRegisterReturn;
  passwordRegistration: UseFormRegisterReturn;
  emailError?: string;
  passwordError?: string;
  passwordAutoComplete: "current-password" | "new-password";
};

const CredentialsFields = ({
  emailRegistration,
  passwordRegistration,
  emailError,
  passwordError,
  passwordAutoComplete,
}: CredentialsFieldsProps) => {
  const isNewPassword = passwordAutoComplete === "new-password";
  const passwordDescription =
    [
      isNewPassword ? "password-hint" : "",
      passwordError ? "password-error" : "",
    ]
      .filter(Boolean)
      .join(" ") || undefined;

  return (
    <>
      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-semibold">
          E-mail
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          required
          aria-invalid={Boolean(emailError)}
          aria-describedby={emailError ? "email-error" : undefined}
          {...emailRegistration}
          className="w-full rounded-xl border border-slate px-4 py-3"
        />
        {emailError && (
          <p
            id="email-error"
            role="alert"
            className="mt-1 text-sm text-red-700"
          >
            {emailError}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="password" className="mb-1 block text-sm font-semibold">
          Senha
        </label>
        <input
          id="password"
          type="password"
          autoComplete={passwordAutoComplete}
          required
          aria-invalid={Boolean(passwordError)}
          aria-describedby={passwordDescription}
          {...passwordRegistration}
          className="w-full rounded-xl border border-slate px-4 py-3"
        />
        {isNewPassword && (
          <p id="password-hint" className="mt-1 text-sm">
            Use pelo menos 6 caracteres, incluindo uma letra e um número.
          </p>
        )}
        {passwordError && (
          <p
            id="password-error"
            role="alert"
            className="mt-1 text-sm text-red-700"
          >
            {passwordError}
          </p>
        )}
      </div>
    </>
  );
};

export default CredentialsFields;
