# 🔨 Technical Challenge - AmbecTech 

## 📌 1. Introduction
This test plan aims to validate the primary functionalities testing Swagger application in your [Frontend](https://front.serverest.dev/login) and [Swagger API](https://serverest.dev/) versions, ensuring users have a consistent and error-free experience. 
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
The 6 test cases are located in the e2e folder and must adhere to the business rules described below. 

### **🛠️ Fronted tests**  
| Test name                   | Test Case                          | Steps                                                                                                                     | Expected Result                       |
|----------------------------|------------------------------------|---------------------------------------------------------------------------------------------------------------------------|---------------------------------------|
| Invalid login              | User tries to login with invalid credentials | 1. Open login page<br>2. Enter email "invalidEmail@gmail.com" and password "admin123"<br>3. Click "Entrar" button          | Error message is displayed            |
| Successful registration    | A new user successfully registers  | 1. Open ServeRest login page<br>2. Click "Cadastre-se" link<br>3. Fill in name, email and password<br>4. Click "Cadastrar" | Redirected to the home page           |
| Valid login                | User logs in successfully          | 1. Open login page<br>2. Enter valid credentials<br>3. Click "Entrar" button                                               | Redirected to the main page           |

### **🧪 Cypress API Tests**  
| Test name               | Test Case                           | Steps                                                                                                                       | Expected Result                            |
|------------------------|-------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|--------------------------------------------|
| Valid User Login       | Perform login with valid credentials | 1. Send POST request to `/login` with valid email and password<br>2. Validate response status<br>3. Check for `authorization` property | Response status 200 and token returned     |
| Product Registration   | Register product with admin token    | 1. Login with admin user to get token<br>2. Send POST request to `/produtos` with product data and token<br>3. Validate status and message | Response status 201 and success message    |
| User Registration      | Register new user successfully        | 1. Send POST request to `/users` with unique email and valid data<br>2. Validate response status<br>3. Check success message in response | Response status 201 and success message    |


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
This plan covers the essential flows required by the AmbevTech QA position test. Additional cases can be added as needed to cover more user scenarios.

🚀 **Happy Testing! Created with 💖 by Alisson Bucchi**