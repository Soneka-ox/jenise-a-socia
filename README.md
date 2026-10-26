# Jenise Carvalho · A Sócia

Site pessoal e editorial de Jenise Carvalho · A Sócia. Gestão & Carreira na advocacia, trajetória profissional, artigos, newsletter e conversas nas redes.

## Prévia local

Para servir por HTTP com Node instalado: `node scripts/preview.cjs`. Acesse `http://127.0.0.1:4173/` e encerre com Ctrl+C. O servidor atende também `/sobre/`, `/publicacoes/` e `/links/`. A prévia pertence a este computador e não é uma URL pública de divulgação.

Não há dependências de build, formulário ou analytics. O site principal usa fontes do sistema; a página Links preserva as fontes externas da referência da cliente. O vídeo do YouTube é incorporado após clique. A janela do Instagram usa um iframe nativo com carregamento adiado pelo navegador e aparece ao se aproximar da seção, sem botão de ativação. Links alternativos abrem nas plataformas de origem. Os conteúdos incorporados dependem de internet e das regras de cada plataforma. Para testar o player, use a prévia por HTTP: arquivos abertos diretamente podem não fornecer a identificação de origem exigida pelo YouTube.

## Organização

Quatro páginas: Início, Sobre Jenise, Publicações e Links. A navegação do site completo inclui a página de compartilhamento; Links conserva a composição da referência e tem um atalho de retorno ao site. Nas redes é uma seção da página inicial e reúne vídeo, Instagram e uma prévia oficial de A Sócia no LinkedIn. Todas as páginas preservam os botões de logotipo de Instagram e LinkedIn no fim.

Nas redes abre com as janelas oficiais de Instagram e LinkedIn visíveis juntas: duas colunas no computador e uma no celular. O vídeo e os quatro trechos ficam em uma expansão nativa logo abaixo, disponível também sem JavaScript. Links antigos para o vídeo abrem a expansão correspondente. Fechar a expansão remove o player carregado e restaura a capa, interrompendo a reprodução.

- `index.html`: abertura, apresentação breve, três destaques, janelas de Instagram e LinkedIn, vídeo e trechos.
- A newsletter da inicial aparece uma única vez, dentro de Nas redes, no fragmento preservado `#abordagem`. O iframe exibe uma publicação pública selecionada do LinkedIn; novas edições exigem trocar o post, o link alternativo e o título do iframe. O botão da newsletter continua levando ao acervo de A Sócia.
- `sobre/index.html`: biografia, trajetória, formação, liderança e contribuições.
- `publicacoes/index.html`: onze artigos selecionados, newsletter, entrevistas e menções institucionais.
- `links/index.html`: página de compartilhamento fiel à referência da cliente, com canal, newsletter, artigos e links institucionais. `assets/links.css` e `assets/links.js` controlam os dois temas; o escuro é o padrão, com preferência guardada localmente quando disponível.
- `assets/site.css`: cores, tipografia e adaptação de telas.
- `assets/site.js`: menu móvel e fechamento pelo teclado/clique externo.
- `assets/marca.svg`: ícone do navegador. `marca-monograma.svg` e `marca-assinatura.svg`: versões vetoriais da identidade, com alternativas claras para fundos escuros.
- `docs/briefing.md` e `docs/materiais.md`: informações e materiais pendentes.
- `docs/estudo-design-conteudo.md`: pesquisa que orientou esta revisão.
- `docs/avaliacao-2026-10-25.md`: avaliação e verificações da versão atual.
- `docs/avaliacao-site-tres-paginas-2026-10-25.md`: avaliação da estrutura atual em três páginas, verificações e prioridades futuras.
- `docs/revisao-usabilidade-2026-10-25.md`: revisão mais recente, com fontes, correções de teclado, formação, carregamento e compartilhamento.
- `docs/revisao-nas-redes-2026-10-25.md`: revisão posterior à inclusão das prévias nativas, com atalhos, ajustes em tablet/celular e conferência de textos.
- `docs/refinamento-design-2026-10-25.md`: alinhamentos comuns, hierarquia de títulos, entrada compacta do acervo e abas dos canais.
- `docs/catalogo-publicacoes-2026-10-25.md`: pesquisa de publicações, autoria, datas e itens pendentes de confirmação.

## Manutenção

A paleta está no início de `assets/site.css`: `--bronze` para texto e `--accent` para detalhes decorativos. Manter o contraste também em hover e foco. A seleção de artigos é manual, com título, data e origem; não há sincronização automática nem reprodução integral de publicações.

A seleção de artigos é cronológica e distingue textos assinados de participações como fonte. Formação complementar, períodos de comissões, menções institucionais e trechos do vídeo usam expansão nativa. O antigo `#abordagem` permanece na newsletter da inicial. O JavaScript encaminha `#trajetoria`, `#atuacao`, `#leituras` e os três fragmentos antigos de artigos aos novos destinos. O ConJur tem link de perfil e o artigo de 1º/05/2026, cuja assinatura, data e conteúdo foram confirmados na versão indexada do veículo nesta revisão.

