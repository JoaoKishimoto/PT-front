# Gitflow
## Branches
### Main
- É a branch de produção, nela só haverão merges de hotfix ou release.

### Develop
- É a branch de onde se adiciona quanlquer feature e de onde saem as releases

### Feature
- Geralmente nomeada como feat/nome-do-elemento-adicionado, essa branch é para adicionar coisas à branch Develop. São bifurcações da Develop e voltam para ela.

### Hotfix
- São utilizadas para solucionar um problema encontrado em Produção. Essa branch bifurca de Main e realiza-se o merge com a Develop e a própria Main antes de apagá-la.

### Release
- Utilizada para adicionar uma funcionalidade contida na Develop à produção. É nela que ocorrem os ajustes e correções necessárias para colocar o código em Produção. As mudanças também são mescladas em Develop
---

# Gitflow na prática

### Inicialização
- Com Git

``` bash
git init
git checkout -b develop
```
- Com Gitflow CLI
```bash
git flow init
```

### Features
- Inicialização com  Git
```bash
git checkout develop
git checkout -b <nome-feature>
```
- Inicialização com Git flow CLI
``` bash
git flow feature start <nome-feature>
```
- Finalização com Git
``` bash
git checkout develop
git merge <nome-feature>
```
- Finalização com Git flow CLI
``` bash
git flow feature finish <nome-feature>
```

### Hotfix
- Inicialização com Git
``` bash
git checkout main
git checkout -b <nome-hotfix>
```
- Inicialização com Git flow CLI
``` bash
git flow hotfix start <nome-hotfix>

```
- Finalização com Git
``` bash
git checkout main
git merge <nome-hotfix>
git checkout develop
git merge <nome-hotfix>
git tag <nome-hotfix>
```
- Finalização com Git flow CLI
``` bash
git flow hotfix finish <nome-hotfix>
```

### Release
- Inicialização com Git
``` bash
git checkout develop
git checkout -b release/1.0.0
```
- Inicialização com Git flow CLI
``` bash
git flow release start 1.0.0
```

- Finalização com Git
``` bash
git checkout master 
git merge release/1.0.0 
git checkout develop 
git merge release/1.0.0 
git tag 1.0.0
```
- Finalização com Git flow CLI
``` bash
git flow release finish 1.0.0
```