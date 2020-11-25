class Cliente {
    constructor() {
        this.clientes = localStorage.getItem('tbClientes') === null
        ? []
        : JSON.parse(localStorage.getItem('tbClientes'))
    }

    salva(cliente){

    if(document.getElementById('codigo').getAttribute('disabled')==='disabled'){
        this.apaga(cliente.codigo)
    }
        this.clientes.push(cliente) 
        localStorage.setItem('tbClientes', JSON.stringify(this.clientes))
        alert('Cliente salvo com sucesso!')

        this.atualiza()
    }

    apaga(codigo){
        let index = this.clientes.findIndex(cliente => cliente.codigo == codigo)
        this.clientes.splice(index, 1)

        localStorage.setItem('tbClientes',JSON.stringify(this.clientes))
        cliente.atualiza()
    }

    edita(cliente){
        document.getElementById('codigo').setAttribute('disabled','disabled')
        document.getElementById('codigo').value = cliente.codigo
        document.getElementById('nomerazao').value = cliente.nomerazao
        document.getElementById('rgie').value = cliente.rgie
        document.getElementById('endereco').value = cliente.endereco
        document.getElementById('bairro').value = cliente.bairro
        document.getElementById('cidade').value = cliente.cidade
        document.getElementById('cep').value = cliente.cep
        document.getElementById('uf').value = cliente.uf
        document.getElementById('telefone').value = cliente.telefone
        document.getElementById('celular').value = cliente.celular
        document.getElementById('cpf').value = cliente.cpf
        document.getElementById('nomefantasia').value = cliente.nomefantasia
        document.getElementById('contato').value = cliente.contato
        document.getElementById('email').value = cliente.email
        document.getElementById('nascimento').value = cliente.nascimento
        document.getElementById('observacoes').value = cliente.observacoes
    }
    
    lista(){
        const listagem = this.clientes.map((cliente) => (
            `<tr>
            <td>${cliente.codigo}</td>
            <td>${cliente.nomerazao}</td>
            <td>${cliente.rgie}</td>
            <td>${cliente.endereco}</td>
            <td>${cliente.bairro}</td>
            <td>${cliente.cidade}</td>
            <td>${cliente.cep}</td>
            <td>${cliente.uf}</td>
            <td>${cliente.telefone}</td>
            <td>${cliente.celular}</td>
            <td>${cliente.cpf}</td>
            <td>${cliente.nomefantasia}</td>
            <td>${cliente.contato}</td>
            <td>${cliente.email}</td>
            <td>${cliente.nascimento}</td>
            <td>${cliente.observacoes}</td>
            <td>
                <button id='apagar' onClick='cliente.apaga(${cliente.codigo})'>
                🗑️Apagar</button>
                <button id='editar' onClick='cliente.edita(${JSON.stringify(cliente)})'>
                ✏️Editar</button>
            </td>
            </tr>
            `
        ))
        return (`<table border='1' class='paleBlueRows'>
        <caption>Relação dos Clientes</caption>
        <thead>
            <th>Código</th>  
            <th>Nome / Razão Social</th> 
            <th>RG/IE</th> 
            <th>Endereço</th> 
            <th>Bairro</th>  
            <th>Cidade</th> 
            <th>CEP</th>
            <th>UF</th>
            <th>Telefone</th>
            <th>Celular</th>
            <th>CPF</th>
            <th>Nome Fantasia</th>
            <th>Contato</th>
            <th>E-Mail</th>
            <th>Nascimento</th>
            <th>Observações</th>
        </thead>
        <tbody>${listagem}</tbody>      
        </table>
        `)
    }

    atualiza(){
        document.getElementById('listagem').innerHTML = cliente.lista()
    }
}

const cliente = new Cliente()

document.getElementById('salvar').onclick = function ()  {
    const registro = {
        codigo: document.getElementById('codigo').value,
        nomerazao: document.getElementById('nomerazao').value,
        rgie: document.getElementById('rgie').value,
        endereco: document.getElementById('endereco').value,
        bairro: document.getElementById('bairro').value,
        cidade: document.getElementById('cidade').value,
        cep: document.getElementById('cep').value,
        uf: document.getElementById('uf').value,
        telefone: document.getElementById('telefone').value,
        celular: document.getElementById('celular').value,
        cpf: document.getElementById('cpf').value,
        nomefantasia: document.getElementById('nomefantasia').value,
        contato: document.getElementById('contato').value,
        email: document.getElementById('email').value,
        nascimento: document.getElementById('nascimento').value,
        observacoes: document.getElementById('observacoes').value
    } 
    cliente.salva(registro)
}

window.onload = function(){
    cliente.atualiza()
}
