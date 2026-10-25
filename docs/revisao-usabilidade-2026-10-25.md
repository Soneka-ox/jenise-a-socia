# Revisão de usabilidade, acessibilidade e apresentação

Jenise Carvalho · A Sócia — 25 de outubro de 2026.

## Parecer

O site tem uma direção visual coerente e uma organização adequada ao conteúdo disponível. A prioridade é aperfeiçoar a experiência de leitura e manter o acervo atualizado. Não há necessidade atual de novas páginas ou de uma reformulação visual.

A avaliação considera o site publicado e os arquivos do projeto, pesquisa em fontes primárias e testes locais no navegador. Não houve pesquisa com visitantes, auditoria completa com leitor de tela ou medição de desempenho em campo. As notas são julgamento editorial, não resultados do Lighthouse nem certificação de acessibilidade.

## O que manter

- **Início:** apresenta Jenise, explica o tema e oferece caminhos para a biografia, os artigos, a newsletter e a conversa em vídeo.
- **Sobre Jenise:** reúne trajetória, formação, liderança e contribuição institucional. Os detalhes complementares podem ser expandidos sem sobrecarregar a leitura inicial.
- **Publicações:** reúne os artigos assinados e permite filtrar por assunto. Participações e menções estão separadas da autoria.
- **Vídeo:** o atalho do menu leva à seção da inicial. Uma página própria fará mais sentido quando houver um acervo de episódios que exija navegação independente.
- **Identidade:** tons sóbrios, títulos em fonte serifada, ícones vetoriais e as quatro fotografias cumprem funções distintas. A foto de branco permanece na abertura.
- **Mídia externa:** YouTube e Instagram carregam somente após uma ação do visitante. Os links de acesso direto permanecem disponíveis.

