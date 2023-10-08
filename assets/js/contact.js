// function validateForm() {
//     const name = document.getElementById("name").value;
//     const email = document.getElementById("email").value;
//     const birthdate = document.getElementById("birthdate").value;

//     if (name === "" || email === "" || birthdate === "") {
//         alert("All fields are required");
//         return false;
//     }

//     return true;
// }

// function validateForm() {
//     const fields = [
//         { name: "name", value: document.getElementById("name").value },
//         { name: "email", value: document.getElementById("email").value },
//         { name: "birthdate", value: document.getElementById("birthdate").value },
//     ];

//     const isFieldEmpty = (field) => {
//         return field.value.trim() === "";
//     };

//     if (fields.some(isFieldEmpty)) {
//         alert("All fields are required");
//         return false;
//     }

//     const isValidEmail = (email) => {
//         const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
//         return emailPattern.test(email);
//     };

//     if (!isValidEmail(fields.find((field) => field.name === "email").value)) {
//         alert("Please enter a valid email address");
//         return false;
//     }

//     return true;
// }

class FormValidator {
  
    isFieldEmpty(field) {
      return field.value.trim() === "";
    }
  
    isValidEmail(email) {
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      return emailPattern.test(email);
    }
  
    validate(fields) {
      for (const field of fields) {
        if (this.isFieldEmpty(field.value)) {
          throw new Error("All fields are required");
        }
        if (field.name === "email" && !this.isValidEmail(field.value)) {
          throw new Error("Please enter a valid email address");
        }
        
      }
    }
  }

  const formValidator = new FormValidator();
  function validateForm() {
    try {
      const fields = [
        { name: "name", value: document.getElementById("name") },
        { name: "email", value: document.getElementById("email") },
        { name: "birthdate", value: document.getElementById("birthdate") },
      ];
  
      formValidator.validate(fields);
      return true;
    } catch (error) {
      alert(error.message);
      return false;
    }
  }
  
  