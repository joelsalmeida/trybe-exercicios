-- Escreva uma query para exibir todas as informações de todos os cientistas.
SELECT * FROM Scientists;

-- Escreva uma query para exibir o nome como "Nome do Projeto" e as horas como "Tempo de Trabalho" de cada projeto.
SELECT Name AS 'Nome do Projeto', Hours AS 'Tempo de Trabalho' FROM Projects;

-- Escreva uma query para exibir o nome dos cientistas em ordem alfabética.
SELECT Name FROM Scientists ORDER BY Name;

-- Escreva uma query para exibir o nome dos Projetos em ordem alfabética descendente.
SELECT Name FROM Projects ORDER BY Name DESC;

-- Escreva uma query que exiba a string "O projeto Name precisou de Hours horas para ser concluído." para cada projeto.
SELECT concat('O projeto ', Name, ' precisou de ', Hours, ' horas para ser concluído') FROM Projects;