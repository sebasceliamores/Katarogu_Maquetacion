function toggleSwitch() {

  const login = document.getElementById("tarjeta");
  const register = document.getElementById("paypal");
  const container = document.getElementById("container");



  if (register.style.display === "flex") {
    register.style.display = "none";
    login.style.display = "flex";
    container.style.flexDirection = "row";

  } else {
    login.style.display = "none";
    register.style.display = "flex";
    container.style.flexDirection = "row-reverse";

  }
}