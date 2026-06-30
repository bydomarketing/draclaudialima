# Dra. Cláudia Lima | Odontologia, Estética e Reabilitação Oral

Projeto de Homepage profissional e institucional para a Dra. Cláudia Lima, focada em Odontologia, Estética, Reabilitação Oral, Implantes, Próteses e Ortodontia.

## Tecnologias Utilizadas

- **React + Vite**: Setup rápido e eficiente com Hot Module Replacement (HMR).
- **TypeScript**: Maior segurança no desenvolvimento com tipagem estática.
- **Tailwind CSS**: Para a estilização visual moderna e responsiva.
- **Framer Motion**: Utilizado para animações e micro-interações ao longo do site.

## Como rodar o projeto localmente

Instale as dependências:
```sh
npm install
```

Inicie o servidor de desenvolvimento:
```sh
npm run dev
```

## Como gerar o build

Para gerar a versão otimizada de produção:
```sh
npm run build
```
Os arquivos estarão disponíveis na pasta `dist/`.

## Deploy

O deploy é automatizado via GitHub Actions. Ao fazer push na branch `main`, o workflow:

1. Instala as dependências com `npm install`
2. Executa o build com `npm run build`
3. Sincroniza os arquivos da pasta `dist/` para o servidor Hostinger via FTP

> **Importante:** O arquivo `public/.htaccess` é copiado automaticamente para `dist/` durante o build, garantindo o redirecionamento HTTPS e o fallback para SPA (React Router).

Para acionar manualmente o deploy, acesse a aba **Actions** do repositório no GitHub e execute o workflow **Deploy to Hostinger**.
