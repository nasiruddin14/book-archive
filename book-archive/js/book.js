const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);
    searchField.value = '';
    const url = `http://openlibrary.org/search.json?q=${searchText}`;
    // console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data));
}

const displaySearchResult = data => {
    const books = data.docs;
  const searchResult = document.getElementById('search-result');
  books.forEach(book => {
      console.log(book);
      const div = document.createElement('div');
      div.classList.add('col');
      div.innerHTML =`
      <div class="card h-100">
        <img src="${book.cover_i}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${book.title}</h5>
            <p class="card-text"> ${book.author_name}</p>
            <p class="card-text">${book.first_publish_year}</p>
            <p class="card-text">${book.publish_date}</p>
            <p class="card-text">${book.publisher}</p>
      </div>
    </div>
      `;
      searchResult.appendChild(div);
  })
}