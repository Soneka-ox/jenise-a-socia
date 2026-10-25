# Avaliação da atualização — três páginas

Revisão posterior: [usabilidade, acessibilidade e apresentação](revisao-usabilidade-2026-10-25.md), com achados, correções e limites das verificações mais recentes.

Data: 25/10/2026. Escopo: organização, redação, currículo, catálogo editorial, navegação, adaptação de telas e metadados. Avaliação qualitativa, sem atribuir notas numéricas que dependam de pesquisa com usuários ou medições de campo.

## Entrega

- **Início:** abertura Gestão & Carreira, apresentação curta, três destaques editoriais, newsletter A Sócia, vídeo Casa Capta e Instagram sob demanda.
- **Sobre Jenise:** biografia, seis marcos de carreira, formação, liderança, mentoria e contribuições institucionais e sociais.
- **Publicações:** dez artigos selecionados e ordenados por data; newsletter; duas participações, com distinção entre vídeo e reportagem; menções institucionais em expansão; links de perfis de autora no Migalhas e no ConJur.
- Navegação compartilhada com indicação da página atual; links relativos compatíveis com a base do GitHub Pages.
- As quatro fotos profissionais foram preservadas: branco na abertura, azul na biografia, conjunto claro na liderança e retrato escuro na newsletter. Enquadramentos por CSS, sem alteração dos originais.
- Botões sociais de Instagram e LinkedIn exibem apenas os logotipos, com identificação acessível. Sem emojis na interface.

## Currículo e redação

A atualização usa a nova leitura dos 28 arquivos, registrada no inventário privado. Foram acrescentados Mattos Filho (2004–2006), evolução na FUNCEF, vice-presidência da ADAFUNCEF e atuação voluntária no Instituto Amor em Tempos de Dor. Os marcos MJAB de 2019, 2020 e 2021 têm explicações separadas.

A apresentação “sócia fundadora e gestora” acompanha a fonte institucional do MJAB. Os cursos foram agrupados e selecionados conforme o posicionamento Gestão & Carreira. Não foram publicados os 50 itens de competências, contagens de recomendações, textos truncados ou superlativos sobre litígios. A formação IBGC 2026 continua baseada no texto Sobre fornecido pela cliente; não foi acrescentada certificação nem atuação em conselho.

Revisados ortografia, concordância, conectivos e repetições dos textos próprios. Títulos de artigos preservam a redação da fonte. As datas são absolutas. O texto de apresentação das publicações passou a contemplar diferentes veículos, em lugar de direcionar todo o acervo ao LinkedIn.

## Avaliação por área

| Área | Avaliação após a atualização | Evidência e próximo passo |
| --- | --- | --- |
| Organização | Mais clara | Três páginas com funções distintas. A inicial deixa de concentrar o currículo inteiro; novos conteúdos cabem no catálogo. |
| Identidade visual | Consistente | Paleta, tipografia, fotos e capas mantidas. Novos cartões e páginas seguem o mesmo padrão. Monograma ainda depende de validação como marca definitiva. |
| Biografia e carreira | Mais completas | Marcos cronológicos, experiências institucionais e formação contextualizados. Revisão final da cliente continua útil para atualidade dos vínculos e designações. |
| Publicações | Ampliadas e identificadas | Dez artigos, fontes, datas e resumos próprios. Participações e notícias separadas da autoria. O artigo do ConJur permanece fora da seleção por falta de leitura direta; o perfil está vinculado. |
| Celular | Melhor distribuição | Sem transbordamento nas três páginas em 320, 390, 768 e 1440 px. A inicial em 390 px passou a cerca de 6,2 mil px, ante cerca de 9,4 mil da versão anterior. Medição local, detalhes fechados e embeds não carregados; não é teste em aparelho físico. |
| Acessibilidade | Base preservada | Um h1 por página, hierarquia de títulos, skip link, nomes nos controles, página atual e expansão nativa. Menu abre, fecha e responde a Escape. Falta auditoria completa com leitor de tela. |
| Desempenho | Estrutura leve preservada | Sem novas dependências ou fontes externas. YouTube e Instagram continuam sem iframe inicial. Não foram medidos Core Web Vitals nem notas Lighthouse. |
| Busca e compartilhamento | Preparados para as três páginas | Títulos, descrições, canonical, Open Graph e Twitter Card individuais; sitemap com três endereços. Imagem de compartilhamento mantém a arte da marca. Cache de WhatsApp e redes pode demorar a atualizar. |

