
    function imc() {
        var nome = document.getElementById('nome').value;
        var altura = document.getElementById('altura').value;
        var peso = document.getElementById('peso').value;
        var resultado = document.getElementById('resultado');
      
        if(nome !== '' && altura !== '' && peso !== '') {
           
            var valorIMC = (peso / (altura * altura)).toFixed(1);
          
            let classificacao = '';
           
            if(valorIMC < 18.5){
                classificacao = 'abaixo do peso.'
            }else if(valorIMC < 25){
                classificacao = 'com o peso adequado.'
            }else if(valorIMC < 30){
                classificacao = 'levemente acima do peso.'
            } else if(valorIMC < 35){
                classificacao = 'com obesidade grau I'
            }else if(valorIMC < 40){
                classificacao = 'com obesidade grau II'
            }else{
                classificacao = 'com obesidade grau III'
            };
           

            resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`;
            document.write = valorIMC;
            
        }
        else{
            alert('Preencha os campos!')
        }
    }
    
