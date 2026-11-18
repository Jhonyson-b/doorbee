# Doorbee

## Desenvolvimento

Instale as dependências com `npm install` e inicie o projeto com `npm run dev`.

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