# form-loader


Uma lib simples em javascript para pegar os dados de um formulário sem envio do header pelo navegador, assim tirando a necessidade de ficar pegando cada campo manualmente




## Instalação

    git clone https://github.com/flavioroso/form-loader.git


### Exemplo:
```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exemplo</title>
</head>
<body>
    <!--Formulario de envio-->
    <form action="" id="form">
        <label for="nome">Nome</label>
        <input type="text" name="nome" id="nome"><br>
        
        <label for="nome">Sobrenome</label>
        <input type="text" name="sobreNome" id="sobreNome"><br>
        
        <label for="nome">idade</label>
        <input type="text" name="idade" id="idade"><br>
        
        <label for="nome">cpf</label>
        <input type="text" name="cpf" id="cpf"><br>
        
        <input type="submit" name="btn" id="btn" value="enviar">

    </form>
</body>

<!--Requisição da lib-->
<script src="form-loader.js"></script>

<script>
    // --- cria um evento para o formulario com a id="form"
    formLoader.submit("form",function(dados){

        // --- Use os dados enviados pelo formulario
        console.log(dados);

    });
    
</script>

</html>
	
```

### Console
    {nome: "Flavio ", sobreNome: "Roso", idade: "21", cpf: "999.999.999.99", btn: "enviar"}