Publicações permite filtrar por gestão/governança, liderança/carreira e tecnologia. Ao acrescentar um artigo, definir seu `data-topic` e atualizar a contagem inicial. O catálogo é inteiramente legível sem JavaScript; os controles de filtro aparecem somente após a inicialização. Links com fragmento revelam artigos que estavam ocultos. Sobre Jenise tem atalhos para trajetória, formação e liderança. As regras do menu principal usam `#navigation`, separadas da `.section-nav`.

Os destaques da inicial abrem diretamente o veículo de origem; manter título e botão apontando para o mesmo artigo. A chamada da newsletter explica que a inscrição ocorre no LinkedIn. Os textos permanecem em terceira pessoa até a inclusão da voz pessoal aprovada pela cliente. Datas e nomes dos veículos usam 14 px para facilitar a leitura.

O primeiro artigo do acervo usa a classe `publication-featured`, com título, data e origem completos. Ao atualizar o destaque, mover essa classe para o artigo escolhido e manter a ordem cronológica. Ela não altera o assunto ou o funcionamento dos filtros. Os eixos de conteúdo usam `--page-width`, `--page-gutter` e `--content-width`; manter cabeçalho, abertura, seções e rodapé alinhados ao ajustar esses valores.

As quatro fotos profissionais enviadas foram incorporadas em assets/jenise-*.jpg: abertura, biografia, liderança e autoria da newsletter. Os recortes são de apresentação (CSS); arquivos originais preservados. Confirmar a biografia e os contatos antes da divulgação. Serviços, palestras ou mentorias só devem entrar depois de confirmados. Materiais ainda não selecionados ficam em `materiais-cliente/`, ignorado pelo Git; arquivos aprovados para o site entram em `assets/`.

## Publicação e endereços

- Repositório público: https://github.com/matheusbdc/jenise-a-socia
- Endereço temporário: https://matheusbdc.github.io/jenise-a-socia/
- GitHub Pages: branch main, pasta raiz, arquivos estáticos com .nojekyll.
- Páginas: index.html, sobre/index.html, publicacoes/index.html e links/index.html, com canonical e metadados próprios.
- Página de erro: 404.html.
- Endereço futuro: https://www.jeniseasocia.com.br/ (ainda não configurado).

O nome do repositório foi mantido por ser descritivo e próximo da marca. A futura transferência para a conta Jeniseasocia deverá preservar os arquivos e o histórico. Confirmar o endereço efetivo e a disponibilidade dessa conta no momento da transferência.

Na migração, revisar Pages, canonical e Open Graph nas quatro páginas, sitemap.xml, robots.txt, o endereço exibido na descrição do repositório e este README. Se o nome do repositório mudar, atualizar também o caminho de retorno da página 404. Configurar o domínio personalizado e o DNS apenas quando o domínio estiver disponível para ativação. Nenhum CNAME antecipado foi adicionado.

A publicação mantém os materiais originais de cliente e qa fora do Git. Os metadados passam a permitir indexação; a página de erro e a galeria de demonstração permanecem noindex.

## Identidade e compartilhamento

Guia: docs/guia-visual-editorial.md. Capa do vídeo: assets/capa-video-casa-capta-v1.jpg. Imagem Open Graph/Twitter Card: assets/jenise-a-socia-compartilhar-v3.jpg (1200 × 630), alinhada a Gestão & Carreira. A versão anterior permanece disponível para links existentes. Atualizar os metadados de imagem e a versão do arquivo ao substituir a arte. Manter origem, título e crédito do episódio.

O menu fecha quando o foco sai de seus controles; o atalho de conteúdo transfere o foco para main. O quadro de formação acompanha a rolagem normal para continuar acessível em janelas baixas. A foto de abertura da biografia usa carregamento imediato. O foco dos links sobre o fundo escuro usa a cor clara da paleta.

## Página de links e canal do Instagram

A revisão de 26/10/2026 está em `docs/pagina-links-2026-10-26.md`. A Sala da Sócia aparece em Nas redes e em Links; o destino do canal e sua frequência vêm da página pública da cliente. A newsletter é apresentada como quinzenal. A página Links usa setas e controles de tema em SVG, e o degradê da foto acompanha o fundo claro ou escuro. Atualizações de artigos continuam sendo manuais.

## Demonstrações do projeto

Galeria: https://matheusbdc.github.io/jenise-a-socia/apresentacao/. O site completo e a página Links têm apresentações próprias em horizontal, feed e stories, com capturas reais da revisão publicada em 26/10/2026. São seis MP4/H.264, a 30 fps, sem faixa de áudio, com capas e pacotes de download separados. A rolagem é animada dentro dos mockups, conforme informado na galeria.

Os vídeos do site têm 60, 36 e 15 segundos; os de Links, 36, 30 e 15 segundos. A galeria permanece acessível pelo link, com `noindex`, fora do menu principal. Registro das capturas e das verificações em `docs/videos-demonstracao-2026-10-26.md`; materiais de produção e de conferência ficam em `qa/`, fora da publicação.
