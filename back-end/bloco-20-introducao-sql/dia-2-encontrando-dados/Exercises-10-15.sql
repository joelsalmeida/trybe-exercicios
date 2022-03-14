-- Escreva uma query para exibir o nome e as horas dos três projetos com a maior quantidade de horas.
SELECT Name, Hours FROM Projects ORDER BY Hours DESC LIMIT 3;

-- Escreva uma query para exibir o código de todos os projetos da tabela AssignedTo sem que haja repetições.
SELECT DISTINCT Project FROM AssignedTo;

-- Escreva uma query para exibir o nome do projeto com maior quantidade de horas.
SELECT Name AS 'First_longest_project' FROM Projects ORDER BY Hours DESC LIMIT 1;

-- Escreva uma query para exibir o nome do segundo projeto com menor quantidade de horas.
SELECT Name AS 'Second_longest_project' FROM Projects ORDER BY Hours DESC LIMIT 1 OFFSET 1;

-- Escreva uma query para exibir todas as informações dos cinco projetos com a menor quantidade de horas.
SELECT * FROM Projects ORDER BY Hours LIMIT 5;

-- Escreva uma query que exiba a string "Existem Number cientistas na tabela Scientists.",
-- em que Number se refira a quantidade de cientistas.
SELECT concat('Existem ', count(Name), ' cientistas na tabela Scientists') FROM Scientists;