const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

app.post('/send-email', async (req, res) => {
    const { name, username, email, subject, message } = req.body;

    try {
        const response = await axios.post('https://api.sendgrid.com/v3/mail/send', {
            personalizations: [{
                to: [{ email: 'barbona.agus10@gmail.com' }],
                subject: subject
            }],
            from: { email: email, name: name,  },
            content: [{
                type: 'text/plain',
                value: `Message from: ${name} (${username})\nEmail: ${email}\nMessage: ${message}`
            }]
        }, {
            headers: {
                'Authorization': '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',
                'Content-Type': 'application/json'
            }
        });

        if (response.status === 202) {
            res.send({ message: 'Mensaje enviado con exito. Nos contactaremos a la brevedad :D' });
        }
    } catch (error) {
        console.error('ERROR, No hemos podido enviar tu mensaje :( ', error);
        res.status(500).send({ error: error.message });
    }
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
