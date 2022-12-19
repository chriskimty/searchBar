// As long as there is one character in the search bar, (i.e. if typed 'j', should be able to see all courses w/ the word JavaScript)

// Track user's search target.value in the search bar and save it to a variable
const userSearch = document.querySelector('input');
// Event Listener on the input
// listening to the 'input' change - this is like the 'change' or 'submit' or 'click' and not an element name**
userSearch.addEventListener('input', (e) => {
  e.preventDefault();
  // console.log(e.target.value);
  const inputValue = e.target.value;

  // Loop through array (array.filter) and display courses that includes e.target.value & course change to all lowercase
  const suggestions = courses.filter((course) => {
    return course.toLowerCase().includes(inputValue);
  });

  // join('\r\n') puts strings on new line on any browser; did white-space: pre for css
  const courseList = suggestions.join('\r\n');
  if (inputValue) {
    const listItemElement = document.createElement('li');
    listItemElement.textContent = courseList;
    const ulElement = document.querySelector('ul');
    ulElement.appendChild(listItemElement);
  }
});

// Array of available courses
const courses = [
  'JavaScript',
  'Beginner JavaScript',
  'Html',
  'CSS',
  'React',
  'TypeScript',
];
