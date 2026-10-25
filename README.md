# Jenise Carvalho · A Sócia

Site pessoal e editorial de Jenise Carvalho · A Sócia. Trajetória profissional, gestão e governança na advocacia, artigos, newsletter e vídeo.

## Prévia local

Para servir por HTTP com Node instalado: `node scripts/preview.cjs`. Acesse `http://127.0.0.1:4173/` e encerre com Ctrl+C. O servidor atende também `/sobre/` e `/publicacoes/`. A prévia pertence a este computador e não é uma URL pública de divulgação.

Não há dependências, build, formulário, analytics ou fontes externas. YouTube e Instagram são incorporados somente após clique; links alternativos abrem nas plataformas de origem. Os conteúdos incorporados dependem de internet e das regras de cada plataforma. Para testar o player, use a prévia por HTTP: arquivos abertos diretamente podem não fornecer a identificação de origem exigida pelo YouTube.

## Organização

Três páginas com navegação compartilhada: Início, Sobre Jenise e Publicações. Vídeo permanece como uma seção da página inicial. Todas as páginas preservam os botões de logotipo de Instagram e LinkedIn no fim.

- `index.html`: abertura, apresentação breve, três destaques, newsletter, vídeo e Instagram.
- `sobre/index.html`: biografia, trajetória, formação, liderança e contribuições.
- `publicacoes/index.html`: dez artigos selecionados, newsletter, entrevistas e menções institucionais.
- `assets/site.css`: cores, tipografia e adaptação de telas.
- `assets/site.js`: menu móvel e fechamento pelo teclado/clique externo.
- `assets/marca.svg`: monograma provisório.
- `docs/briefing.md` e `docs/materiais.md`: informações e materiais pendentes.
- `docs/estudo-design-conteudo.md`: pesquisa que orientou esta revisão.
- `docs/avaliacao-2026-10-25.md`: avaliação e verificações da versão atual.
- `docs/avaliacao-site-tres-paginas-2026-10-25.md`: avaliação da estrutura atual em três páginas, verificações e prioridades futuras.
- `docs/catalogo-publicacoes-2026-10-25.md`: pesquisa de publicações, autoria, datas e itens pendentes de confirmação.

## Manutenção

A paleta está no início de `assets/site.css`: `--bronze` para texto e `--accent` para detalhes decorativos. Manter o contraste também em hover e foco. A seleção de artigos é manual, com título, data e origem; não há sincronização automática nem reprodução integral de publicações.

A seleção de artigos é cronológica e distingue textos assinados de participações como fonte. Formação complementar, períodos de comissões, menções institucionais e trechos do vídeo usam expansão nativa. O antigo `#abordagem` permanece na newsletter da inicial. O JavaScript encaminha `#trajetoria`, `#atuacao`, `#leituras` e os três fragmentos antigos de artigos aos novos destinos. O ConJur tem link de perfil; o artigo localizado apenas no índice não foi incluído como conteúdo integralmente conferido.

Publicações permite filtrar por gestão/governança, liderança/carreira e tecnologia. Ao acrescentar um artigo, definir seu `data-topic` e atualizar a contagem inicial. O catálogo é inteiramente legível sem JavaScript; os controles de filtro aparecem somente após a inicialização. Links com fragmento revelam artigos que estavam ocultos. Sobre Jenise tem atalhos para trajetória, formação e liderança. As regras do menu principal usam `#navigation`, separadas da `.section-nav`.

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

Guia: docs/guia-visual-editorial.md. Capa do vídeo: assets/capa-video-casa-capta-v1.jpg. Imagem Open Graph/Twitter Card: assets/jenise-a-socia-compartilhar-v1.jpg (1200 × 630). Atualizar os metadados de imagem e a versão do arquivo ao substituir a arte. Manter origem, título e crédito do episódio.
