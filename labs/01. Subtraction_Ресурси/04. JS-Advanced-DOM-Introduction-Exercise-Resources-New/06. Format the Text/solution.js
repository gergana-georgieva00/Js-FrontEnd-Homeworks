function solve() {
  const inputText = document.getElementById('input').value;
  const sentences = inputText.split('.').filter(sentence => sentence.trim().length > 0);

  const outputDiv = document.getElementById('output');
  outputDiv.innerHTML = ''; // Clear previous content

  for (let i = 0; i < sentences.length; i += 3) {
    const paragraphText = sentences.slice(i, i + 3).join('. ') + '.'; // Add period after last sentence
    const paragraph = `<p>${paragraphText}</p>`;
    outputDiv.innerHTML += paragraph;
  }
}