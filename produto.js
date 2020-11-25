class Produto {
    constructor() {
        this.produtos = localStorage.getItem('tbProdutos') === null
        ? []
        : JSON.parse(localStorage.getItem('tbProdutos'))
    }

    salva(produto){
    if(document.getElementById('codigo').getAttribute('disabled')==='disabled'){
        this.apaga(produto.codigo)
    }
        this.produtos.push(produto) 
        localStorage.setItem('tbProdutos', JSON.stringify(this.produtos))
        alert('Produto salvo com sucesso!')

        this.atualiza()
    }

    apaga(codigo){
        let index = this.produtos.findIndex(produto => produto.codigo == codigo)
        this.produtos.splice(index, 1) 
 
        localStorage.setItem('tbProdutos',JSON.stringify(this.produtos))
        produto.atualiza()
    }

    edita(produto){
        document.getElementById('codigo').setAttribute('disabled','disabled')
        document.getElementById('codigo').value = produto.codigo
        document.getElementById('nomeproduto').value = produto.nomeproduto
        document.getElementById('precocusto').value = produto.precocusto
        document.getElementById('lucro').value = produto.lucro
        document.getElementById('precovenda').value = produto.precovenda
        document.getElementById('icms').value = produto.icms
        document.getElementById('ncm').value = produto.ncm
        document.getElementById('unidademedida').value = produto.unidademedida
        document.getElementById('marca').value = produto.marca
        document.getElementById('categoria').value = produto.categoria
        document.getElementById('origem').value = produto.origem
        document.getElementById('codigobarra').value = produto.codigobarra
    }
    
    lista(){
        const listagem = this.produtos.map((produto) => (
            `<tr>
            <td>${produto.codigo}</td>
            <td>${produto.nomeproduto}</td>
            <td>${produto.precocusto}</td>
            <td>${produto.lucro}</td>
            <td>${produto.preocovenda}</td>
            <td>${produto.icms}</td>
            <td>${produto.ncm}</td>
            <td>${produto.unidademedida}</td>
            <td>${produto.marca}</td>
            <td>${produto.categoria}</td>
            <td>${produto.origem}</td>
            <td>${produto.codigobarra}</td>
            <td>
                <button id='apagar' onClick='produto.apaga(${produto.codigo})'>
                🗑️Apagar</button>
                <button id='editar' onClick='produto.edita(${JSON.stringify(produto)})'>
                ✏️Editar</button>
            </td>
            </tr>
            `
        ))
        return (`<table border='1' class='paleBlueRows'>
        <caption>Relação dos Produtos</caption>
        <thead>
            <th>Código</th>  
            <th>Nome</th> 
            <th>Preço Custo</th> 
            <th>Lucro %</th> 
            <th>Preço de venda</th>  
            <th>ICMS %</th> 
            <th>NCM - NFE</th>
            <th>Unidade Medida</th>
            <th>Marca</th>
            <th>Categoria</th>
            <th>Origem</th>
            <th>Código de barras</th>
        </thead>
        <tbody>${listagem}</tbody>      
        </table>
        `)
    }

    atualiza(){
        document.getElementById('listagem').innerHTML = produto.lista()
    }
}

const produto = new Produto()

document.getElementById('salvar').onclick = function ()  {
    const registro = {
        codigo: document.getElementById('codigo').value,
        nomeproduto: document.getElementById('nomeproduto').value,
        precocusto: document.getElementById('precocusto').value,
        lucro: document.getElementById('lucro').value,
        precovenda: document.getElementById('precovenda').value,
        icms: document.getElementById('icms').value,
        ncm: document.getElementById('ncm').value,
        unidademedida: document.getElementById('unidademedida').value,
        marca: document.getElementById('marca').value,
        categoria: document.getElementById('categoria').value,
        origem: document.getElementById('origem').value,
        codigobarra: document.getElementById('codigobarra').value
    } 
    produto.salva(registro)
}

window.onload = function(){
    produto.atualiza()
}

document.getElementById('lucro').onchange = function ()  {
    let custo = document.getElementById('precocusto').value
    let lucro = document.getElementById('lucro').value
    let venda = custo+(custo*(lucro/100))
    document.getElementById('precovenda').value = venda.toFixed(2)
    }