document.addEventListener('DOMContentLoaded', () => {

    function addInfoToList(titleText, resuminText, dataText) {
        const ulElement = document.querySelector('.left ul');
        const newListItem = document.createElement('li');
    
        const mainPubliContent = document.createElement('div');
        mainPubliContent.className = 'mainPubliContent';
    
        const titleSpan = document.createElement('span');
        titleSpan.className = 'title';
        titleSpan.textContent = titleText;
    
        const resuminSpan = document.createElement('span');
        resuminSpan.className = 'resumin';
        resuminSpan.textContent = resuminText;
    
        const dataSpan = document.createElement('span');
        dataSpan.className = 'data';
        dataSpan.textContent = dataText;
    
        mainPubliContent.appendChild(titleSpan);
        mainPubliContent.appendChild(resuminSpan);
        mainPubliContent.appendChild(dataSpan);
    
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

    function addItemToMain(imgSrc, titleText, dataText, autor, imgSide) {
        const ulElement = document.querySelector('.left ul#pagina1');
        const newListItem = document.createElement('li');
        
        const imgElement = document.createElement('img');
        imgElement.src = imgSrc;
        imgElement.alt = '';

        const contentDiv = document.createElement('div');
        
        const BottomDiv = document.createElement('div');
        BottomDiv.id = "bottomDiv";
        const titleSpan = document.createElement('span');
        titleSpan.className = 'title';
        titleSpan.textContent = titleText;
        
        const autorSpan = document.createElement('span');
        autorSpan.className = 'autor';
        autorSpan.textContent = 'Por '+autor;  

        const dataSpan = document.createElement('span');
        dataSpan.className = 'data';
        dataSpan.textContent = dataText;
        
        contentDiv.appendChild(titleSpan);
        BottomDiv.appendChild(autorSpan);
        BottomDiv.appendChild(dataSpan);
        
        contentDiv.appendChild(BottomDiv);

        switch(imgSide) {
            case "left":
                
                newListItem.appendChild(imgElement);
                newListItem.appendChild(contentDiv);
                break;
            case "right":
                newListItem.appendChild(contentDiv);
                newListItem.appendChild(imgElement);
                break;
        }
        
        ulElement.appendChild(newListItem);
    }

    addItemToMain('./img/publi1.jpg', 'As plataformas como ferramenta de progresso — e desinformação: O fenômeno Big Brother', 
        '05/01/2025',"Anna Beatriz Egídio", "left");
    addItemToMain('./img/publi2.jpg', 'Fala Verdade recomenda: Não olhe para cima',
        '05/01/2025',"Maria Beatriz Figueiredo",  "right");
    addItemToMain('./img/publi3.jpg', 'Liberdade de expressão, Fake news e Controle digital — A resistência das gigantes digitais diante a regulamentação', 
        '05/01/2025',"Maria Beatriz Figueiredo",  "left");
    addItemToMain('./img/publi4.jpg', 'Fala Verdade ensina: Como identificar Fake News e evitar Desinformação', 
        '05/01/2025',"Maria Beatriz Figueiredo",  "right");
    addItemToMain('./img/publi5.jpg', 'Fala Verdade recomenda: A Caça', 
        '05/01/2025',"Maria Beatriz Figueiredo",  "left");


});