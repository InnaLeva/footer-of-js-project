
 const form = document.querySelector('.footer-form');
const modal = document.getElementById('modal');
const closeModalBtn = document.querySelector('.footer-close-button');
const STORAGE_KEY = 'feedback-form-state';

let formData = {
    email: '',
    comments: ''
};

// Initialize form by populating it with data from localStorage
populateForm();

// Add event listeners
form.addEventListener('input', handleFormInput);
form.addEventListener('submit', handleFormSubmit);
closeModalBtn.addEventListener('click', closeModal);
modal.addEventListener('click', outsideClickClose);
window.addEventListener('keydown', escapeKeyClose);

// Function to handle input into the form
function handleFormInput(event) {
    const { value, name } = event.target;
    formData[name] = value.trim();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));

    if (name === 'email') {
        validateEmail(event.target);
    }
}

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault();
    
    if (form.checkValidity()) {
        openModal();
        // Optionally trigger the submit action to the API
        // submitFormData(formData);
    } else {
        alert('Fill in all fields');
    }
}

// Function to validate email input
function validateEmail(inputElement) {
    const emailMessage = document.getElementById("email-message");
    const emailPattern = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    if (emailPattern.test(inputElement.value.trim())) {
        emailMessage.textContent = "Success!";
        emailMessage.classList.add("success");
        emailMessage.classList.remove("error");
    } else {
        emailMessage.textContent = "Invalid email, try again";
        emailMessage.classList.add("error");
        emailMessage.classList.remove("success");
    }
}

// Function to submit data to the server (commented out for now)
function submitFormData(data) {
    // Uncomment and implement fetch request here as needed
    /*
    fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(() => {
        openModal();
        localStorage.removeItem(STORAGE_KEY);
        form.reset();
        formData = { email: '', comments: '' }; // Reset data
    })
    .catch(error => {
        alert('There was a problem with your submission. Please try again.');
    });
    */
}

// Function to open modal
function openModal() {
  form.requestFullscreen();
    modal.classList.add('is-open');
}

// Function to close modal
function closeModal() {
    modal.classList.remove('is-open');
}

// Function to close modal on outside click
function outsideClickClose(event) {
    if (event.target === modal) {
        closeModal();
    }
}

// Function to close modal on Escape key press
function escapeKeyClose(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
}

// Function to populate the form with data from localStorage
function populateForm() {
    const savedFeedbackData = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (savedFeedbackData) {
        for (const key in savedFeedbackData) {
            if (savedFeedbackData.hasOwnProperty(key)) {
                form.elements[key].value = savedFeedbackData[key];
                formData[key] = savedFeedbackData[key];
            }
        }
    }
}


/*### Explanation:
1. **Event Listeners**: All event listeners are registered at the beginning for clarity.
2. **Form Handling**: Functions such as `handleFormInput` and `handleFormSubmit` handle the logic for input and submission.
3. **Validation**: The `validateEmail` function checks the email validity and updates the message accordingly.
4. **Modal Management**: Functions (like `openModal` and `closeModal`) manage the modal display state.
5. **LocalStorage Handling**: The `populateForm` function retrieves saved feedback data from `localStorage` to pre-fill the form.
6. **Modular Structure**: All functions are defined separately for better maintainability and readability, allowing for easy imports into your `main.js`.

### Note:
- Ensure to implement the actual submission logic inside `submitFormData` when needed. For now, it’s commented out.
- Make sure to include a link to this script in your HTML file, like so:
```html
<script type="module" src="./path/to/your/script.js"></script>
```
- The `#email-message` span should exist in your HTML for displaying email validation feedback. */
