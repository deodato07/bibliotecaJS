import fs from 'fs';
import chalk from 'chalk';

function extraiLinks(texto){
    const regex =/\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const capturas = [...texto.matchAll(regex)];
const resultados = capturas.map(captura => ({[captura[1]]: captura[2]}))
return resultados.length !== 0 ? resultados : 'Não há links no Arquivo';
}

function tratarErro(erro) {
    console.log(erro);
  throw new Error(chalk.red(erro.code, "Não há arquivo no diretorio"));
}

// async/await

async function pegaArquivo(caminhoDoArquivo){
    try{
        const encoding = 'utf-8';
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
       return(extraiLinks(texto));
    } catch (erro){
        tratarErro(erro)
    
    }
}
export default pegaArquivo;
