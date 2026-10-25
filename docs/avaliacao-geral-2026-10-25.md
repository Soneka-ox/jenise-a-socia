# Avaliação geral — Jenise Carvalho · A Sócia

Revisão: 25/10/2026, após a troca de fotos e a padronização dos ícones. Avaliação editorial, visual e técnica de escopo definido; não é pesquisa com usuários nem certificação WCAG ou relatório Lighthouse.

## Alterações desta revisão
A foto em pé de terno branco passou à abertura. O retrato sorrindo, antes usado ali, ocupa a seção de liderança. Os quatro arquivos originais continuam intactos. O enquadramento da abertura preserva cabeça e postura nas larguras observadas. Open Graph acompanha a nova foto principal.

Setas, menu e reprodução usam SVG com desenho consistente; não há emojis nem caracteres de ícones dependentes da fonte no HTML principal. No fim da página, os dois botões das redes exibem somente os símbolos de Instagram e LinkedIn. Os nomes permanecem disponíveis por aria-label e title; os alvos medem 56 × 56 px. O foco dos botões sociais usa cor clara sobre fundo escuro.

## Avaliação por área

| Área | Avaliação | Evidência e limite |
| --- | --- | --- |
| Identidade e design | Boa | Paleta sóbria, fotos reais e tipografia editorial coerentes. O retrato em pé torna a apresentação mais formal. O monograma ainda merece validação como marca definitiva. |
| Organização | Boa, com oportunidade clara | Sequência compreensível entre apresentação, trajetória, temas, publicações, vídeo e redes. No celular, carreira e formação ocupam bastante espaço antes dos conteúdos editoriais. |
| Escrita e conteúdo | Boa | Biografia específica, fontes profissionais identificáveis e ausência de promessas comerciais não confirmadas. Alguns títulos são expressivos, mas poderiam ser mais diretos. Cargos e credenciais continuam dependentes da validação da cliente. |
| Celular | Funcional, porém extenso | Sem transbordamento horizontal em 320, 390, 768 e 1440 px. Em 390 px, a página tem aproximadamente 11,3 mil px de altura; trajetória e vídeo concentram a maior extensão. Não houve teste em aparelhos físicos. |
| Acessibilidade | Base consistente | Um h1, hierarquia de títulos, texto alternativo, skip link, nomes nos controles e links internos válidos. Os logotipos têm identificação acessível. Falta auditoria com leitor de tela, ampliação e uso prolongado por teclado. |
| Desempenho | Estrutura favorável | Sem bibliotecas, fontes externas ou embeds antes do clique. Fotos somam aproximadamente 626 KiB; a nova imagem de abertura tem cerca de 242 KiB. Não foram medidos Core Web Vitals em campo. |
| Funcionamento | Verificado no escopo | Menu, âncoras e imagens conferidos. Integrações permanecem sob demanda; esta revisão não reproduziu áudio. Disponibilidade do Instagram e YouTube depende das plataformas. |
| Busca e compartilhamento | Base preparada | Título, descrição, canonical, Open Graph, sitemap e página 404 presentes. A migração para o domínio próprio exigirá atualizar os endereços e conferir redirecionamento e indexação. |

## Contraste medido nas cores definidas
Texto principal sobre o fundo claro: 10,90:1. Texto secundário: 5,55:1. Bronze em fundo claro: 6,02:1. Símbolos sociais em fundo escuro: 10,92:1. Contorno de foco dos botões sociais: 5,46:1. São medidas de pares sólidos de cor; não substituem inspeção de imagens, estados e controles externos.

## Melhorias sugeridas, por prioridade

1. **Encurtar a experiência no celular.** Manter os marcos principais da carreira visíveis e colocar os detalhes em uma expansão claramente identificada. Reduzir a altura necessária para chegar a publicações e vídeo sem apagar a trajetória.
2. **Definir o objetivo principal.** Para um site editorial, manter leitura e newsletter como ações centrais. Se houver uma finalidade comercial aprovada depois, definir oferta e canal profissional antes de acrescentar novos botões ou formulários.
3. **Dar acesso mais direto ao vídeo.** Um acesso curto em Conteúdos pode melhorar a descoberta; evitar acrescentar muitos itens ao cabeçalho.
4. **Validar marca e redação final.** Aprovar monograma, designação profissional, formação IBGC e a seleção de instituições. Consolidar um guia de imagem, cores e ícones para futuras atualizações.
5. **Otimizar imagens quando houver medição que justifique.** Preparar versões adequadas às telas, preservando a qualidade e os originais. Não apresentar uma nota de desempenho sem medições próprias.
6. **Preparar a migração com cuidado.** Depois de definir conta e domínio, conferir novos endereços, canonical, sitemap, Open Graph, página de erro e redirecionamentos disponíveis; acompanhar a indexação.

## Referências técnicas
- W3C: nomes e alternativas para controles visuais — https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html
- W3C: tamanho e separação de alvos — https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html
- Google Search Central: migração de URLs — https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes

As sugestões de organização e posicionamento são julgamento editorial aplicado ao site, não resultados de teste com visitantes. Esta atualização implementou somente a troca de fotografias, a padronização dos ícones e os ajustes necessários aos botões; as mudanças estruturais acima são propostas para uma próxima revisão.
