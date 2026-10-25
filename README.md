# Jenise Carvalho · A Sócia

Site pessoal e editorial em desenvolvimento. Apresentação profissional, temas sobre gestão e governança na advocacia e seleção de publicações reais. Conteúdo e identidade ainda sujeitos à validação com Jenise.

## Prévia local

Abra `index.html` diretamente no navegador. Para servir por HTTP com Node instalado: `node scripts/preview.cjs`. Acesse `http://127.0.0.1:4173/` e encerre com Ctrl+C. A prévia pertence a este computador e não é uma URL pública de divulgação.

Não há dependências, build, formulário, analytics ou carregamento de fontes e imagens externas. Links para as redes abrem nas plataformas de origem.

## Organização

Apresentação → Sobre Jenise → Temas → Publicações (newsletter e artigos) → Canais profissionais.

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

O retrato permanece provisório; a foto original será enviada depois. Confirmar a biografia e os contatos antes da divulgação. Serviços, palestras ou mentorias só devem entrar depois de confirmados. Materiais ainda não selecionados ficam em `materiais-cliente/`, ignorado pelo Git; arquivos aprovados para o site entram em `assets/`.

## Repositório e hospedagem

Repositório **público**: https://github.com/Soneka-ox/jenise-a-socia . Conta Soneka-ox, para transferência futura. GitHub Pages e hospedagem cloud permanecem desativados nesta etapa.

Antes de publicar o site: aprovar o conteúdo e as imagens, definir o endereço oficial, revisar necessidades de privacidade conforme os recursos escolhidos, atualizar metadados de compartilhamento e remover o bloqueio de indexação apenas quando a versão estiver pronta. A configuração atual mantém `noindex, nofollow` e `robots.txt` com `Disallow: /`.
