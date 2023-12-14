function search() {
   const items = document.querySelectorAll('#towns li');
   const searchedItem = document.getElementById('searchText').value;
   let matches = 0;

   for (let index = 0; index < items.length; index++) {
      const element = items[index];
      if(element.textContent.includes(searchedItem)){
         element.style.fontWeight = 'bold';
         element.style.textDecoration = 'underline';
         matches++;
      }
   }

   const textMessage = `${matches} matches found`;
   document.getElementById('result').textContent = textMessage;
}
