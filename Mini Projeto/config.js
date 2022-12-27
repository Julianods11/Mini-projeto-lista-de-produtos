class Produto { //explicação rápida para lembrar futuramente: ao clicar no botão adicionar, o js lê os dados
    //através da função lerDados(), logo após vai para a função Adicionar(), que valida antes de adicionar o produto
    //indo assim para a função Validar()
    //se os dados estiverem preenchidos, vai para a função de Salvar() o produto, porém
    //ele deve ser salvo no constructor que "controla" a classe, nesse caso, está sendo salvo em um array, arrayProdutos[]
    //por fim, cahma a função listar

    constructor(){
    this.id = 1;
    this.arrayProdutos =[];

}
Adicionar(){//declarando a função para adicionar o objeto
    let produto = this.lerDados() //declrando a variável produto, utilizando a função lerDados, onde escrevemos os dados do produto

    if(this.Validar(produto) == true){
        this.Salvar(produto) // função de Salvar() o produto
    } // verificando a validação, para aí sim adicionar o produto a lista
    this.Listar()
}
lerDados(){
    let produto = {} // declarando a função do produto

    produto.id = this.id; //declarando o id do produto, nome e preço, através dos inputs que estão no index.html
    produto.nomeProduto = document.getElementById('pdt').value//sempre escrever o value no final, para ele entender que eu quero o valor daquela id
    produto.precoProduto = document.getElementById('preco').value

    return produto
}
Validar (produto){ // função que valida se os campos a serem preenchidos não estão vazios
    let msg = '';
    
    if(produto.nomeProduto == '' || produto.precoProduto == ''){
        msg += 'Por favor, insira corretamente as informações'
    }

    if(msg !=''){
        alert(msg)
        return false
    }
    return true
}

    Salvar(produto){
        this.arrayProdutos.push(produto)
        this.id ++
    }
    Listar(){//declarando a função Listar
        let tbody = document.getElementById('tbody') // declarando a variável tbody
        tbody.innerText = '' // escrevendo no tbody da tabela na div

        for(let i = 0; i <this.arrayProdutos.length; i++){//declarando o for para incrementar os produtos na lista, a variável i sempre vai ser menor que o arrayProdutos e sempre vai incrementar mais 1 ao seu valor

            let tr = tbody.insertRow();//declarando as linhas que serão criadas pelo for
            let td_id = tr.insertCell();//declarando todas as colunas a serem listadas, desde id até a coluna de deletar o item
            let td_nome = tr.insertCell();
            let td_preco = tr.insertCell();
            let td_del = tr.insertCell();

            td_id.innerText = this.arrayProdutos[i].id;//escrevendo o valor do id da variável i
            td_nome.innerText = this.arrayProdutos[i].nomeProduto;
            td_preco.innerText = this.arrayProdutos[i].precoProduto;

            let imagem = document.createElement('img')
            imagem.src = 'lixeira.png'
            imagem.setAttribute("onclick", "produto.Deletar("+this.arrayProdutos[i].id+")") // declarando a função deletar ao clicar na imagem
            td_del.appendChild(imagem)
        }
    }
    Cancelar(){
        document.getElementById('pdt').value = ''
        document.getElementById('preco').value = ''
    }
    Deletar(id){

        let tbody = document.getElementById('tbody')
        for(let i = 0; i<this.arrayProdutos.length; i++){// aqui é a mesma coisa que lá em cima, o i percorre todo o array e sempre soma um ao seu valor.
            if(this.arrayProdutos[i].id == id){//vericando se o id é igual ao id do array, o[i] é pra atrelar ao [i] do for
                this.arrayProdutos.splice[i,1]//splice é uma função do próprio js que deleta um item do array
                tbody.deleteRow(1)//deletar a linha 1
            }
        }
        alert('O item foi apagado com sucesso')

    }
}
var produto = new Produto(); // declarando a variável do objeto da classe 