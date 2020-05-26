handleSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    axios({
        method: "POST",
        url: "http://localhost:3002/send",
        data: {
            name,
            email,
            message 
        }
    }).then((res) => {
        if (res.data.msg === 'success') {
            alert('Message Sent.');
            this.resetForm()
        } else if (res.data.msg === 'fail') {
            alert('Message failed to send.');
        }
    });
}

resetForm() {
    document.getElementById('contact-form').reset();
}

