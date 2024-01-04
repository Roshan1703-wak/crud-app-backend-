window.addEventListener("load", () => {
    let form = document.querySelector("#userRegistration");
    form.addEventListener("submit", async (event) => {
      // prevent it from submitting
      event.preventDefault();
      let sendData = getFormData(form);
      console.log(sendData);
      let { data } = await axios.post("/save-new-user", sendData);
      if (data.status === true) {
        // success , warning , error, info
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Your Registration Done Successfully",
        }).then(() => {
          window.location.assign("/");
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