Essa é uma aplicação da pesquisa sobre pistas de navegação: o nome e o contexto de um link devem permitir antecipar seu destino. O site já oferece caminhos descritivos como “Conheça a trajetória” e “Ler no Correio Braziliense”. Não há motivo para substituí-los por rótulos mais vagos. [NN/g: Information Scent](https://www.nngroup.com/articles/information-scent/).

## Problemas observados e correções aplicadas

| Observação | Ajuste | Benefício esperado |
| --- | --- | --- |
| Ao usar Tab para sair do menu móvel, o painel continuava aberto sobre a página. | O menu fecha quando o foco sai do botão e da navegação. Escape continua fechando e devolvendo o foco ao botão. | A leitura pode continuar sem deixar o painel aberto sobre o conteúdo. |
| O atalho “Ir para o conteúdo” alterava o fragmento, mas o elemento ativo observado continuava sendo o corpo da página. | O elemento principal recebeu `tabindex="-1"`. | O atalho transfere o foco ao conteúdo sem criar uma parada adicional na sequência normal de Tab. |
| O quadro de formação tinha cerca de 711 px de altura, fixado a 130 px do topo em uma janela de 700 px de altura. A parte inferior ficava fora da área visível enquanto o quadro permanecia fixo. | O quadro passou a acompanhar a rolagem normal. | Formação, expansão e link profissional podem ser percorridos naturalmente, inclusive em janelas baixas. |
| O contorno de foco do link do MJAB na área escura usava bronze sobre azul, com contraste calculado de aproximadamente 1,81:1. | Todos os links dessa área usam o contorno claro já adotado nos botões sociais. | O contraste das cores do indicador passou a aproximadamente 5,46:1. |
| O retrato da abertura de Sobre Jenise tinha carregamento adiado, apesar de aparecer na primeira tela em layouts maiores. | O retrato usa carregamento imediato e prioridade alta. | Evita adiar desnecessariamente uma imagem de abertura. Não foi atribuído um ganho de segundos sem medição. |
| A arte de compartilhamento ainda usava a formulação anterior ao título “Gestão & Carreira”. | Criada a versão 2 da arte, com a mesma foto e composição, novo texto e metadados atualizados nas três páginas. | Mais consistência entre o site e sua prévia compartilhada. A nova URL da imagem ajuda a distingui-la da versão anterior; aplicativos podem manter seu próprio cache. |

Os controles também passaram a herdar explicitamente a cor do texto, reduzindo diferenças de aparência entre navegadores.

Os ajustes de foco seguem a orientação de manter o elemento selecionado visível e os estados dos controles distinguíveis. A WCAG descreve contraste mínimo de 3:1 para informações visuais necessárias à identificação de controles e estados. A verificação pontual das cores não comprova conformidade de todo o site. [W3C: foco não encoberto](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html), [W3C: contraste não textual](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html).

O carregamento imediato da imagem de abertura segue a orientação de evitar carregamento adiado de imagens importantes da primeira tela. A fotografia principal da inicial já usava prioridade alta. [web.dev: otimizar LCP](https://web.dev/articles/optimize-lcp).

## Verificações

- Três páginas em larguras de 320, 390, 834 e 1440 px: sem transbordamento horizontal, um título principal por página e imagens de carregamento imediato disponíveis.
- Testes de Tab ao sair do menu, fechamento com Escape e transferência de foco pelo atalho de conteúdo.
- Cor do foco do link do MJAB conferida no navegador; contraste calculado com as cores definidas no CSS.
- Quadro de formação conferido em janela baixa e com expansão de conteúdo.
- Conferência estática de recursos e fragmentos internos, sintaxe do JavaScript e regressão dos filtros de artigos.
- Arte de compartilhamento conferida visualmente e validada como JPEG de 1200 × 630 px.
- Nenhum vídeo ou áudio foi reproduzido nos testes.

## Próximas melhorias, por prioridade

1. **Voz da Jenise e confirmação editorial.** Incorporar o material que ela fornecerá e confirmar a designação da formação IBGC, os vínculos atuais e o monograma definitivo. Evitar transformar formação em cargo exercido ou criar serviços comerciais sem confirmação.
2. **Rotina de publicações.** A atualização do acervo é mais importante que acrescentar seções. O painel simples de edição pode ser tratado na etapa já adiada pelo cliente. Até lá, manter título, data, autoria, veículo e destino de cada artigo consistentes.
3. **Aparelhos e tecnologias assistivas.** Fazer uma rodada em Safari no iPhone, Android e leitor de tela. Os testes de largura no navegador cobrem problemas de layout, mas não substituem o uso nesses ambientes.
4. **Imagens responsivas.** Há oportunidade de fornecer versões menores para retratos usados como miniatura. Os arquivos atuais estão entre aproximadamente 117 e 248 kB por fotografia; o retrato de autoria, de aproximadamente 134 kB, também aparece em tamanho pequeno. Antes de uma alteração maior, medir carregamento e comparar qualidade visual. [web.dev: imagens responsivas](https://web.dev/learn/images/responsive-images).
5. **Domínio e busca.** Configurar `www.jeniseasocia.com.br` na migração futura, revisar canonical, imagem social, sitemap e redirecionamentos e então acompanhar indexação. Nenhum resultado de posicionamento em busca foi presumido nesta avaliação.

Novas abas devem responder a uma necessidade real. “Serviços”, “Palestras” ou formulários comerciais não foram acrescentados porque seu objetivo e conteúdo ainda não foram confirmados. O catálogo atual não exige uma busca textual adicional.

## Notas após os ajustes

A nota global permanece **8,6/10**. As correções removem problemas concretos, mas não justificam tratar a avaliação como um selo de qualidade ou como substituta de testes com usuários.

| Área | Nota | Limite ou próxima oportunidade |
| --- | --- | --- |
| Identidade visual | 8,7 | Validar marca definitiva |
| Organização | 8,8 | Manter o menu curto conforme o acervo cresce |
| Escrita e clareza | 8,5 | Incorporar a voz da autora |
| Navegação | 9,0 | Acompanhar o uso dos filtros e dos atalhos |
| Celular | 8,7 | Conferir aparelhos físicos |
| Conteúdo e credibilidade | 8,5 | Concluir confirmações curriculares |
| Acessibilidade | 8,2 | Auditoria com leitor de tela ainda pendente |
| Busca e compartilhamento | 8,0 | Validar domínio futuro e acompanhar indexação |

Os vídeos de apresentação já entregues continuam úteis para mostrar o projeto. São animações de capturas reais, com composições próprias para os três formatos e sem áudio. Sua função é apresentar a experiência visual; textos extensos devem ser lidos no próprio site. Os ajustes desta rodada não alteram os conteúdos visíveis nessas capturas, exceto a arte externa de compartilhamento.
