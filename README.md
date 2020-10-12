# form-loader


Uma lib simples em javascript para pegar os dados de um formulário sem envio do header pelo navegador, assim tirando a necessidade de ficar pegando cada campo manualmente




## Instalação

    git clone https://github.com/flavioroso/form-loader.git


### Exemplo:
```javascript

    // --- cria um evento para o formulario com a id="form"
    formLoader.submit("form",function(dados){

        // --- Use os dados enviados pelo formulario
        console.log(dados);

    });
	
```
