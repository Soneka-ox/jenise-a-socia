# Jenise Carvalho · A Sócia

Site pessoal e editorial de Jenise Carvalho · A Sócia. Trajetória profissional, gestão e governança na advocacia, artigos, newsletter e vídeo.

## Prévia local

Abra `index.html` diretamente no navegador. Para servir por HTTP com Node instalado: `node scripts/preview.cjs`. Acesse `http://127.0.0.1:4173/` e encerre com Ctrl+C. A prévia pertence a este computador e não é uma URL pública de divulgação.

Não há dependências, build, formulário, analytics ou fontes externas. YouTube e Instagram são incorporados somente após clique; links alternativos abrem nas plataformas de origem. Os conteúdos incorporados dependem de internet e das regras de cada plataforma. Para testar o player, use a prévia por HTTP: arquivos abertos diretamente podem não fornecer a identificação de origem exigida pelo YouTube.

## Organização

Apresentação → Sobre Jenise → Trajetória e formação → Temas → Publicações (newsletter e artigos) → Vídeo e Instagram → Canais profissionais.

- `index.html`: conteúdo e estrutura.
- `assets/site.css`: cores, tipografia e adaptação de telas.
- `assets/site.js`: menu móvel e fechamento pelo teclado/clique externo.
- `assets/marca.svg`: monograma provisório.
- `docs/briefing.md` e `docs/materiais.md`: informações e materiais pendentes.
- `docs/estudo-design-conteudo.md`: pesquisa que orientou esta revisão.
- `docs/avaliacao-2026-10-25.md`: avaliação e verificações da versão atual.

## Manutenção

A paleta está no início de `assets/site.css`: `--bronze` para texto e `--accent` para detalhes decorativos. Manter o contraste também em hover e foco. A seleção de artigos é manual, com título, data e origem; não há sincronização automática nem reprodução integral de publicações.

As descrições dos temas ficam visíveis e seus links apontam para artigos relacionados. Os fragmentos antigos `#abordagem` e `#leituras` continuam disponíveis dentro de Publicações.

As quatro fotos profissionais enviadas foram incorporadas em assets/jenise-*.jpg: abertura, biografia, liderança e autoria da newsletter. Os recortes são de apresentação (CSS); arquivos originais preservados. Confirmar a biografia e os contatos antes da divulgação. Serviços, palestras ou mentorias só devem entrar depois de confirmados. Materiais ainda não selecionados ficam em `materiais-cliente/`, ignorado pelo Git; arquivos aprovados para o site entram em `assets/`.

## Publicação e endereços

- Repositório público: https://github.com/Soneka-ox/jenise-a-socia
- Endereço temporário: https://soneka-ox.github.io/jenise-a-socia/
- GitHub Pages: branch main, pasta raiz, arquivos estáticos com .nojekyll.
- Página inicial: index.html; seções com âncoras sobre, trajetoria, atuacao, publicacoes, conversas e contato.
- Página de erro: 404.html.
- Endereço futuro: https://www.jeniseasocia.com.br/ (ainda não configurado).

O nome do repositório foi mantido por ser descritivo e próximo da marca. A futura transferência para a conta Jeniseasocia deverá preservar os arquivos e o histórico. Confirmar o endereço efetivo e a disponibilidade dessa conta no momento da transferência.

Na migração, revisar Pages, canonical e Open Graph em index.html, sitemap.xml, robots.txt, o endereço exibido na descrição do repositório e este README. Se o nome do repositório mudar, atualizar também o caminho de retorno da página 404. Configurar o domínio personalizado e o DNS apenas quando o domínio estiver disponível para ativação. Nenhum CNAME antecipado foi adicionado.

A publicação mantém os materiais originais de cliente e qa fora do Git. Os metadados passam a permitir indexação; somente a página de erro permanece noindex.
