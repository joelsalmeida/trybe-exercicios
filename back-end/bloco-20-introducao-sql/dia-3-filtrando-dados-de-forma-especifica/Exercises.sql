-- Escreva uma query para exibir todas as peças que começam com GR.
SELECT * FROM Pecas WHERE name LIKE 'Gr%';

-- Escreva uma query para exibir todos os fornecimentos que contenham a peça com code 2.
-- Organize o resultado por ordem alfabética de fornecedor.
SELECT * FROM Fornecimentos WHERE peca = 2
ORDER BY Fornecedor;

-- Escreva uma query para exibir as peças, preço e fornecedor de todos os fornecimentos
-- em que o código do fornecedor tenha a letra N .
SELECT peca, Preco, Fornecedor FROM Fornecimentos WHERE Fornecedor LIKE '%N%';

-- Escreva uma query para exibir todas as informações dos fornecedores que são empresas limitadas (LTDA).
-- Ordene os resultados em ordem alfabética decrescente.
SELECT * FROM Fornecedores WHERE name LIKE '%LTDA'
ORDER BY name DESC;

-- Escreva uma query para exibir o número de empresas (fornecedores) que contém a letra F no código.
SELECT count(*) AS 'Fornecedores_com_F' FROM Fornecedores WHERE code LIKE '%F%';

-- Escreva uma query para exibir os fornecimentos onde as peças custam entre R$15,00 e $40,00.
-- Ordene os resultados por ordem crescente.
SELECT * FROM PecasFornecedores.Fornecimentos WHERE Preco BETWEEN 15 AND 40
ORDER BY Preco DESC;

-- Escreva uma query para exibir o número de vendas feitas entre o dia 15/04/2018 e o dia 30/07/2019.
SELECT count(*) AS '15/04/2018 - 30/07/2019' FROM Vendas
WHERE DATE(order_date) BETWEEN '2018/04/15' AND '2019/07/30';