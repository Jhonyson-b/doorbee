# Doorbee

## Desenvolvimento

Instale as dependências com `npm install` e inicie o projeto com `npm run dev`.

## Rotas

O React Router está configurado em `src/main.tsx`. A rota `/` exibe a página
inicial, `/sign-in` permite entrar, `/sign-up` permite criar uma conta e
`/dashboard` é o painel protegido. O botão de sair fica no painel e encerra a
sessão no dispositivo atual. O roteador usa o caminho base configurado no Vite.

As páginas de login e cadastro ficam em `src/pages/autenticacao`, com elementos
compartilhados em `src/components/autenticacao`. O componente do painel fica em
`src/components/painel`; botões e links com aparência de botão reutilizáveis
ficam em `src/components/button`.

## Autenticação com Supabase

Configure `VITE_SUPABASE_URL` e `VITE_SUPABASE_PUBLISHABLE_KEY` no
`.env.local`. No painel do Supabase:

1. Em **Authentication > Sign In / Providers**, habilite e-mail e Google. A
   confirmação de e-mail e as regras de senha seguem as configurações do seu
   projeto.
2. Para o Google, crie um cliente OAuth no Google Cloud, informe seu Client ID
   e Client Secret no provedor Google do Supabase e configure no Google a
   **Authorized redirect URI** indicada pelo Supabase (a URL de callback do
   Supabase, não a URL do Doorbee).
3. Em **Authentication > URL Configuration**, configure a Site URL de
   produção e adicione às Redirect URLs as URLs de retorno usadas pelo app,
   incluindo a porta local e o caminho base de produção. Exemplos:
   `http://localhost:5173/?auth_callback=1`,
   `http://127.0.0.1:5173/?auth_callback=1` e
   `https://jhonyson-b.github.io/doorbee/?auth_callback=1`. Inclua também a
   URL real usada se a porta ou o domínio forem diferentes.
4. Se tiver personalizado o modelo de confirmação de e-mail, confira se o link
   utiliza `{{ .ConfirmationURL }}` ou respeita `{{ .RedirectTo }}`.

Após o Google ou a confirmação de e-mail, o Supabase retorna à página inicial
e o aplicativo encaminha a sessão para o painel. Se a confirmação estiver
habilitada, o cadastro sem sessão exibirá uma mensagem para verificar o e-mail.
A validação dos formulários usa React Hook Form e Zod. No cadastro, o nome e
sobrenome são enviados em `user_metadata.full_name` para o gatilho de criação
do perfil. A senha exige ao menos 6 caracteres, uma letra e um número no
frontend; configure a política equivalente no Supabase para aplicá-la também
fora do aplicativo. Essas novas regras de senha não são exigidas no login.
As regras ficam em `src/pages/autenticacao/authSchemas.ts`; as configurações,
valores iniciais e hooks dos formulários ficam na mesma pasta. Os campos são
validados ao perder o foco e, após uma tentativa de envio, ao serem alterados.
A proteção da rota controla apenas a interface: configure as políticas RLS
nas tabelas para proteger os dados no Supabase.

Documentação: [login com Google no Supabase](https://supabase.com/docs/guides/auth/social-sign-in/auth-google)
e [URLs de redirecionamento](https://supabase.com/docs/guides/auth/redirect-urls).

## Publicação no GitHub Pages

Em **Settings > Pages > Build and deployment**, selecione **GitHub Actions**
como fonte. Após enviar as alterações para a branch `main`, o workflow compila
o projeto e publica a pasta `dist` automaticamente. Também é possível executá-lo
manualmente na aba **Actions**.

O site fica disponível em https://jhonyson-b.github.io/doorbee/. Apenas o build
do GitHub Pages usa o caminho base `/doorbee/`; se o nome do repositório mudar,
atualize esse caminho em `.github/workflows/deploy.yml`. Para testá-lo localmente,
execute `npm run build -- --base=/doorbee/` e `npm run preview` e acesse o
caminho `/doorbee/`.

O comando `npm run build` usa o caminho padrão `/`, adequado para publicação
na raiz de outro serviço de hospedagem.

O GitHub Pages não oferece redirecionamento automático para `index.html` em
rotas desconhecidas. Quando novas rotas forem adicionadas, acessá-las
diretamente ou atualizar a página pode resultar em erro 404 nessa hospedagem;
será necessário configurar uma solução de fallback ou usar uma hospedagem com
suporte a aplicações de página única.