window.addEventListener("load", solve);

function solve() {
  const name = document.getElementById('student');
  const university = document.getElementById('university');
  const score = document.getElementById('score');

  document.getElementById("next-btn").addEventListener("click", next);

  function next() {
    if (name.value == "" ||
      university.value == "" ||
      score.value == "") {
      return;
    }

    let previewList = document.getElementById("preview-list");
    let publishedList = document.getElementById("candidates-list");
  }
}
