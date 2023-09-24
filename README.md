# Instruction

      -----   run Jsonserver by executing this command "npx json-server --watch db.json"

1. I was planning to create a backend for this using .net core web api and sql on DB , but since i have limited time I decided to use jsonserver to keep things simple. But if im gonna create a backend for this I will implement that using the repository pattern
   and either code first/database approach on entity framework.

# Tools used

1. axios to make an API call to json server
2. Json Server

# Documentation

1. Shows only 20 pokemons per page, other result can browsed by using the previous and back button.
2. User can search a pokemon by typing its name on the text box.
3. User can also click on the checkboxes of pokemon properties to filter the result.
4. Search can be trigger by pressing "search" button or just simple pressing enter.
5. Show all pokemon by clearing the filters and pressing the search button.
6. If there's no result on the search filters , A Error Page component will be called with a prop of message to show.
7. I added an extra property on the type json to allow specific color styling on each of the type.
