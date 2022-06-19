const formRef = document.querySelector(`.login-form`);

formRef.addEventListener(`submit`, onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const formsValues = {};

  const {
    elements: { email, password },
  } = event.currentTarget;

  // console.log(event.currentTarget)
  // console.log(event.currentTarget.elements)
  //   console.log(email.value)
  //   console.log(password)
  if (email.value === "" || password.value === "") {
    alert("All fields must be completed");
    return;
  }

  formsValues.email = email.value;
  formsValues.password = password.value;
  console.log(formsValues);

  event.currentTarget.reset();
}
