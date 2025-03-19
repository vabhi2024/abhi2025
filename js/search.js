function performSearch() {
      const query = document.getElementById('search-input').value;
      if (query.trim() !== '') {
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
      } else {
        alert('#Please input here.');
      }
    }
  