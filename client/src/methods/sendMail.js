import emailjs from 'emailjs-com';

export default function sendMail(email, rand) {
    const templateParams = {
        email: email,
        message: rand
    };

    emailjs.send(process.env.REACT_APP_SERVICE, process.env.REACT_APP_TEMPLATE, templateParams, process.env.REACT_APP_USER)
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
        }, (err) => {
            console.log('FAILED...', err);
        });

}
