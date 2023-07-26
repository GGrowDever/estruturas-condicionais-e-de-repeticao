let somaIdade = 0;
let quantidadeAlunos = 0;

while (true) {
	let idade = parseInt(prompt('Digite a idade do Aluno:'));

	if (idade === 999) {
		break;
	}

	somaIdade += idade;
	quantidadeAlunos++;
}

if (quantidadeAlunos === 0) {
	console.log('Nenhum aluno na turma.');
} else {
	let mediaIdade = somaIdade / quantidadeAlunos;
	console.log('Quantidade de alunos na turma:', quantidadeAlunos);
	console.log('Média de idade da turma:', mediaIdade);
}
