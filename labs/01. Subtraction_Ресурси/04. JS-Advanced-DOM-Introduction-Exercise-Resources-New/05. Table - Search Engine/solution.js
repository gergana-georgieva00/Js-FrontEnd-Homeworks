function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const allCells = document.getElementsByTagName('tr');
      const searchString = document.getElementById('searchField').value;

      for (let index = 2; index < allCells.length; index++) {
         const element = allCells[index];

         if(element.textContent.includes(searchString)){
            element.classList.add('select')
         }
      }
   }
}