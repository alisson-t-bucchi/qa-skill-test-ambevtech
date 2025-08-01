# 🔨 Technical Challenge

## 📌 1. Introduction
This test plan aims to validate the primary functionalities of the [QA Challenge RX App](https://qa-challenge-rx.vercel.app/) website, ensuring users have a consistent and error-free experience. 
The tests will be automated using **Cypress** with **JavaScript**, and the structure is based on the project object model (POM).  

---

## 📌 2. Scope
The tests will cover the following key functionalities:

✅ Cypress test automation 

✅ DOM element manipulation 

✅ Behaviour verification 

✅ HTTP request handling 

✅ Database query testing 

✅ Documentation practices 

✅ Problem-solving approach 


---

## 📌 3. Testing Approach
**Tool:** Cypress   
**Types of Tests:**  
- Application behaviour 
- Functionality

---

## 📌 4. Test Cases
The 7 test cases are located in the e2e folder and must adhere to the business rules described below. 

### **🛠️ Module: Authentication**  
| ID         | Test Case                         | Steps | Expected Result |
|------------|-----------------------------------|--------|--------------------|
| exercise 1 | Find Product with Specific Price  | 1. Access the main page <br> 2. Search for products with 59 value <br> 3. Search the product Mouse with id 45628 | Mouse99 |
| exercise 2 | Complete the code to find specific elements within the row that match the 05/15/2024 date (in Los Angeles timezone).  | 1. Access the main page <br> 2. Find the table row with the specific date <br> 3. Assert the row contains a <p> with text "First" <br> 4. Assert the row with a <span> with text "Accept" <br> 5. "Assert the row contains the "View" button. <br> 6. Click the "Order More" button | The Second line with the types assigned has the button "Order More" clicked |
| exercise 3 | Verify if a specific checkbox is checked | 1. Access the main page <br> 2. Select the component container and find the ".item-content" inside. <br> 3. Locate the tag <paragraph> with text "Test2" up to the parent of the <paragraph> element tag. <br> 4. Find a checkbox inside and assert it is checked. | Find the second line with "Text2" with a checked box. |
| exercise 4 | Verify elemnts relationship | 1. Access the main page <br> 2. Locate the container and find a <span> with text "old-car". <br> 3. Get the parent of the "old-car" span tag. <br> 4. Search within the parent for a <span> with text "1" | Find the second line with "old-car 1" exists. |
| exercise 5 | Create a custom Cypress command for a user login | 1. Access the command.js file and execute the following steps: fill in the email and password input, click the submit button and verify the welcome message. <br>  2. Go to test and execute the login page | Find a message "Welcome back" after inserting the email, password, and clicking the submit button. |
| exercise 6 | Product selection | 1. Access the main page. <br> 2. Find the product card for "Gaming Headset" with a price of 89.99. <br> 3. Within that product card, click the "Add" button | Find a message "Correct! You selected the Gaming Headset" click "Add to Cart" button. |
| exercise 7 | API interception | 1. Intercept the POST request. <br> 2. Assert the request body with title, body, and a userId. <br> 3. Continue the intercepted request and assert the response. <br> 4. Alias the intercept and send the POST manually. <br> 5. Assert the response | Show message that the response status is 201 (created) |
---

## 📌 5. Setting up the environment

### Requirements
- Node.js is installed on your machine.
- Cypress is installed globally or locally in the project.

### Installation
1. Clone this repository:
```bash
git clone <REPOSITORY_URL>
cd <REPOSITORY_NAME>
```

2. Install Cypress dependencies in a package.json:
```bash
npm install
```
## 📌 6. Test execution
The user can execute a Cypress test in a headless or interactive mode. 

- Headless mode:

1. Activate Cypress in a headless mode:
```bash
npx cypress run
```
2. Execute all tests:
```bash
npm tests
```

3. Execute specific test:
```bash
npx cypress run --spec <path to the test file>
```
- Interactive mode:

1. Insert in the script section of the package.json file the code below:
```bash
"scripts": {
  "cy:open": "cypress open",
  "test": "cypress run" 
  },
```
2. Open Cypress display and choose the tests to execute:
```bash
npm run cy:open
```

---

## 📌 6. Conclusion
This plan covers the essential flows required by the Rx Redefined company test. Additional cases can be added as needed to cover more user scenarios.

🚀 **Happy Testing! Created with 💖 by Alisson Bucchi**