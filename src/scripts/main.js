domBuilder.appendInputForm();
//create log to save button
let logButton = document.querySelector(".lego__save")
//console.log(logButton)

//button listen submit feel
logButton.addEventListener("click", eventHandlers.formSubmitEventListener);
