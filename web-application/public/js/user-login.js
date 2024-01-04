
window.addEventListener("load", () => {
    let form = document.querySelector("#userLogin");
  
    form.addEventListener("submit", async (event) => {
      // prevent it from submitting
      event.preventDefault();
      let sendData = getFormData(form);
      console.log(sendData);
      let { data } = await axios.post("/make-login", sendData);
      if (data.status === true) {
       
        Swal.fire({
          icon: "success",
          title: "Login successfully.",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          localStorage.setItem("fc_token", data.token);
          window.location.assign("/dashboard");
        });
      } else {
        Swal.fire({
          icon: "warning",
          title: "Message",
          text: data.message,
        });
      }
    });
  });
  
  // HTTP ==> cache(limited GET (url)) | body (unlimited , (POST/PUT))