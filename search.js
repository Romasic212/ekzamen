function search() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const searchResultsContainer = document.getElementById('search-results');
    searchResultsContainer.innerHTML = ''; // Очищаем предыдущие результаты

    // Здесь нужно указать, какие страницы нужно искать
    const pages = {
        'матан': 'matan.html',
        'история': 'matan.html', //  Замените 'history.html' на фактический URL
        'русский язык': 'matan.html', // Замените 'russian.html' на фактический URL
        'физика': 'matan.html', // Замените 'physics.html' на фактический URL
        'инфа': 'matan.html', // Замените 'info.html' на фактический URL
        'обж': 'obzh.html' // Замените 'obzh.html' на фактический URL
    };

    let resultsFound = false;

    for (const pageName in pages) {
        if (pageName.toLowerCase().includes(searchTerm)) {
            const resultLink = document.createElement('a');
            resultLink.href = pages[pageName];
            resultLink.textContent = `Страница: ${pageName}`;
            searchResultsContainer.appendChild(resultLink);
            searchResultsContainer.appendChild(document.createElement('br')); // Добавляем перенос строки между ссылками
            resultsFound = true;
        }
    }

    if (!resultsFound) {
        searchResultsContainer.textContent = 'Ничего не найдено.';
    }
}