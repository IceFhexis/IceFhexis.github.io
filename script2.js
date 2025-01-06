document.addEventListener('DOMContentLoaded', () => {
    function addInfoToList(titleText, resuminText, authorText, dataText, imageUrl, imageSource) {
        const ulElement = document.querySelector('.wrapper');
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
        authorSpan.className = 'author';
        authorSpan.textContent = authorText;
    
        const dataSpan = document.createElement('span');
        dataSpan.className = 'data';
        dataSpan.textContent = dataText;
    
        const imageContainer = document.createElement('div');
        imageContainer.className = 'imageContainer';
    
        const imageElement = document.createElement('img');
        imageElement.src = imageUrl;
        imageElement.alt = 'Image';
        imageContainer.appendChild(imageElement);
    
        const imageSourceSpan = document.createElement('span');
        imageSourceSpan.className = 'imageSource';
        imageSourceSpan.textContent = imageSource;
    
        mainPubliContent.appendChild(titleSpan);
        mainPubliContent.appendChild(resuminSpan);
        mainPubliContent.appendChild(authorSpan);
        mainPubliContent.appendChild(dataSpan);
        mainPubliContent.appendChild(imageContainer);
        mainPubliContent.appendChild(imageSourceSpan);
    
        const shareIcons = document.createElement('li');
        shareIcons.className = 'shareIcons';
    
        const facebookIcon = document.createElement('i');
        facebookIcon.className = 'bi bi-facebook';
    
        const whatsappIcon = document.createElement('i');
        whatsappIcon.className = 'bi bi-whatsapp';
    
        const shareIcon = document.createElement('i');
        shareIcon.className = 'bi bi-share';
    
        shareIcons.appendChild(facebookIcon);
        shareIcons.appendChild(whatsappIcon);
        shareIcons.appendChild(shareIcon);
    
        newListItem.appendChild(mainPubliContent);
        newListItem.appendChild(shareIcons);

        ulElement.appendChild(newListItem);
    }    

    const endpoint = window.location.pathname.split('/').pop();
    console.log("endpoint: "+ endpoint)
    function carregarConteudoPorEndpoint(endpoint) {
        switch (endpoint) {
            case 'fake.html':
                addInfoToList(
                    'Fake News',
                    'Resumo sobre Fake News.',
                    'Autor Fake News',
                    '01/01/2025',
                    'https://via.placeholder.com/150',
                    'Fonte da imagem - Fake News',
                );
                break;

            case 'progresso.html':
                addInfoToList(
                    'Ferramentas de Progresso',
                    'Resumo sobre ferramentas.',
                    'Autor Ferramentas',
                    '02/01/2025',
                    'https://via.placeholder.com/150',
                    'Fonte da imagem - Ferramentas'
                );
                break;

            case 'filme1.html':
                addInfoToList(
                    'Filme: A Caça',
                    'Resumo sobre o filme A Caça.',
                    'Autor Filme A Caça',
                    '03/01/2025',
                    'https://via.placeholder.com/150',
                    'Fonte da imagem - Filme A Caça'
                );
                break;

            case 'filme2.html':
                addInfoToList(
                    'Filme: Acrofobia',
                    'Resumo sobre o filme Acrofobia.',
                    'Autor Filme Acrofobia',
                    '04/01/2025',
                    'https://via.placeholder.com/150',
                    'Fonte da imagem - Filme Acrofobia'
                );
                break;

            case 'liberdade.html':
                addInfoToList(
                    'Liberdade de Expressão',
                    'Resumo sobre liberdade de expressão.',
                    'Autor Expressão',
                    '05/01/2025',
                    'https://via.placeholder.com/150',
                    'Fonte da imagem - Expressão'
                );
                break;

            default:
                console.log('Nenhum conteúdo carregado para este endpoint.');
        }
    }

    carregarConteudoPorEndpoint(endpoint);
});