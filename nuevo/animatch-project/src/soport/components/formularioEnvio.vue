<template>
    <div>
        <div class="circle-image"></div>
        <div class="name">Soporte</div>
        <section class="text-soport">
            <p>¡Gracias por utilizar Animatch para encontrar el amor para tus mascotas!<br>
                Si tienes alguna pregunta, comentario o problema técnico, nuestro equipo de
                soporte está aquí para ayudarte. <br>
                Por favor, utiliza el siguiente formulario de contacto o los detalles de contacto que aparecen 
                a continuación para comunicarte con nosotros. Haremos todo lo posible para responder a tus consultas 
                en el menor tiempo posible.</p>
        </section> 
        <div class="soport-box">
            <form @submit.prevent="submitForm" id="support-form">
                <input type="text" v-model="name" placeholder="Nombre y Apellido">
                <p v-if="errors.name" class="error">{{ errors.name }}</p>
    
                <input type="text" v-model="username" placeholder="Usuario">
                <p v-if="errors.username" class="error">{{ errors.username }}</p>
    
                <input type="email" v-model="email" placeholder="Email">
                <p v-if="errors.email" class="error">{{ errors.email }}</p>
    
                <input type="text" v-model="subject" placeholder="Asunto">
                <p v-if="errors.subject" class="error">{{ errors.subject }}</p>
    
                <textarea v-model="message" placeholder="Mensaje"></textarea>
                <p v-if="errors.message" class="error">{{ errors.message }}</p>
    
                <button type="submit" class="send">Enviar</button>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios'; 

export default {
    data() {
        return {
            name: "",
            username: "",
            email: "",
            subject: "",
            message: "",
            errors: {
                name: null,
                username: null,
                email: null,
                subject: null,
                message: null
            }
        };
    },
    methods: {
        resetForm() {
            this.name = "";
            this.username = "";
            this.email = "";
            this.subject = "";
            this.message = "";
        },
        async submitForm() {
            // Validación de entradas de usuarios
            this.errors = {
                name: this.name ? null : "El nombre y apellido son obligatorios.",
                username: this.username ? null : "El usuario es obligatorio.",
                email:  (this.email && this.email.includes('@') && this.email.includes('.com')) ? null : "El email es inválido o está vacío.",
                subject: this.subject ? null : "El asunto es obligatorio.",
                message: this.message ? null : "El mensaje es obligatorio.",
            };

            // Condicional si los datos son validos
            if (!Object.values(this.errors).some(error => error)) {
                const formData = {
                    name: this.name,
                    username: this.username,
                    email: this.email,
                    subject: this.subject,
                    message: this.message
                };
                console.log(formData);

                try {
<<<<<<< HEAD
                    const response = await axios.post('http://localhost:3000/send-email', formData);
=======
                    const response = await axios.post('http://localhost:8080/send-email', formData);
>>>>>>> 67900fee92bd850bfec7ade92c5d61ff0c9bcd74
                    console.log('Response from server:', response.data);
                    this.resetForm();
                } catch (error) {
                    console.error('Error sending form data to server:', error);
                }
            }
        }
    }
};
</script>

<style scoped>
* {
    margin-left: 20%;
    padding: 0;
    box-sizing: border-box; 
}

:root {
    --rojoOscuro: #c82711;
    --rosita: #FFB8AE;
    --azulVinculos: #0075CA;
}

.circle-image {
    width: 60px;
    height: 60px;
    margin: 10px auto; 
    background-size: cover;
    background-color: var(--rosita);
    background-image: url('../../assets/principalResouse/logo_animatch.png');
    background-position: center;
    border-radius: 50%;
}

.name {
    font-family: 'Merienda One', cursive;
    font-size: medium;
    color: var(--rojoOscuro);
    text-shadow: 2px 2px 4px rgba(0, 0, 0.5, 0.5);
    text-align: center;
    margin: 10px auto;
}

.text-soport {
    text-align: center;
    margin: 10px auto;
}

.text-soport p {
    font-size: 14px;
    color: #333;
    max-width: 90%;
    line-height: 1.5;
    margin: 0 auto;
}

.soport-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
    margin: auto;
    width: 90%;
    background-color: rgba(255, 184, 174, 0.5);
    box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.2);
    border-radius: 20px;
}

#support-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 10px 0;
    
}

#support-form input, #support-form textarea {
    width: 100%;
    box-shadow: 1px 3px 5px #8e8686;
    padding: 8px;
    margin: 8px 0;
    border: 1px solid var(--azulVinculos);
    border-radius: 5px;
    outline: none;
    font-size: 14px;
}

#support-form textarea {
    resize: vertical;
    min-height: 80px;
    max-height: 130px;
}

.send {
    margin: 10px auto;
    background-color: var(--azulVinculos);
    color: white;
    padding: 8px 12px;
    border: none;
    border-radius: 5px;
    font-size: 14px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;
}

.send:active {
    background-color: var(--rojoOscuro);
    transform: translateY(2px);
}
.error {
    color: red;}

/* Estilos para pantallas más grandes (ejemplo: tablets y desktop) */
@media (min-width: 768px) {
    * {
    margin-left: 0;
    }
    .circle-image {
        width: 100px;
        height: 100px;
        margin: 20px auto;
    }

    .name {
        font-size: large;
        margin: 20px;
    }

    .text-soport {
        margin: 20px;
    }

    .text-soport p {
        font-size: 15px;
        max-width: 80%;
    }

    .soport-box {
        width: 60%;
        padding: 20px;
        padding-bottom: 50px;
        border-radius: 30px;
    }

    #support-form input, #support-form textarea {
        width: 80%;
        padding: 10px;
        margin: 10px 0;
    }

    #support-form textarea {
        min-height: 100px;
        max-height: 150px;
    }

    .send {
        margin-top: 10px;
        margin-bottom: 10px;
        padding: 10px 15px;
        font-size: 16px;
    }
}

</style>