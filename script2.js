document.addEventListener('DOMContentLoaded', () => {
    function addInfoToList(titleText, resuminText, authorText, dataText, imageUrl, imageSource, text) {
        const wrapperElement = document.querySelector('.wrapper');
        const mainDivElement = wrapperElement.querySelector('.noticias'); // Select the `.noticikas` div inside `.wrapper`
        
        if (!mainDivElement) {
            console.error('The .noticikas element is not found inside .wrapper');
            return;
        }

        const newListItem = document.createElement('li');
    
        const mainPubliContent = document.createElement('div');
        mainPubliContent.className = 'mainPubliContent';
    
        const titleSpan = document.createElement('span');
        titleSpan.className = 'title';
        titleSpan.textContent = titleText;
    
        const resuminSpan = document.createElement('span');
        resuminSpan.className = 'resumin';
        resuminSpan.textContent = resuminText;
    
        const authorSpan = document.createElement('span');
        authorSpan.className = 'autor';
        authorSpan.textContent = authorText;
    
        const dataSpan = document.createElement('span');
        dataSpan.className = 'data';
        dataSpan.textContent = dataText;
    
        const imageContainer = document.createElement('div');
        imageContainer.className = 'imageContainer';
    
        const imageElement = document.createElement('img');
        imageElement.src = imageUrl;
        imageElement.alt = 'Image';
        imageElement.className = "imag";
        imageContainer.appendChild(imageElement);
    
        const imageSourceSpan = document.createElement('span');
        imageSourceSpan.className = 'imageSource';
        imageSourceSpan.textContent = imageSource;
    
        mainPubliContent.appendChild(titleSpan);
        mainPubliContent.appendChild(resuminSpan);
        mainPubliContent.appendChild(authorSpan);
        mainPubliContent.appendChild(dataSpan);

        const shareIcons = document.createElement('li');
        shareIcons.className = 'shareIcons';
        
        const facebookIcon = document.createElement('i');
        facebookIcon.className = 'bi bi-instagram';
    
        const whatsappIcon = document.createElement('i');
        whatsappIcon.className = 'bi bi-envelope';
    
        const shareIcon = document.createElement('i');
        shareIcon.className = 'bi bi-share';

        const textt = document.createElement('span')
        textt.className = "imageSource";
        textt.textContent = text;

        mainPubliContent.appendChild(shareIcons);

        mainPubliContent.appendChild(imageContainer);
        mainPubliContent.appendChild(imageSourceSpan);
        
        mainPubliContent.appendChild(textt);

        shareIcons.appendChild(facebookIcon);
        shareIcons.appendChild(whatsappIcon);
        shareIcons.appendChild(shareIcon);
        facebookIcon.style.cursor = "pointer";
        whatsappIcon.style.cursor = "pointer";
        shareIcon.style.cursor = "pointer";
        facebookIcon.addEventListener('click', () => {
            window.open("https://www.instagram.com/fala_.verdade");
        })
        whatsappIcon.addEventListener('click', () => {
            window.open("mailto:fala.verdade.contato@gmail.com");
        })
        shareIcon.addEventListener('click', () => {
            navigator.clipboard.writeText(document.location.href).then(function() {
                alert('Copiado');
            }, function() {
                alert('Copy error')
            });            
        })

        newListItem.appendChild(mainPubliContent);

        mainDivElement.appendChild(newListItem);
    }

    const endpoint = window.location.pathname.split('/').pop();
    console.log("endpoint: "+ endpoint)
    function carregarConteudoPorEndpoint(endpoint) {
        switch (endpoint) {
            case 'liberdade.html':
                addInfoToList(
                    'Liberdade de expressão, Fake news e Controle digital — A resistência das gigantes digitais diante a regulamentação',
                    'A luta contra a desinformação é árdua, mas encontra constantes desafios, como demonstrado pelo PL das Fake News, que enfrentou resistência do Google devido aos supostos riscos à liberdade de expressão..',
                    'Por Maria Beatriz Figueiredo',
                    '05/01/2025',
                    './img/mar1.png',
                    'Link exibido na página inicial do Google, retirado após notificação do Ministério Público – Foto: Reprodução/CNN',
                    `O Projeto de Lei (PL) das Fake News, em debate no Brasil, busca criar um marco regulatório para combater a disseminação de desinformação nas plataformas digitais, incluindo redes sociais e serviços de mensagens. A proposta exige que as plataformas adotem medidas para a verificação de conteúdos, removam fake news de forma mais eficiente e responsabilizem usuários e empresas envolvidas na criação e disseminação de informações falsas. O PL ainda estipula exigências como o rastreamento de mensagens encaminhadas e a criação de um canal direto para denúncias de conteúdos nocivos. %0D%0A 

No entanto, essa tentativa de regulamentação gerou um amplo debate público, intensificado quando a Google, uma das gigantes tecnológicas envolvidas, exibiu mensagens na tela inicial do seu mecanismo de busca, argumentando que o projeto poderia prejudicar a liberdade de expressão e ter impactos negativos no funcionamento das plataformas. A movimentação gerou uma série de reações, sendo acusada de tentar manipular a opinião pública contra uma proposta de lei que busca frear os danos causados pela desinformação. 

A reação das plataformas, como a Google, não é isolada e reflete um problema central na implementação de regulamentações eficazes no ambiente digital: a resistência das grandes empresas tecnológicas em se submeter a legislações que possam afetar seus lucros ou mudar o controle que elas exercem sobre os dados dos usuários. Além disso, muitas dessas empresas operam em uma escala global, o que torna a criação de normas específicas por país um desafio ainda maior. Para plataformas como Facebook, Twitter e Google, a ideia de uma regulamentação mais rígida nos países em que operam pode se transformar em um custo operacional significativo, além de representar um obstáculo para o modelo de negócios baseado na coleta de dados e no algoritmo de recomendação. A grande preocupação dessas empresas é que a regulamentação, ao tentar conter a proliferação de fake news, também poderia resultar em uma censura excessiva e na imposição de barreiras à livre troca de informações, algo que pode afetar seu modelo de negócios de maneira substancial. 

A aplicação do PL das Fake News também enfrenta desafios legais e técnicos consideráveis. O princi  pal problema está na definição do que constitui uma “notícia falsa” e como garantir que o filtro de conteúdos seja realizado sem prejudicar a liberdade de expressão. Além disso, a responsabilidade das plataformas em controlar conteúdos postados por seus usuários é um ponto controverso. Se, por um lado, há a necessidade de combater a desinformação, por outro, existe o risco de as plataformas exagerarem na moderação de conteúdo, afetando a livre expressão de ideias e, inclusive, censurando discursos legítimos, como críticas políticas ou sociais. A utilização de algoritmos para filtrar fake news levanta questões sobre a imparcialidade e a precisão desses sistemas, já que eles podem ser imprecisos e até enviesados, além de promoverem uma moderação excessiva ou omissões no controle de conteúdos. A grande preocupação é que esses sistemas não consigam distinguir entre desinformação intencional e opiniões divergentes ou sátiras, por exemplo, o que pode resultar em um impacto negativo sobre a pluralidade de ideias. 

A implementação de uma regulamentação eficaz que controle as fake news sem prejudicar a liberdade de expressão exige um equilíbrio delicado. Isso se torna ainda mais complicado quando se trata de plataformas de alcance global que, muitas vezes, operam de acordo com suas próprias regras e interesses. A regulação deve ser sensível às particularidades de cada país, levando em consideração as diferentes realidades políticas, sociais e culturais, ao mesmo tempo em que busca um controle eficiente sobre as plataformas digitais, especialmente nas questões relacionadas à privacidade dos dados e à transparência das práticas de moderação. A criação de uma regulamentação robusta, que não só combata as fake news, mas que também respeite os direitos dos usuários e a liberdade de expressão, será um desafio complexo e prolongado, que exigirá a colaboração de governos, empresas de tecnologia e sociedade civil. 

A PL das Fake News está em constante evolução e será fundamental observar como o Brasil se posicionará em relação à regulamentação das plataformas digitais. O projeto não só afeta a dinâmica de disseminação de informações, mas também toca diretamente em temas como a responsabilidade das grandes empresas tecnológicas e a forma como essas corporações interagem com seus usuários e com a legislação local. Assim, a discussão sobre o PL é apenas uma faceta do debate global sobre a necessidade de regular a internet para garantir um ambiente digital mais seguro, transparente e responsável.

📢 Para mais conteúdos como esse, acesse nosso Instagram @fala_.verdade e nosso TikTok de mesmo nome. 

FONTES
https://www25.senado.leg.br/web/atividade/materias/-/materia/141944
https://www1.folha.uol.com.br/poder/2023/05/google-lanca-ofensiva-contra-pl-das-fake-news-mostram-emails-e-relatorio.shtml
https://www.metropoles.com/brasil/pf-ve-abuso-em-campanhas-do-google-e-telegram-contra-pl-das-fake-news
https://www.meioemensagem.com.br/midia/google-e-pl-das-fake-news
`
                );
                break;

            case 'progresso.html':
                addInfoToList(
                    'As plataformas como ferramenta de progresso — e desinformação: O fenômeno Big Brother',
                    'A plataformização, exemplificada pelo impacto do BBB nas redes sociais, trouxe maior engajamento do público, mas também diversos desafios.',
                    'Por Anna Beatriz Egídio',
                    '05/01/2025',
                    './img/mar3.jpg',
                    'Foto: Bastian Riccardi https://www.pexels.com/pt-br/foto/smartphone-tecnologia-exibicao-visor-15406294/',
                    `A plataformização é o processo crescente em que atividades sociais, econômicas e culturais são mediadas por plataformas digitais, que conectam usuários e fornecedores de serviços de maneira direta. Esse fenômeno tem transformado vários setores, da economia ao entretenimento, e um dos exemplos mais visíveis é o "Big Brother Brasil" (BBB). O programa, um ícone da televisão brasileira, não é mais apenas uma competição de reality show, mas se tornou um evento altamente influenciado pela dinâmica das redes sociais. No contexto da plataformização, o BBB se expandiu para além da televisão, sendo transmitido e comentado em tempo real nas redes sociais, com o público participando ativamente da seleção e julgamento dos participantes. Essa interatividade intensifica a criação de comunidades online, onde os fãs e seguidores do programa podem se organizar, fazer campanhas e até espalhar conteúdos que, muitas vezes, não são verdadeiros.
A relação entre o BBB e as fake news é clara de como a plataformização pode gerar impactos negativos, como a disseminação de desinformação. Durante o programa, notícias falsas sobre os participantes ou sobre acontecimentos do jogo se espalham rapidamente nas redes sociais, muitas vezes com a intenção de manipular a opinião pública. Fakes podem ser usadas para prejudicar a imagem de algum participante, influenciar votos e distorcer a percepção do público. As plataformas digitais, embora possam ser um espaço de comunicação aberta, muitas vezes não oferecem os mecanismos necessários para conter a propagação dessas informações falsas.
A regulamentação das plataformas digitais é uma questão cada vez mais discutida, principalmente devido aos impactos que a plataformização e a desinformação geram não só eventos como o BBB, mas também em contextos políticos e sociais mais amplos. Países ao redor do mundo estão começando a implementar normas para responsabilizar as empresas de tecnologia pela manipulação de informações e pela propagação de conteúdo prejudicial. 
Essas regulamentações buscam não só aumentar a transparência das práticas de algoritmos, como também exigir que as plataformas sejam mais ativas na verificação de fatos e na remoção de fake news. No Brasil, a regulamentação da internet está em debate com projetos como o PL das Fake News, que visa criar mecanismos para limitar a disseminação de conteúdos falsos, punir quem fabrica e divulga essas informações e exigir maior responsabilidade das plataformas. 
Em conclusão, a plataformização mudou a maneira que nós interagimos com a mídia e a sociedade, exemplificada pelo impacto do BBB e a disseminação de fake news. Embora as plataformas digitais ofereçam diferentes formas de participação e engajamento, elas também criam desafios, como a manipulação de informações e a polarização. A regulamentação dessas plataformas é essencial para diminuir os danos da desinformação e proteger a integridade dos processos sociais e democráticos. A evolução dessas questões continuará a demandar atenção e diferentes soluções a fim de garantir um ambiente digital saudável e seguro.
📢 Para mais informações sobre Regulamentação das plataformas e desinformação, acesse nosso Instagram @fala_.verdade e nosso TikTok de mesmo nome.

FONTE
https://www.cartacapital.com.br/blogs/midiatico/da-globo-ao-congresso-a-relacao-entre-o-bbb-o-pl-das-fake-news-e-a-regulacao-da-midia
https://www.researchgate.net/publication/385915649_A_PLATAFORMIZACAO_DA_DESINFORMACAO_E_O_PROJETO_DE_LEI_DAS_FAKE_NEWS
`
                );
                break;

            case 'filme1.html':
                addInfoToList(
                    'Fala verdade recomenda: A Caça',
                    'Uma acusação falsa e a propagação de desinformação geram consequências devastadoras para um homem inocente, revelando os perigos dos julgamentos precipitados em uma sociedade movida pela histeria coletiva.',
                    'Por Maria Beatriz Figueiredo',
                    '05/01/2025',
                    './img/mar5.jpg',
                    'Foto: A Caça/Thomas Vinterberg',
                    `O filme A Caça (2012), dirigido por Thomas Vinterberg, explora os efeitos devastadores da desinformação e da difamação na vida de um homem inocente. A história segue Lucas, um educador infantil que vê sua vida virar de cabeça para baixo quando é falsamente acusado de abuso sexual por uma de suas alunas. O filme aborda como a mentira, uma simples declaração mal interpretada, rapidamente se espalha e ganha força dentro da comunidade, gerando uma onda de rejeição e vingança. A partir desse ponto, a narrativa investiga as consequências de uma sociedade que acredita sem questionar e age rapidamente diante de uma acusação, sem considerar as possíveis falácias por trás dela. A pressão social e a manipulação de informações transformam Lucas em um pária, levando à destruição de sua reputação, amizades e até mesmo sua identidade.
Em A Caça, a desinformação não surge apenas de fontes externas, mas também de uma dinâmica social que reforça o preconceito e a reação em massa. A história reflete como uma simples mentira, propagada por um erro inocente, pode causar um impacto irreparável. O filme explora as falhas do sistema, seja pela falta de apuração adequada dos fatos ou pela facilidade com que a mentira é disseminada, principalmente em comunidades pequenas, onde as relações pessoais e os boatos têm grande poder. Ao longo do filme, vemos a rapidez com que a opinião pública se forma e a dificuldade em reverter os danos causados, mesmo quando a verdade começa a emergir.
A obra também apresenta uma crítica profunda à forma como os indivíduos são julgados pela sociedade com base em informações superficiais, sem espaço para defesa ou reflexão. O medo, o pânico e o desejo de proteger as crianças daquilo que poderia ser uma ameaça invisível criam um ambiente de histeria coletiva, onde a verdade é distorcida e a justiça se torna um conceito relativo. A Caça deixa claro que, embora a luta contra o abuso infantil seja legítima e necessária, a desinformação e os julgamentos precipitados podem resultar em tragédias igualmente graves. O filme convida o público a refletir sobre os perigos de uma sociedade que, movida pela emoção e pela pressa, perde a capacidade de discernir entre a verdade e a mentira.
Disponível em: https://www.primevideo.com/detail/A-Ca%C3%A7a/0R1E8JOWMKKD02XTDEBZ4I91HV
📢 Para mais conteúdos como esse, acesse nosso Instagram @fala_.verdade e nosso TikTok de mesmo nome.
`
                );
                break;

            case 'filme2.html':
                addInfoToList(
                    'Fala Verdade recomenda: Não olhe para cima',
                    'Uma sátira que expõe como as fake news e a desinformação podem moldar a percepção pública e paralisar ações diante de crises globais.',
                    'Por Maria Beatriz Figueiredo',
                    '05/01/2025',
                    './img/mar2.jpg',
                    'Foto: Netflix',
                    `Dirigido por Adam McKay e lançado em 2021, Não Olhe Para Cima é uma sátira provocativa que explora a negligência da humanidade diante de problemas graves, com foco na disseminação de desinformação. Na trama, os astrônomos Kate Dibiasky (Jennifer Lawrence) e Dr. Randall Mindy (Leonardo DiCaprio) descobrem que um cometa está em rota de colisão com a Terra. No entanto, ao tentarem alertar o mundo, eles se deparam com políticos corruptos, uma mídia sensacionalista e a indiferença da sociedade, mais preocupada com escândalos e entretenimento vazio.
O filme faz uma crítica contundente à forma como as fake news moldam a percepção pública, deturpando a verdade e minando a confiança em especialistas e ciência. As redes sociais e os meios de comunicação retratados no filme são usados para banalizar a gravidade da situação, criando narrativas que colocam o lucro e interesses pessoais acima do bem comum. Esse cenário ilustra como a desinformação pode ser uma ferramenta poderosa para manipular as massas, desacreditar fatos e paralisar ações urgentes.
Mais do que uma comédia, Não Olhe Para Cima é uma reflexão essencial sobre os desafios contemporâneos relacionados à verdade e ao impacto das decisões baseadas em mentiras. Com um elenco estelar que inclui Meryl Streep, Jonah Hill e Cate Blanchett, o filme é um convite a repensar nossa relação com as informações que consumimos e o papel que desempenhamos na propagação ou no combate à desinformação. É uma obra indispensável para quem deseja entender melhor o poder das fake news em tempos de crise.
O filme está disponível em: https://www.netflix.com/br/title/81252357
📢 Para mais conteúdos como esse, acesse nosso Instagram @fala_.verdade e nosso TikTok de mesmo nome.
`
                );
                break;

            case 'fake.html':
                addInfoToList(
                    'Fala Verdade ensina: Como identificar Fake News e evitar Desinformação',
                    'Aprenda a identificar e verificar notícias falsas com este guia simples e eficaz.',
                    'Por Maria Beatriz Figueiredo',
                    '05/01/2025',
                    './img/mar4.jpg',
                    'Foto: Reprodução/Facebook',
                    `Use Ferramentas de Verificação
- Acesse sites de checagem: Utilize ferramentas especializadas, como Aos Fatos, Lupa e Factcheck, para confirmar se a informação é verdadeira ou falsa.
- Pesquise imagens: Utilize o Google Imagens para buscar a origem das fotos. Imagens de notícias falsas frequentemente são manipuladas ou tiradas de contextos diferentes.
Desconfie de Sinais Comuns de Fake News
- Títulos exagerados: Manchetes sensacionalistas, que buscam causar pânico ou excitação, são um alerta.
- Falta de fontes: Notícias que não apresentam fontes confiáveis ou evidências claras devem ser encaradas com cautela.
- Conteúdos manipulados: Desconfie de vídeos ou imagens que parecem manipulados ou fora de contexto.
Pense Criticamente
- Questione o conteúdo: Antes de compartilhar, pense se a informação faz sentido. Notícias que apelam para emoções fortes (raiva, medo, tristeza) podem ser uma forma de manipulação.
- Não compartilhe apressadamente: Mesmo que você não tenha certeza da veracidade, evite compartilhar a informação imediatamente. Espere até ter mais provas ou confirmá-la.
Seguindo esses passos, você pode evitar contribuir para a propagação de fake news e ajudar a manter a internet mais segura e informada!
📢 Para mais conteúdos como esse, acesse nosso Instagram @fala_.verdade e nosso TikTok de mesmo nome.
`
                );
                break;

            default:
                console.log('Nenhum conteúdo carregado para este endpoint.');
        }
    }

    carregarConteudoPorEndpoint(endpoint);
});