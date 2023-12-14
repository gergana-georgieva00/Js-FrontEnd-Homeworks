function solve() {
  const text = document.getElementById('text').value;
  const namingConvention = document.getElementById('naming-convention').value;
  let result = '';

  if (namingConvention === 'Camel Case') {
    result = text.split(' ').map((word, index) =>
      index === 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join('');
  } else if (namingConvention === 'Pascal Case') {
    result = text.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join('');
  } else {
    result = 'Error!'
  }

  document.getElementById('result').innerText = result;
}