## Verificações executadas

1. Sintaxe de `assets/site.js` e `scripts/preview.cjs` conferida com Node.
2. Conferência estática das três páginas: um h1, ausência de IDs repetidos, existência de recursos locais e validade de destinos internos e fragmentos. Onze recursos locais distintos responderam HTTP 200.
3. As três páginas foram inspecionadas no navegador em quatro larguras: 320, 390, 768 e 1440 px. Não houve transbordamento horizontal nem imagem concluída com falha nas observações. Não houve erro de console capturado na conferência.
4. Navegação móvel entre páginas, indicação da página atual, fechamento com Escape, atalhos de Publicações e expansão da formação conferidos.
5. O endereço antigo `/#artigo-governanca` foi testado e encaminhou a `publicacoes/#artigo-governanca`. Os demais destinos antigos seguem o mesmo mapa explícito no JavaScript.
6. Vídeo e Instagram mantêm o código de carregamento sob demanda. Nenhuma reprodução de áudio foi iniciada nesta revisão.
7. Capturas de prévia salvas em `qa/`, fora do repositório público. Originais e inventário do currículo continuam em `materiais-cliente/`, também ignorado pelo Git.

## Melhorias futuras por prioridade

1. Confirmar com a cliente a redação final da formação IBGC, os vínculos atuais e o monograma definitivo.
2. Completar a conferência direta do artigo ConJur e o endereço individual do texto sobre execução de estratégia no Debate Jurídico antes de incluí-los no catálogo.
3. Acrescentar novos artigos pela curadoria manual; reavaliar busca e paginação se o volume crescer. Os filtros por assunto foram acrescentados no refinamento abaixo. Não criar páginas vazias por veículo.
4. Fazer auditoria com leitor de tela e aferição de desempenho em uso real quando houver tráfego.
5. Na transferência para Jeniseasocia e no domínio próprio, atualizar canonical, sitemap, Open Graph, robots e destino da página 404. Domínio ainda não ativado nesta entrega.

Referências editoriais detalhadas: `catalogo-publicacoes-2026-10-25.md`. Análise que orientou a organização: `analise-organizacao-fontes-2026-10-25.md`. Nenhum artigo externo foi reproduzido integralmente.

## Refinamento adicional — navegação e leitura

Atendendo ao pedido de aprimorar os ajustes, esta revisão mantém as três páginas e concentra mudanças na localização dos conteúdos:

- Filtros em Publicações: todos os assuntos (10 artigos), gestão e governança (3), liderança e carreira (6) e tecnologia (1). A seleção indica o estado ativo e anuncia a quantidade de resultados. Cada artigo pertence a um grupo editorial principal; os rótulos específicos dos cartões continuam disponíveis.
- Sem JavaScript, o catálogo inteiro permanece legível, os filtros não aparecem inativos e o menu principal continua disponível no celular.
- Links compartilhados para artigos ocultos pelo filtro restauram a seleção completa e revelam o destino.
- Atalhos em Sobre Jenise levam diretamente a trajetória, formação e liderança/contribuição.
- Abertura e título de seção de Publicações ficaram mais curtos. O destaque do Migalhas na inicial recebeu uma chamada editorial curta; o título original permanece integral no catálogo.
- As regras visuais do menu principal passaram a ter escopo próprio, evitando interferência nos atalhos internos das páginas. Mantidos contraste, foco visível, altura mínima de 44 px nos filtros e identidade sem emojis.
- Metadados de compartilhamento, imagem social, quatro fotos profissionais, vídeo e Instagram preservados. Não foram acrescentadas informações curriculares sem nova confirmação.

### Conferência deste refinamento

