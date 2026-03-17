# Documentação e Guia de Implantação: Beleza-Saúde-TV

Este guia detalha o processo técnico para publicar o site **Beleza-Saúde-TV**. Diferente de sites estáticos simples, este projeto utiliza **React + Vite**, o que exige uma etapa de "build" antes do upload.

---

## 1. Visão Geral Tecnológica

O site é uma aplicação moderna de alta performance:
- **Frontend:** React 19 + Vite (gera um site estático ultra-rápido).
- **CMS (Conteúdo):** Sanity.io (os dados de produtos e posts vêm da nuvem).
- **Estilização:** Tailwind CSS (design responsivo e premium).
- **Animações:** GSAP para interações fluidas.

---

## 2. Preparação da Infraestrutura

Para que o site funcione no seu domínio, os três pilares devem estar conectados:

### A. Registro.br (Onde está o seu domínio)
1. Acesse sua conta no **Registro.br**.
2. Selecione o domínio `belezasaudetv.com.br` (ou o domínio correspondente).
3. Na seção **DNS**, verifique se os servidores de nome (DNS) estão apontando para a **Cloudflare** (ex: `beth.ns.cloudflare.com` e `bill.ns.cloudflare.com`).
   - *Se já estiverem apontando para a Cloudflare, não mexa em nada aqui.*

### B. Cloudflare (Onde está o seu CDN e Segurança)
1. Acesse o painel da **Cloudflare**.
2. Na aba **DNS** > **Records**, certifique-se de que existem dois registros principais apontando para o IP da sua hospedagem na HostGator:
   - **Tipo A:** Nome `@` (ou o domínio) -> IP da HostGator.
   - **Tipo CNAME:** Nome `www` -> `@`.
3. Certifique-se de que a "nuvenzinha" (Proxy) está **Laranja**.
4. Na aba **SSL/TLS**, use o modo **Full (Strict)** para garantir o cadeado de segurança.

### C. HostGator (Onde os arquivos ficarão guardados)
1. Acesse o **cPanel** da HostGator.
2. Identifique o IP do servidor (informação disponível na barra lateral direita do cPanel) para garantir que é o mesmo configurado na Cloudflare.

---

## 3. Processo de Geração do Site (Build)

Antes de subir os arquivos, você (ou o desenvolvedor) precisa transformar o código de programação em arquivos que o navegador entende.

1. No terminal, dentro da pasta do projeto (`beleza-saude-tv`), execute:
   ```bash
   npm run build
   ```
2. Este comando criará uma nova pasta chamada **`dist`**.
3. **IMPORTANTE:** Somente o conteúdo de dentro da pasta `dist` deve ser enviado para o servidor. Ignora-se todo o resto (node_modules, src, etc).

---

## 4. Estrutura de SEO

Os arquivos de SEO já estão configurados e localizados em:
- `public/robots.txt`
- `public/sitemap.xml`

Ao rodar o comando de build, eles são copiados automaticamente para a pasta `dist` raiz.

---

## 5. Passo a Passo de Implantação (Deploy)

### Passo 1: Backup (Segurança)
1. No cPanel da HostGator, vá em **Gerenciador de Arquivos** > `public_html`.
2. Compacte o site atual em um `.zip` e faça o download.

### Passo 2: Limpeza
1. Exclua os arquivos antigos da pasta `public_html` (ou mova-os para uma subpasta `backup_antigo`).

### Passo 3: Upload do Novo Site
1. Entre na pasta `dist` que foi gerada no seu computador.
2. Selecione todos os arquivos e pastas internos de `dist` e compacte-os em um arquivo chamado `site_novo.zip`.
3. No cPanel da HostGator, dentro de `public_html`, clique em **Carregar** e envie o `site_novo.zip`.
4. Clique com o botão direito no arquivo enviado e selecione **Extract (Extrair)**.
5. Certifique-se de que o arquivo `index.html` está na raiz do `public_html`.

### Passo 4: Limpando o Cache (Cloudflare)
1. No painel da **Cloudflare**, vá em **Caching** > **Configuration**.
2. Clique em **Purge Everything** para que a Cloudflare pare de entregar a versão antiga do site e passe a entregar a nova.

---

## 6. Verificação Final

1. Abra o site em uma aba anônima.
2. Verifique se as imagens do Sanity estão carregando corretamente.
3. Teste os links de navegação.
4. Verifique o cadeado de segurança (HTTPS).

---
**Parabéns!** O Beleza-Saúde-TV está agora implementado com uma arquitetura de ponta, protegido pela Cloudflare e hospedado na HostGator.
