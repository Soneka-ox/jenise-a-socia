# Refinamento de design

25 de outubro de 2026. Atualização posterior à análise visual da versão `9c251f4`.

## Resultado

Aplicados os refinamentos de alinhamento, hierarquia de títulos, apresentação do acervo e organização das mídias. Preservados a paleta, as quatro fotografias, a foto de branco na abertura, os títulos dos artigos, seus destinos e os logotipos sociais no rodapé.

O monograma foi preservado. A marca A Sócia ganhou um pequeno reforço de peso na assinatura existente; não foi feita uma nova identidade visual.

## Composição

- Cabeçalho, abertura, corpo e rodapé usam o mesmo eixo. Na inspeção a 1440 px, os seis pontos medidos passaram a começar em aproximadamente 137 px. Antes, o cabeçalho começava em 73 px, a abertura em 84 px e os conteúdos internos em 164 px.
- Títulos auxiliares ficaram mais curtos e simples. O itálico em bronze permanece nos destaques principais, evitando que cada seção repita a mesma composição.
- A abertura de Publicações passou a apresentar diretamente o acervo. O catálogo começa em aproximadamente 548 px no desktop, ante 858 px, e 671 px no celular de 390 px, ante 959 px.
- O artigo mais recente recebe um bloco de destaque. Os demais usam títulos de 28 px no desktop e 26 px no celular. Datas, autoria editorial, assuntos e títulos completos foram mantidos.
- O enquadramento móvel da fotografia branca recebeu mais respiro acima da cabeça. O arquivo original foi preservado.

## Nas redes

Vídeo, Instagram e Newsletter agora são três abas internas à seção, sem novas páginas. O vídeo fica selecionado na abertura padrão; vídeo e trechos permanecem juntos. As prévias das plataformas continuam nativas e há links diretos alternativos em cada canal.

A seção ficou cerca de 60% mais curta no celular na abertura padrão, sem retirar os outros canais. Sua altura depende da aba e da expansão dos trechos.

- Apenas um painel aparece por vez com JavaScript.
- Setas, Home e End movimentam o foco. Enter e Espaço selecionam o canal.
- Os fragmentos antigos selecionam o painel correspondente, inclusive links para elementos internos como `#instagram-profile`, `#newsletter-title` e `#video-player`.
- As trocas atualizam o fragmento usando `replaceState`, evitando criar uma entrada de histórico a cada seleção.
- Ao ocultar o vídeo, um iframe carregado é removido e o mesmo botão de capa é restaurado. Assim, um episódio iniciado pelo visitante não continua em segundo plano.
- Sem JavaScript, os três canais permanecem visíveis no HTML e os atalhos são links comuns. Esse fallback foi conferido no código, sem simulação de JavaScript desativado no navegador.

## Validação

- Três páginas em larguras de 320, 390, 834 e 1440 px, sem transbordamento horizontal, com um h1 por página e sem imagens quebradas detectadas.
- Três canais nas quatro larguras, com um único painel visível por seleção.
- Prévia real do Instagram e publicação real do LinkedIn carregadas no navegador.
- Navegação manual das abas: Home moveu o foco para Vídeo sem alterar a seleção; Enter selecionou Vídeo. A remoção do iframe ao trocar de canal foi conferida.
- Player carregado com `autoplay=0`, sem acionar a reprodução do episódio. Nenhum áudio foi reproduzido.
- Filtros com 3 artigos de gestão/governança, 6 de liderança/carreira, 1 de tecnologia e 10 no total.
- Fragmento de artigo oculto pelo filtro restabeleceu a seleção completa e revelou o artigo.
- IDs, destinos e recursos locais conferidos; sintaxe do JavaScript válida.

## Limites

Os testes de largura no navegador não substituem aparelhos físicos ou uma auditoria com leitor de tela. O conteúdo interno das prévias continua sujeito às plataformas. A automação da newsletter, a voz pessoal de Jenise e o domínio futuro permanecem nas etapas já adiadas.
