const chaves = {'e': 'enter',
'i': 'imes',
'a': 'ai',
'o': 'ober',
'u': 'ufat'
};

const form = document.getElementById('form');
const input = document.getElementById('input');
const output = document.getElementById('output');
const copiar = document.getElementById('copiar');


form.addEventListener('submit', (e) => {
e.preventDefault();
const acao = document.querySelector('input[name="acao"]:checked').value;
output.innerText = acao === 'codificar' ? codificar(input.value) : decodificar(input.value);
});

copiar.addEventListener('click', () => {
if (output.innerText.trim() === '') {
    alert('Preencha o campo para ser copiado!')
} else {
    navigator.clipboard.writeText(output.innerText)
    .then(() => {
        alert('Texto copiado com sucesso!');
    })  
    .catch(err => {
        alert('Erro ao copiar texto: ', err);
    }); 
}
})

const codificar = (texto) => [...texto].map((char) => chaves[char] || char).join('');

const decodificar = (texto) => {
let decodificado = texto;
for (let chave in chaves) {
    decodificado = decodificado.split(chaves[chave]).join(chave);
}
return decodificado;
}

