const frase = 'JavaScript'

const fraseNova = frase.replace(/a/, 'B')

console.log(fraseNova)

/// Usanbdo o regex para validar CEP

// para iniciar uma consulta regex basta colorar //g;
// O \d{5} é a sequencia de digitos.
// O [-\s] esta selecionando o "-" e o espaço, a interrogação "?" torna a expressão opcional
const regexCEP = /\d{5}[-\s]?\d{3}/g

const ceps = [
  '76890-000',
  '75880 000',
  '79870000'
]

for(cep of ceps) {
  console.log(cep, cep.match(regexCEP))
}

////Usando o regex para validar CPF

/* neste casa usamos o "?:" para não selecionar 
  grupo e utilizamos também (?:\d{3}[.-]?){3},
  desta forma evitamos de repetir a mesma expressão.
  */

const regexCPF = /(?:\d{3}[.-]?){3}\d{2}/g

const cpfs = [
  '123.564.879-58',
  '123-564-879-58',
  '123.564.879.58',
  '123564879-58',
  '12356487958'
]

for(cpf of cpfs) {
  console.log(cpf, cpf.match(regexCPF))
}

////Usando o regex para validar CNPJ

const regexCNPJ = /\d{2}[-.]?(?:\d{3}[-.]?){2}\/?\d{4}[-.]?\d{2}/g

const cnpjs = [
  '23.564.879/1456-58',
  '23-564-879-1546-58',
  '23.564.879/148758',
  '23.564.879.258958',
  '23564879652358',
]

for(cnpj of cnpjs) {
  console.log(cnpj, cnpj.match(regexCNPJ))
}

///Usando o regex para validar Telefone
const regexTelefone = /(?:\+?55\s?)?(?:\(?\d{2}\)?[\s-]?)?\d{4,5}[-\s]?\d{4}/g
const telefones = [
  '+55 69 99245-8752',
  '+55 69 99245 8752',
  '+55 69 992458752',
  '+55 69992458752',
  '+5569992458752',
  '69 99245-8752',
  '69 99245 8752',
  '(69) 99245 8752',
  '(69) 99245-8752',
  '69-99245-8752',
  '69 99245 8752',
  '69992458752',
  '992458752',
  '(69)992458752',
  '99245 8752',
  '9245 8752',
]

for(telefone of telefones) {
  console.log(telefone, telefone.match(regexTelefone))
}

///Usando o regex para validar E-mail
const regexEmail = /[\w.-]+@[\w-]+\.[\w.-]+/gi

const emails = [
  'email@email.com',
  'email@email.com.org',
  'email-email@email.com',
  'email_email@email.com',
  'email.email23@email.com.br',
  'email.email23@empresa-sua.com.br',
  'c@contato.cc',
]

for(email of emails){
  console.log(email, email.match(regexEmail))
}

///Usando o regex para validar Tags


const tags = [
  '<div>Isso é uma div</div>',
  '<div class="ativa">Essa está ativa</div>',
  '<img src="imagem" />',
  '<img src="imagem">',
  '<ul class="ativa">',
  '<li>Essa está ativa</li>',
  '</ul>'
]