// ADICIONANDO OS PROCESSOS DETALHADOS PARA ENTENDIMENTO POSTERIOR.
// ALGUNS CONSOLES.LOG QUE SERAM IMPRESSOS SERVEM SOMENTE PARA VER O PROCESSO 
// DA LÓGICA  QUE EU ESCREVI.

console.log('Bem vindo ao jogo de Blackjack!')

//  CONDIÇÃO PRINCIPAL SE QUISER INICIAR A RODADA EXECUTA DIVERSAS CONDIÇÕES, SE NÃO: PULA TUDO E TERMINA O JOGO.
if (confirm('Você quer iniciar uma nova rodada?')){
   // DEFINI NO ESCOLPO PRINCIPAL TODAS AS VARIÁVEIS QUE VOU UTILIZAR  
   let cartasUsuario = []
   let valorUsuario = []
   let somaUsuario = 0  
   let cartasComputador = []
   let valorComputador = []
   let somaComputador = 0
   let somaFinal = 0

// PRIMEIRO ESTRUTURA DE REPETIÇÃO: SORTEAR DUAS CARTAS ARMAZENAR EM UM ARRAY O TEXTO DA CARTA E GUARDAR EM OUTRO ARRAY O VALOR REAL DA CARTA SORTEADA( ESSE VALOR REAL FOI DEFINIDO NA FUNÇÃO DO ARQUIVO NÃO MEXER).
   for (let i =0; i<2; i++){
      const carta = comprarCarta(); 
      cartasUsuario.push(carta.texto) 
      valorUsuario.push(carta.valor)
      somaUsuario += valorUsuario[i]
      //  AQUI ABAIXO TEM UMA CONDIÇÃO PARA SE AS CARTAS FOREM DOIS "As" A SOMA DE 2 A É MAIOR Q 21 ==> ENTÃO SE ISSO ACONTECER, APAGA AS CARTAS  E O VALOR DOS ARRAYs e "i" PASSA A SER -1 
      //  PARA A PRIMEIRA ESTRUTURA DE REPETIÇÃO SE TORNAR "ZERO" NOVAMENTE QUANDO PASSAR PELO INCREMENTO ++
      // ISSO VAI ACONTECER ATÉ Q AS CARTAS SORTEADAS JUNTAS NÃO SEJAM  "As" OU SEJA DOIS "ONZES" Q É MAIOR Q 21.
      if(somaUsuario>21){
      cartasUsuario.splice(0,2) 
      valorUsuario.splice(0,2)
      i=-1
      } 
      //  ATENDIDO A CONDIÇÃO DE SORTEAR DUAS(i<2) CARTAS CUJO A SOMA DAS DUAS NÃO SEJA MAIOR Q 21.essa condição esta na estrutura (enquanto "i<2") i =0 ,sorteia a primeira passa pelo incremento (i++) e i=1, sorteia a segunda,passa pelo incremento (i++) e i=2. para de sortear e  SAI DO BLOCO - estrutura de repetição -  VOLTA PARA O ESCOLPO DO IF CONFIRM PRINCIPAL. desce e vai pra proxima estrutura criada
   }


      // MESMA COISA DA ESTRUTURA ANTERIOR, PORÉM COM OS DADOS DA JOGADA DO COMPUTADOR
   for (let i =0; i<2  ; i++){
      const carta = comprarCarta(); 
      cartasComputador.push(carta.texto) 
      valorComputador.push(carta.valor)
      somaComputador += valorComputador[i]
      if(somaComputador>21){
         cartasComputador.splice(0,2) 
         valorComputador.splice(0,2)
         i=-1
       }
      //  ATENDIDO AS CONDIÇÕES , SAI DO BLOCO, VOLTA PARA O ESCOLPO DO IF CONFIRM PRINCIPAL. desce e vai pra proxima estrutura criada.
   }
// IMPRIMINDO NO CONSOLE AS CARTAS DO USUÁRIO E APENAS A PRIMEIRA DO COMPUTADOR, POR ISSO USEI INDICE [0].

console.log('Suas cartas são ' + cartasUsuario +"\n"+ 'A carta revelada do computador é '+ cartasComputador[0]+"\n"+ 'Deseja comprar mais uma carta?')


   // LEMBRANDO QUE TUDO ESTA DENTRO DO ESCOLPO DO IF DO CONFIRM PRINCIPAL, OU SEJA  ENTRA E SAI DE DIVERSOS BLOCOS DE REPETIÇÃO E CONDIÇÕES - ENTRANDO QUANDO ATENDIDO AS CONDIÇÕES, E SAINDO QUANDO DEIXAR DE ATENDER A CONDIÇÃO. QUANDO SAIR DE UM BLOCO ELE SEMPRE VAI PARTIR PARA O BLOCO DE BAIXO. ATÉ TERMINAR O ESCOLPO DO IF CONFIRM PRINCIPAL. 
      
         i= 2 /* INCIANDO A VARIAVEL "i" COM 2 Pois ela será usada como index e ja temos 2 cartas sorteadas*/
         perguntar = 0 /* VARIAVEL DE CONTROLE PARA SAIR DO PROXIMO WHILE (REPETIÇÃO)*/


         // ENQUANTO SOMA DO USUARIO FOR MENOR Q 21 - PERGUNTAR SE ELE QUER TIRAR MAIS UMA CARTA.
         //  O "i" e o "perguntar" são variáveis de controle que eu vou usar para sair da estrutura.
         while (i <= 10  && somaUsuario <21 && perguntar !=1){
            perguntar = 0
            // condição confirm, perguntar pro usuario se ele quer mais uma carta.
            // se ele responde SIM, executa o bloco. responder NÃO , para para o Else desse bloco de repetição.
            if (confirm('Suas cartas são ' + cartasUsuario +"\n"+ 'A carta revelada do computador é '+ cartasComputador[0]+"\n"+ 'Deseja comprar mais uma carta?')){
               // o usuario disse SIM: 
            console.log('==> Resposta do Usuário: SIM! ')  /* IMPRIME PRA FICAR BONITINHO E DAR PRA ENTENDER O JOGO NO CONSOLE*/
            const carta = comprarCarta(); /* SORTEIA + 1 CARTA PARA O USUÁRIO*/
            cartasUsuario.push(carta.texto) /* GUARDA O TEXTO CARTA NO ARRAY JÁ UTILIZADO*/
            valorUsuario.push(carta.valor) /* GUARDA DO VALOR DA CARTA NO ARRAY JÁ UTILIZADO*/
            somaUsuario += valorUsuario[i]  /* SOMA AS CARTAS SALVAS NO ARRAY*/

          console.log('sorteou mais uma ===>') /* IMPRIME PRA ORGANIZAR*/

         //  MAIS UMA CONDIÇÃO; APOS SOMAR A CARTA SORTEADA COM AS CARTAS ANTERIORES, FAZ UMA CONFERENCIA SE A SOMA É MAIOR QUE 22?
         // SE FOR MENOR ELE IMPRIME AS CARTAS DO USUARIO ATUALIZADAS E CONTUNUA APRENSENTANDO SOMENTE 1 DO COMPUTADOR.
         
               if (somaUsuario<22){
                  console.log('Suas cartas são ' + cartasUsuario +"\n"+ 'A carta revelada do computador é '+ cartasComputador[0]+"\n"+ 'Deseja comprar mais uma carta?')
               }
               // SAI DO IF E CONTINUA NA ESTRUTURA DE CIMA, SEGUE PARA O PROXIMO COMANDO QUE É O INCREMENTO (i++)
         i++ /* esse incremento do while soma + 1 no i e faz ele voltar ao teste lógio de while acima.*/
         // ele não é necessário no teste lógico exatamente. pq o teste lógico é a soma do usuario ser menor que 21.
         // mas usar ele é uma negurança de por erro o loopin só roda até 10 vezes. e tambem usei ele para somar mais 1 no index do valorUsuario. assim eu não preciso de mais uma condição pra fazer essa soma.
     
         
         // SE O USUÁRIO DISSER NÃO APÓS A PERGUNTA DO CONFIRM , ele sai nem entra no IF e cai aqui no ELSE.
         }else { 

            console.log('==> Resposta do Usuário: NÃO! ')   /* IMPRIME PRA FICAR BONITINHO E DAR PRA ENTENDER O JOGO NO CONSOLE*/   
             perguntar=1 /* USANDO AQUELA VARIVEL DE CONTROLE PARA SAIR DESSA REPETIÇAÕ (WHILE) DE PERGUNTAR PRO USUARIO SE ELE QUER OUTRA CARTA; porque quando ele disser NÃO. cai aqui no else, O PERGUNTAR AGORA VALE 1.  */
            //  ELE VOLTA LA PRO INICIO DA REPEÇÃO DA PERGUNTA. mas umas das condições era o o perguntar ser dirente de 1.
            
         }
             //  ENTÃO ELE SAI DO BLOCO, VOLTA PARA O ESCOLPO DO IF CONFIRM PRINCIPAL. desce e vai pra proxima estrutura criada.
             
         }
         
         // SE ELE CHEGOU ATÉ AQUI É PORQUE ACABARAM AS JOGADAS DO USUÁRIO.
         // ELE ATINTIU MAIS DE 21, OU ELE ESCOLHEU PARA DE COMPRAR ANTES DE CHEGAR.

         
         // UM BLOCO DE REPETIÇÃO PARA VER SE O USUARIO TEM SOMA MENOR OU IGUAL A 21.
         // SE ELE TEM MAIS DE 21 O COMPUTADOR NEM PRECISA TIRAR MAIS CARTAS POIS O USUÁRIO JÁ PERDEU.
         // SE ELE TEM MENOS DE 22 O COMPUTADOR VAI TIRAR CARTAS ATÉ QUE CHEGUE AO NUMERO DO USUARIO, MAS O COMPUTADOR NÃO PODE CONTINUAR TIRANDO CARTAS SE ATINGIR MAIS DE 21 TAMBÉM.
         for (let a = 0; a<= 10 && somaComputador<= somaUsuario && somaComputador <21 && somaUsuario <=21 ; a++ ){
            somaFinal = valorComputador.length /* VARIAVEL CRIADA PARA MANTER O CONTROLE DA SOMA DO COMPUTADOR DENTRO DA MESMA REPETIÇÃO*/
            const carta = comprarCarta(); /* SORTEIA CARTA*/
            cartasComputador.push(carta.texto) /* GUARDA CARTA NO ARRAY EXISTENTE*/
            valorComputador.push(carta.valor)/* GGUARDA VALOR DA CARTA NO ARRAY EXISTENTE*/
            somaComputador += valorComputador[somaFinal] /* SOMA AS CARTAS TODAS JA TIRADAS, MAS É PRECISO O NUMERO DO INDEX CERTO POR ISSO USUEI A VARIAVEL somaFinal que esta pegando esse index atualizado*/
           
            //  isso vai acontecer até que o computador tenha soma maior q o usuario, mas sem ultrapassar 21.
            // ele atingindo mais que 21 ou enpatando ou passando o usuario. a repetição para.
            // SAI DO BLOCO E VOLTA PARA O ESCOLPO PRINCIPAL.
         
         }
            
         //  NO ESCOLPO PRINCIPAL É FIM DE JOGO!
         // IMPRIME TODAS AS CARTAS DOS DOIS. USUARIO E COMPUTADOR.

         console.log('FIM DO JOGO!')
         console.log('Cartas do Usuário: ' +cartasUsuario+ ' a sua pontuação é : '+ somaUsuario)
         console.log('Cartas do Computador: '+cartasComputador+' a pontuação do computador é : '+ somaComputador)


         // CONDIÇÃO DO RESULTADO.
         // IRÁATENDER UMA DAS CONDIÇÕES ABAIXO PARA VER O GANHADOR.
         // E IMPRIME O RESULTADO.

          if (somaUsuario == somaComputador){
         console.log('Empate!')
          }else if ((somaUsuario <=21 )&&  (somaUsuario>somaComputador)){
         console.log('O Usuário ganhou!')
         }else if ((somaUsuario <=21 ) && (somaComputador >21)){
            console.log('O Usuário ganhou!')
         }else if (somaUsuario >21){
            console.log('O Computador ganhou!')
         }else if ( somaComputador > somaUsuario){
         console.log('O Computador ganhou!')
         }else{
            console.log('Empate!')
         }
      
    //  SE LÁ NO PRIMEIRO CONFIRM O USUÁRIO DISSER QUE NÃO QUER INICIAR A RODADA.
   // VEM DIRETO PARA O ELSE.E FINALIZA O JOGO 
   // E NÃO PASSAR POR TODA ESSAS ESTRUTURA QUE SÓ EXITE QUANDO O PRIMEIRO CONFIRM É VERDADEIRO.
   
}else{
   console.log('O jogo acabou.')
}
