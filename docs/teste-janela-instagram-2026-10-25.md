# Teste de janela do Instagram

25 de outubro de 2026 — Jenise Carvalho · A Sócia.

## Alteração

A seção Vídeo e redes passou a mostrar a janela real de `@jenisecarvalho`, ao lado do episódio no desktop e abaixo dele no celular. O botão “Carregar Instagram” foi substituído por incorporação nativa com `loading="lazy"`. O navegador decide quando carregar o conteúdo ao se aproximar da seção. A janela não recebe foco automaticamente.

As miniaturas, a foto e os números do perfil vêm do Instagram. Não há reprodução manual de um feed, contagens fixas, cópia de legendas para o site ou serviço adicional de widgets. A incorporação foi testada e exibiu o perfil e seis miniaturas reais. O suporte a perfis também consta no [repositório oficial Meta Embeds](https://github.com/facebook/meta-embeds-for-wordpress#supported-url-formats); não foi instalado WordPress nem esse plugin no projeto.

O acesso “Ver perfil no Instagram” permanece abaixo da janela, inclusive se o conteúdo externo estiver indisponível. O funcionamento do conteúdo incorporado depende da plataforma, das configurações do perfil e das restrições do navegador do visitante.

## Verificações

- Layout em 320, 390, 834 e 1440 px, sem transbordamento horizontal da página.
- Altura de 440 px para a janela em telas maiores e 390 px no celular; largura acompanha o cartão.
- Perfil carregado sem clicar em um botão de ativação, com nome e miniaturas visíveis.
- Link direto preservado, iframe com título acessível e funcionamento independente do JavaScript do site.
- Vídeo do YouTube continua aguardando clique, sem iframe de vídeo na carga inicial.
- Reprodução automática explicitamente negada na janela de Instagram. Nenhum vídeo ou áudio foi reproduzido nos testes.
- Sintaxe do JavaScript e destinos dos recursos locais conferidos.

## Parecer

**Visual:** a prévia torna o Instagram mais evidente e mantém a apresentação dentro da seção existente. **Navegação:** remove um clique para visualizar o perfil e preserva o acesso direto. **Celular:** o cartão se empilha abaixo do vídeo e mantém a largura da página. Não se alterou a avaliação global do site com base apenas nessa inclusão.

Esta alteração substitui o comportamento descrito na revisão anterior, em que o perfil só era solicitado após clique. O carregamento de conteúdo externo passa a poder ocorrer ao rolar a página, conforme a decisão de carregamento adiado do navegador.
