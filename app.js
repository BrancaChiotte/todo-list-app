
    // Step 1 -> create variables `form`, `todosList`, `button`, `input`
    // to target the form, unordered list, button and input.
    var form = document.querySelector('form');
    var todoList = document.querySelector('ul');
    var button = document.querySelector('button');
    var input = document.getElementById('user-todo');


      // Step 1.1 -> Declare variable `todosArray` to hold our todos.
           // We want to ask if there are already `todos` in localStorage. If so, then we will get
            // those `todos` using JSON.parse. If local storage does not have any `todos` then we will
            // set our `todosArray` to an empty array.
            // var todosArray = [];
            var todosArray = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];

      // use localStorage setItem() method to set `todos` to a string with `JSON.stringify()`
            // JSON.stringify() if used because localStorage works with strings. This is how
            // we sent data to localStorage.
          localStorage.setItem('todos', JSON.stringify(todosArray));

          // Declare a variable `storage` that contains all the information in localStorage.
            // We will assign to `storage` JSON.parse() method that converts strings from local
            // storage into data we can access with JavaScript.
            // When receiving data from a web server, the data is always a string.
            //Parse the data with JSON.parse(), and the data becomes a JavaScript object.
          var storage = JSON.parse(localStorage.getItem('todos'));


    // Step 2 -> attach an event listener to the `form` variable with `addEventListener`
    // to capture the user input on the `submit` event.
    // Make sure to run `preventDefault()` on the event when the form is submitted.
    // Call a `todoMaker` function which we will create in step three and pass to it
    // the `input` variable and target the value the user has provide with `input.value`.
    // Finally, set the `input.value` to an empty string.
    form.addEventListener('submit', function(e) {
      e.preventDefault();
        // push onto `todosArray` the `input.value`
        todosArray.push(input.value);
              // on localStorage now use `setItem()` for the key `'todos'` the value
               // of the todosArray as a string with the `JSON.stringify()` method.
              localStorage.setItem('todos', JSON.stringify(todosArray));

      todoMaker(input.value);
      input.value = '';
    });


    // Step 3 -> create a todoMaker function that creates 'li' elements with the text user provides
    // from their form and appends it to the 'ul'.
    var todoMaker = function(text) {
      var todo = document.createElement('li');
      todo.textContent = text;
      todoList.appendChild(todo);
    }

         // Loop through localStorage when a user first opens a page and run the todoMaker function
         for (var i = 0; i < storage.length; i++) {
              todoMaker(storage[i]);
            }

    // Step 4 -> attach an event listener to the `clear all` button listening for
    // a user click.
    // In the function use a while loop checking to see whether there
      // is an li element as a child of the `ul` tag. In the code block use the
      // removeChild() DOM method to removed that `li` using the firstChild property.
    button.addEventListener('click', function() {

      // clear the `localStorage` with the `clear()` method
      localStorage.clear();

      while (todoList.firstChild) {
        todoList.removeChild(todoList.firstChild);
      }
    });
