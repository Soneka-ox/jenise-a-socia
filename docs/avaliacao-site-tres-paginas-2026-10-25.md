# Avaliação da atualização — três páginas

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
3. Acrescentar novos artigos pela curadoria manual; considerar filtros quando o volume realmente dificultar a localização. Não criar páginas vazias por veículo.
4. Fazer auditoria com leitor de tela e aferição de desempenho em uso real quando houver tráfego.
5. Na transferência para Jeniseasocia e no domínio próprio, atualizar canonical, sitemap, Open Graph, robots e destino da página 404. Domínio ainda não ativado nesta entrega.

Referências editoriais detalhadas: `catalogo-publicacoes-2026-10-25.md`. Análise que orientou a organização: `analise-organizacao-fontes-2026-10-25.md`. Nenhum artigo externo foi reproduzido integralmente.
