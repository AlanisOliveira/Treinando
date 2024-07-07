document.addEventListener('DOMContentLoaded', () => {
    const rollDiceButton = document.getElementById('rollDice');
    const sexoCard = document.getElementById('sexo-card');
    const terapiaCard = document.getElementById('terapia-card');

    const sexoActions = [
        "Beijo apaixonado",
        "Faça uma Massagem sensual",
        "Deixe o seu parceiro excitado, seja criativo(a)",
        "Brinque com gelo no corpo do seu parceiro(a)",
        "Amarre o seu parceiro e o provoque",
        "Venda os olhos do seu parceiro e faça algo inusitado",
        "Faça um strip-tease",
        "Faça um oral no seu parceiro",
        "De um beijo no seu parceiro com um cubo de gelo na boca",
        "Faça um oral no seu parceiro(a) e use a mão para estimular",
        "Beije seu parceiro na intenção de provocar",
        "Retire a parte de baixo da roupa do seu parceiro(a) com a boca",
        "Esfregue o orgão genital do seu parceiro no seu",
        "Ordene que o seu parceiro beije o seu corpo dos pés a cabeça",
        "Deixe o seu parceiro lhe masturbar por 30 segundos",
        "Peça para o seu parceiro escolher uma posição e transem",
        "Dê um beijo quente na virilha do seu parceiro",
        "Passe a língua em alguma parte que o seu parceiro escolher",
        "Passe a língua em alguma parte do corpo do seu parceiro",
        "Faça uma massagem com óleo no seu parceiro",   
        "Peça para o seu parceiro lamber e chupar seus peitos por 15 segundos",
        "Peça que o seu parceiro faça uma massagem nas suas costas por 1 minuto",
        "Peça que o seu parceiro faça uma massagem nos seus pés por 1 minuto",
        "Faça uma massagem entre as partes íntimas do seu parceiro",
        "Dê 3 lambidas molhadas no orgão do seu parceiro",
        "Chupe sem deixar marcas o pescoço do seu parceiro por 15 segundos, se você deixar uma marca, seu parceiro pode realizar uma ação livre",
        "Dê leves mordidas sensuais no seu parceiro",
        "Passe chocolate ou algum creme no seu parceiro e lamba",
        "Peça para o seu parceiro descrever uma fantasia sexual e realize",
        "Faça sexo em algum lugar perigoso e inusitado da casa",
        "Faça sexo em uma posição que nunca fizeram",
        "Faça alguma ação do bdsm",
        "Ordene que o seu parceiro faça uma ação decidida por você",
        "Deixe o seu parceiro amarrar as suas mãos, e explore novas sensações",
        "Use um vibrador enquanto faz sexo oral no seu parceiro",
        "Realize uma massagem tântrica, prolongando o prazer.",
        "Use algum brinquedo erótico que está próximo a vocês e explorem sensações",
        "Brinque de dominador e submisso, alternando os papéis",




        
    ];

    const terapiaQuestions = [
        "Qual sua lembrança favorita da infância?",
        "O que te faz sentir amado?",
        "O que eu faço que te irrita?",
        "O que mais te atrai no meu corpo?",
        "O que você mais gosta no nosso relacionamento?",
        "O que eu faço que corta o clima e tira o tesão?",
        "Qual foi o melhor sexo que você já teve?",
        "Qual a posição sexual que você mais gosta hoje?",
        "Qual posição sexual você gostaria de experimentar?",
        "O que te faz sentir mais ligado a mim?",
        "Para você, o que significa ser bom na cama?",
        "Qual tipo de sexo ainda quer experimentar comigo?",
        "O que seria um dia perfeito para você?",
        "Você já pensou em terminar? Se sim, por qual motivo?",
        "O que mais te acalma?",
        "Se pudesse voltar no tempo, mudaria algo no nosso relacionamento?",
        "Existe algo que eu fiz que já te deixou muito triste?",
        "Qual seu maior medo?",
        "Qual a sua maior insegurança?",
        "Qual o seu maior sonho?",
        "Qual momento mais difícil que você já passou?",
        "Qual foi sua maior desilusão amorosa?",
        "Qual foi a coisa mais louca que você já fez por gostar de alguém?",
        "Do que você sente mais vergonha na vida?",
        "Você já mentiu pra mim?",
        "Se sua família se opusesse a nossa relação, o que você faria?",
        "Neste tempo que estamos juntos, você chegou a se interessar por outra pessoa?",
        "Existe alguma coisa que você fez quando era pequeno e que seus pais nunca descobriram?",
        "Qual foi sua maior lição dentro de um relacionamento?",
        "Qual foi a coisa mais importante que você aprendeu comigo?",
        "Como você expressa sua raiva?",
        "Qual música te faz lembrar de mim?",
        "Qual foi a última vez que você chorou?",
        "Você acredita que mentiras são justificáveis?",
        "Qual maior elogio que você já recebeu?",
        "O que mais traz significado pra sua vida?",
        "Qual foi o melhor conselho que você já recebeu?",
        "Qual foi o pior conselho que você já recebeu?",
        "Você já fez algo que teve consequências graves?",
        "Qual sua comida preferida?",
        "Qual foi a última vez que você se sentiu sozinho?",
        "Qual foi a última vez que você se sentiu muito feliz?",
        "Qual foi a última vez que você se sentiu muito triste?",
        "Você prefere beijos ou abraços?",
        "Você prefere sexo ou carinho?",
        "Você prefere ficar em casa ou sair?",
        "Você prefere sexo ou amor?",
        "O que você aprendeu sobre o casamento com os seus pais?",
        "Qual a melhor festa que você já foi?",
        "Se pudesse voltar no tempo, qual idade voltaria?",
        "O que você me difere das outras pessoas que você já se relacionou?",
        "O que você mais respeita na vida?",
        "Quando você soube que realmente gostava de mim?",
        "Se você pudesse trabalhar para uma empresa que admira, qual seria?",
        "Em que momento você sentiu que teríamos uma relação séria?",
        "Você acha que eu sou uma pessoa fácil de se conviver?",
        "Por que você está comigo?",
        "É possível uma relação sem sexo?",
        "O que você prefere durante a transa, gemidos, sussurros ou gritos?",
        "Se você pudesse fazer um pedido especial para mim, o que seria?",

    ];

    rollDiceButton.addEventListener('click', () => {
        const isSexo = Math.random() < 0.5;
        const selectedCard = isSexo ? sexoCard : terapiaCard;
        const otherCard = isSexo ? terapiaCard : sexoCard;
        const content = isSexo ? sexoActions[Math.floor(Math.random() * sexoActions.length)] : terapiaQuestions[Math.floor(Math.random() * terapiaQuestions.length)];

        rotateCard(selectedCard, content, isSexo ? "Ação de sexo" : "Pergunta de terapia");
        resetCard(otherCard, isSexo ? "Terapia" : "Sexo", isSexo ? "Pergunta de terapia" : "Ação de sexo");
    });

    function rotateCard(card, content, defaultContent) {
        card.classList.add('animate-rotate-card');
        setTimeout(() => {
            card.querySelector('.hidden-content p').textContent = content;
            card.classList.remove('animate-rotate-card');
        }, 1000); 
    }

    function resetCard(card, title, defaultContent) {
        setTimeout(() => {
            card.querySelector('p:first-child').textContent = title;
            card.querySelector('.hidden-content p').textContent = defaultContent;
        }, 1000); 
    }
});

function togglePopup() {
    const popup = document.getElementById('popup');
    popup.classList.toggle('hidden');
}
