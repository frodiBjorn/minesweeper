export function saveResult(result) {
    const results = JSON.parse(localStorage.getItem('results')) || [];
    results.push(result);
    if (results.length > 10) {
      results.shift();
    }
    localStorage.setItem('results', JSON.stringify(results));
  }