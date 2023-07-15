export function displayResults() {
    const results = JSON.parse(localStorage.getItem('results')) || [];
    const resultsContainer = document.querySelector('.results-table');
    resultsContainer.innerHTML = 'Results:';
    results.forEach((result, index) => {
      const resultDiv = document.createElement('div');
      resultDiv.textContent = `${index + 1}. ${result}`;
      resultsContainer.appendChild(resultDiv);
    });
  }