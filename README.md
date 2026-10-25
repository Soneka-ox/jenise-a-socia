# Jenise Carvalho · A Sócia

Site pessoal e editorial de Jenise Carvalho · A Sócia. Trajetória profissional, gestão e governança na advocacia, artigos, newsletter e vídeo.

## Prévia local

Para servir por HTTP com Node instalado: `node scripts/preview.cjs`. Acesse `http://127.0.0.1:4173/` e encerre com Ctrl+C. O servidor atende também `/sobre/` e `/publicacoes/`. A prévia pertence a este computador e não é uma URL pública de divulgação.

Não há dependências de build, formulário, analytics ou fontes externas. O vídeo do YouTube é incorporado após clique. A janela do Instagram usa um iframe nativo com carregamento adiado pelo navegador e aparece ao se aproximar da seção, sem botão de ativação. Links alternativos abrem nas plataformas de origem. Os conteúdos incorporados dependem de internet e das regras de cada plataforma. Para testar o player, use a prévia por HTTP: arquivos abertos diretamente podem não fornecer a identificação de origem exigida pelo YouTube.

## Organização

Três páginas com navegação compartilhada: Início, Sobre Jenise e Publicações. Nas redes é uma seção da página inicial e reúne vídeo, Instagram e uma prévia oficial de A Sócia no LinkedIn. Todas as páginas preservam os botões de logotipo de Instagram e LinkedIn no fim.

- `index.html`: abertura, apresentação breve, três destaques, newsletter, vídeo e Instagram.
- A newsletter da inicial aparece uma única vez, dentro de Nas redes, no fragmento preservado `#abordagem`. O iframe exibe uma publicação pública selecionada do LinkedIn; novas edições exigem trocar o post, o link alternativo, o título e a data. O botão da newsletter continua levando ao acervo de A Sócia.
- `sobre/index.html`: biografia, trajetória, formação, liderança e contribuições.
- `publicacoes/index.html`: dez artigos selecionados, newsletter, entrevistas e menções institucionais.
- `assets/site.css`: cores, tipografia e adaptação de telas.
- `assets/site.js`: menu móvel e fechamento pelo teclado/clique externo.
- `assets/marca.svg`: monograma provisório.
- `docs/briefing.md` e `docs/materiais.md`: informações e materiais pendentes.
- `docs/estudo-design-conteudo.md`: pesquisa que orientou esta revisão.
- `docs/avaliacao-2026-10-25.md`: avaliação e verificações da versão atual.
- `docs/avaliacao-site-tres-paginas-2026-10-25.md`: avaliação da estrutura atual em três páginas, verificações e prioridades futuras.
- `docs/revisao-usabilidade-2026-10-25.md`: revisão mais recente, com fontes, correções de teclado, formação, carregamento e compartilhamento.
- `docs/catalogo-publicacoes-2026-10-25.md`: pesquisa de publicações, autoria, datas e itens pendentes de confirmação.

## Manutenção

A paleta está no início de `assets/site.css`: `--bronze` para texto e `--accent` para detalhes decorativos. Manter o contraste também em hover e foco. A seleção de artigos é manual, com título, data e origem; não há sincronização automática nem reprodução integral de publicações.

A seleção de artigos é cronológica e distingue textos assinados de participações como fonte. Formação complementar, períodos de comissões, menções institucionais e trechos do vídeo usam expansão nativa. O antigo `#abordagem` permanece na newsletter da inicial. O JavaScript encaminha `#trajetoria`, `#atuacao`, `#leituras` e os três fragmentos antigos de artigos aos novos destinos. O ConJur tem link de perfil; o artigo localizado apenas no índice não foi incluído como conteúdo integralmente conferido.

Publicações permite filtrar por gestão/governança, liderança/carreira e tecnologia. Ao acrescentar um artigo, definir seu `data-topic` e atualizar a contagem inicial. O catálogo é inteiramente legível sem JavaScript; os controles de filtro aparecem somente após a inicialização. Links com fragmento revelam artigos que estavam ocultos. Sobre Jenise tem atalhos para trajetória, formação e liderança. As regras do menu principal usam `#navigation`, separadas da `.section-nav`.

Os destaques da inicial abrem diretamente o veículo de origem; manter título e botão apontando para o mesmo artigo. A chamada da newsletter explica que a inscrição ocorre no LinkedIn. Os textos permanecem em terceira pessoa até a inclusão da voz pessoal aprovada pela cliente. Datas e nomes dos veículos usam 14 px para facilitar a leitura.

As quatro fotos profissionais enviadas foram incorporadas em assets/jenise-*.jpg: abertura, biografia, liderança e autoria da newsletter. Os recortes são de apresentação (CSS); arquivos originais preservados. Confirmar a biografia e os contatos antes da divulgação. Serviços, palestras ou mentorias só devem entrar depois de confirmados. Materiais ainda não selecionados ficam em `materiais-cliente/`, ignorado pelo Git; arquivos aprovados para o site entram em `assets/`.

## Publicação e endereços

- Repositório público: https://github.com/Soneka-ox/jenise-a-socia
- Endereço temporário: https://soneka-ox.github.io/jenise-a-socia/
- GitHub Pages: branch main, pasta raiz, arquivos estáticos com .nojekyll.
- Páginas: index.html, sobre/index.html e publicacoes/index.html, com canonical e metadados próprios.
- Página de erro: 404.html.
- Endereço futuro: https://www.jeniseasocia.com.br/ (ainda não configurado).

O nome do repositório foi mantido por ser descritivo e próximo da marca. A futura transferência para a conta Jeniseasocia deverá preservar os arquivos e o histórico. Confirmar o endereço efetivo e a disponibilidade dessa conta no momento da transferência.

Na migração, revisar Pages, canonical e Open Graph nas três páginas, sitemap.xml, robots.txt, o endereço exibido na descrição do repositório e este README. Se o nome do repositório mudar, atualizar também o caminho de retorno da página 404. Configurar o domínio personalizado e o DNS apenas quando o domínio estiver disponível para ativação. Nenhum CNAME antecipado foi adicionado.

A publicação mantém os materiais originais de cliente e qa fora do Git. Os metadados passam a permitir indexação; somente a página de erro permanece noindex.

## Identidade e compartilhamento

Guia: docs/guia-visual-editorial.md. Capa do vídeo: assets/capa-video-casa-capta-v1.jpg. Imagem Open Graph/Twitter Card: assets/jenise-a-socia-compartilhar-v2.jpg (1200 × 630), alinhada a Gestão & Carreira. A versão anterior permanece disponível para links existentes. Atualizar os metadados de imagem e a versão do arquivo ao substituir a arte. Manter origem, título e crédito do episódio.

O menu fecha quando o foco sai de seus controles; o atalho de conteúdo transfere o foco para main. O quadro de formação acompanha a rolagem normal para continuar acessível em janelas baixas. A foto de abertura da biografia usa carregamento imediato. O foco dos links sobre o fundo escuro usa a cor clara da paleta.
