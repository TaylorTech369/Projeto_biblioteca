
o que significa cada um dos tres numeros de 0.0.1?

Essas três partes fazem parte de um padrão chamado Versionamento Semântico (ou SemVer).
No formato MAJOR.MINOR.PATCH, cada número indica o impacto das mudanças feitas no código: 

MAJOR (0.x.x): O primeiro número muda quando você faz alterações gigantes que quebram a compatibilidade com versões anteriores (mudanças "quebrantes"). Enquanto for 0, significa que o app está em desenvolvimento inicial e tudo pode mudar a qualquer momento.
MINOR (x.0.x): O segundo número aumenta quando você adiciona novas funcionalidades, mas sem quebrar o que já existia (funcionalidades compatíveis com versões anteriores).
PATCH (x.x.1): O terceiro número sobe para correções de bugs e pequenos ajustes que não mudam como o app funciona, apenas o tornam mais estável. 

Resumo da lógica:

PATCH: Consertou algo? Aumenta o terceiro.
MINOR: Criou algo novo? Aumenta o segundo (e zera o terceiro).
MAJOR: Mudou tudo ou quebrou algo antigo? Aumenta o primeiro (e zera os outros dois).

---

Nomeclaturas de Commit sendo usados:

Patch: Consertou algo?
Minor: Criou algo novo?
Major: Mudou tudo ou quebrou algo antigo?

Fix → Correção de bugs
Feature → Novas funcionalidades
Breaking Change → Alterações que quebram compatibilidade
Refactor → Mudanças internas no código (sem alterar comportamento)
Performance → Melhorias de desempenho
Docs → Alterações na documentação
Chore → Configuração, build, dependências e ambiente
Test → Criação ou atualização de testes