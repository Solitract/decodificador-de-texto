function criptografar() {
    let texto = document.getElementById("texto").value;
    let textoCripto = texto
        .replace(/e/g, "enter")
        .replace(/i/g, 'ines')
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    document.getElementById('mensagem').value = textoCripto;

    if (texto = document.getElementById("texto").value.length != 0) {
        texto = document.getElementById("texto").value = textoCripto;
        document.getElementById('texto').style.display = 'none';
        document.getElementById('titulo-mensagem').textContent = "Texto criptografado!";
        document.getElementById('paragrafo').textContent = "";
        document.getElementById("cripto") = './assents/hat kid.png';
    } else {
        document.getElementById('titulo-mensagem').textContent = "Nenhuma mensagem encontrada";
        document.getElementById('paragrafo').textContent = "Digite o texto que você deseja criptografar ou descriptografar";
        lupa.src = './assents/hat kid.png';
        alert("Digite algum texto :)");
    }
}

function descriptografar() {
    let texto = document.getElementById("texto").value;
    let textoCripto = texto
        .replace(/enter/g, "e")
        .replace(/ines/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    document.getElementById('mensagem').value = textoCripto

    if (texto = document.getElementById("texto").value.length != 0) {
        texto = document.getElementById("texto").value = textoCripto;
        document.getElementById('texto').style.display = 'none';
        document.getElementById('titulo-mensagem').textContent = "Texto descriptografado!";
        document.getElementById('paragrafo').textContent = "";
        document.getElementById("cripto") = './assents/hat kid.png';
    }
    else {
        document.getElementById('titulo-mensagem').textContent = "Nenhuma mensagem encontrada";
        document.getElementById('paragrafo').textContent = "Digite o texto que você deseja criptografar ou descriptografar";
        lupa.src = './assents/hat kid.png';
        alert("Digite algum texto :)");
    }
}

function copiarTexto() {
    let textoCopiado = document.getElementById("mensagem").value;
    if (navigator.clipboard.writeText(textoCopiado)) {
        document.getElementById('bt-copiar').textContent = "Copiado";
        document.getElementById('texto').style.display = 'block';
    };

    setTimeout(function () {
        document.getElementById('bt-copiar').textContent = "Copiar";
        document.getElementById('mensagem').style.display = 'block';
    }, 3000);
} 
