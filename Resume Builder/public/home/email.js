function sendMail(e) {
    e.preventDefault(); // Prevent the default form submission behavior
    
    var params = {
        name: document.getElementById("fbName").value,
        email: document.getElementById("fbEmail").value,
        message: document.getElementById("fbMessage").value,
    };

    const serviceID = "service_43ud7ks";
    const templateID = "template_bu8pjce";

    emailjs.send(serviceID, templateID, params)
    .then(res => {
        document.getElementById("fbName").value = "";
        document.getElementById("fbEmail").value = "";
        document.getElementById("fbMessage").value = "";
        console.log(res);
        alert("Your message sent successfully!!");
    })
    .catch(err => console.log(err));
}