 function chnS() {
    document.body.style.fontFamily = "Arial, sans-serif";
    document.body.style.display = "flex";
    document.body.style.justifyContent = "center";
    document.body.style.alignItems = "center";
    document.body.style.height = "100vh";
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.boxSizing = "border-box";
    document.body.style.backgroundColor="grey";

    let h1=document.querySelector("h1");
    h1.style.textAlign="center";
  
 
    let h2=document.querySelector("h2");
    h2.style.textAlign="center";

    
    let p=document.querySelector("p");
    p.style.textAlign="center";
    let signupContainer = document.querySelector(".signup-container");
    if (signupContainer) {
        signupContainer.style.width = "300px";
        signupContainer.style.padding = "20px";
        signupContainer.style.border = "1px solid #ccc";
        signupContainer.style.borderRadius = "5px";
        signupContainer.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.1)";
        signupContainer.style.backgroundColor = "#fff";
    }

    let password = document.querySelector(".pass");
    if (password) {
        let passwordInput = password.querySelector("input[type='password']");
        passwordInput.style.display = "block";
        passwordInput.style.marginBottom = "10px";
        passwordInput.style.width = "100%";
        passwordInput.style.padding = "8px";
        passwordInput.style.border = "1px solid #ccc";
        passwordInput.style.borderRadius = "3px";
        passwordInput.style.boxSizing = "border-box";
    }
    let name = document.querySelector(".name");
    if (name) {
        let textInput = name.querySelector("input[type='text']");
        if (textInput) {
            textInput.style.display = "block";
            textInput.style.marginBottom = "10px";
            textInput.style.width = "100%";
            textInput.style.padding = "8px";
            textInput.style.border = "1px solid #ccc";
            textInput.style.borderRadius = "3px";
            textInput.style.boxSizing = "border-box";
        }
    }
    

    let subBtn = document.querySelector("#submit_btn");
    if (subBtn) {
        subBtn.style.width = "100%";
        subBtn.style.padding = "10px";
        subBtn.style.border = "none";
        subBtn.style.borderRadius = "3px";
        subBtn.style.cursor = "pointer";
    }

    let divCheckboxContainer = document.querySelector(".checkbox-container");
    if (divCheckboxContainer) {
        divCheckboxContainer.style.display = "flex";
        divCheckboxContainer.style.alignItems = "center";
        divCheckboxContainer.style.marginBottom = "12px";
    }

    let divOptionsContainer = document.querySelector(".options-container");
    if (divOptionsContainer) {
        divOptionsContainer.style.display = "block";
        divOptionsContainer.style.marginBottom = "5px";
        divOptionsContainer.style.textDecoration = "none";
        divOptionsContainer.style.textAlign = "center";
        divOptionsContainer.style.marginTop = "10px";
    }
}