As três páginas foram verificadas novamente em 320, 390, 768 e 1440 px, sem transbordamento horizontal. Atalhos internos visíveis em todas as larguras. Filtros testados para as quatro seleções, incluindo acionamento por Enter, contagem de resultados e recuperação de artigo por fragmento. Menu conferido com abertura e fechamento por Escape; atalho Formação levou a `sobre/#formacao`. Nenhum erro de console capturado, nenhum iframe inicial e nenhuma reprodução de áudio iniciada.

| Área | Avaliação atual | Próxima oportunidade |
| --- | --- | --- |
| Navegação | Mais direta | Acompanhar se o acervo futuro exige busca; manter o menu curto |
| Publicações | Mais fáceis de explorar | Curadoria e atualização periódica de conteúdos |
| Leitura no celular | Mais concisa | Avaliar em aparelhos físicos e com usuários |
| Design | Identidade preservada | Validar monograma definitivo com a cliente |
| Acessibilidade | Melhor apoio à navegação | Auditoria com leitor de tela ainda pendente; não se trata de certificação |
| Conteúdo e compartilhamento | Preservados | Validação curricular da cliente e conferências editoriais pendentes continuam registradas |

## Refinamento de redação, acesso e legibilidade

Aplicado após o pedido para executar as melhorias da avaliação, deixando a voz pessoal da Jenise para uma etapa posterior.

- Os três destaques da inicial abrem diretamente o artigo no Correio Braziliense, Migalhas ou LexLegal. Título e chamada de leitura têm o mesmo destino. O acesso ao catálogo completo permanece separado, evitando uma etapa intermediária obrigatória.
- Removidos trechos repetidos na apresentação, na biografia e nas contribuições. Os fatos, períodos e designações profissionais foram preservados, sem criar falas em primeira pessoa ou acrescentar experiências não confirmadas.
- A seção final de temas da biografia foi condensada em uma chamada ao acervo. O fragmento `sobre/#atuacao` foi mantido para preservar endereços anteriores.
- A newsletter passou a ter uma chamada explícita para acompanhar as próximas edições, explicando que a inscrição ocorre no LinkedIn. O botão leva à página da newsletter; não há inscrição automática no site.
- Datas e identificação dos veículos passaram a 14 px, e os rótulos de assunto, a 13 px. Espaçamentos entre seções da inicial e da biografia foram reduzidos no celular sem remover conteúdos curriculares.
- A inicial observada em 390 px ficou em aproximadamente 5,8 mil px de altura, ante cerca de 6,2 mil da revisão anterior, com expansões fechadas e mídias não carregadas. É uma medida de extensão local, não de velocidade.
- Mantidos as quatro fotos, as capas, os logotipos sociais e os metadados de compartilhamento. A marca definitiva e as credenciais que aguardam confirmação não foram alteradas por suposição.

Verificação: três páginas em 320, 390, 768 e 1440 px, sem transbordamento horizontal, com um h1 por página. Tamanho de 14 px dos metadados confirmado no navegador; seis links dos três destaques conferidos contra as fontes do catálogo. Recursos locais e fragmentos internos passaram pela conferência estática. Nenhum áudio foi reproduzido.

### Notas após esta revisão

Notas editoriais e de experiência de uso, não resultados automáticos ou certificações. Nota global de julgamento: **8,6/10**. A personalização da escrita depende do material que a cliente fornecerá depois.

| Área | Nota | Observação |
| --- | --- | --- |
| Identidade visual | 8,7 | Coerência preservada; monograma definitivo pendente |
| Organização | 8,8 | Três páginas, com menos repetição entre seções |
| Escrita e clareza | 8,5 | Mais concisa e direta; voz pessoal ainda será incorporada |
| Navegação | 9,0 | Destaques levam à fonte, catálogo e atalhos permanecem acessíveis |
| Celular | 8,7 | Textos auxiliares maiores e inicial mais curta; falta uso em aparelho físico |
| Conteúdo e credibilidade | 8,5 | Fatos preservados; validações curriculares continuam pendentes |
| Acessibilidade | 7,9 | Legibilidade aprimorada; auditoria com leitor de tela ainda não realizada |
| Busca e compartilhamento | 8,0 | Estrutura preservada; sem nova aferição de indexação ou desempenho em campo |
