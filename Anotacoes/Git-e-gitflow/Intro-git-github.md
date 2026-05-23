# PT Dev front-end
## Introdução ao git e github

#### Comandos git novos
- git status: vê o status no ciclo de vida de cada arquivo. Sendo eles:
    - Untracked: arquivo foi criado após o último commit e não foi adicionado ao próximo commit
    - Unmodified: arquivo não foi modificado desde o último commit.
    - Modified: arquivo foi modificado desde p último commit
    - Staged: as mudanças do arquivo foram adicionadas ao commit
- git log: mostra o id do commit, o autor e a data
    - --decorate: mostra mais detalhes
    - --graph: mostra em forma de gráfico
- git show <id>: mostra com mais detalhes incluindo as mudanças do arquivo
- git diff: mostra as mudanças staged, antes de enviar o commit
- git commit -am: além da mensagem, todos os arquivos são adicionados ao commit
- git reset:
    - --soft: mantém as modificações adicionadas, mas desfaz o commit
    - --mixed: mantém as modificações, mas tira elas do commit e desfaz o commit
    - --hard: retira todas as modificações além de desfazer o commit


### Editor de texto (Vim)
já utilizava o nano, mas já tentei usar o Vim e não consegui, tentarei de novo.
Vim:
- i para dar input
- w para escrever no arquivo
- q para sair