const formRef = document.querySelector(`.login-form`);

formRef.addEventListener(`submit`, onFormSubmit);

function onFormSubmit(event) {
  const formsValues = {};

  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  //   console.log(email.value)
  //   console.log(password)
  if (email.value === "" || password.value === "") {
    alert("All fields must be completed");
  }

  formsValues.email = email.value;
  formsValues.password = password.value;
  console.log(formsValues);

  event.currentTarget.reset();
}
