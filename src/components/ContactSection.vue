<script setup>
import { ref } from 'vue'
import SocialNetworks from './SocialNetworks.vue'

const linePosition = ref('bottom')
</script>

<script>
import axios from "axios";

export default {
  data() {
    return {
      name: null,
      email: null,
      message: null
    }
  },
  methods: {
    handleSubmit() {
      sendInfo(this);
    }
  }
}

async function sendInfo(object) {
    const endpoint = 'https://901a319d67c143409d07175eae564beb.api.mockbin.io/';
    try {
        const formData = {
            name: object.name,
            email: object.email,
            message: object.message
        };
        const response = await axios.post(endpoint, formData);
        console.log(response);
        alert(response.data.message)
    } catch(error) {
        console.error('Error sending info:', error)
    }
}
</script>

<template>
    <div class="contact-container">
        <h1>Let's work together</h1>
        <div class="form-container">
            <form @submit.prevent="handleSubmit">
                <div class="form-input">
                    <label>Name</label>
                    <input type="text" required v-model="name" />
                </div>
                <div class="form-input">
                    <label>Email</label>
                    <input type="email" required v-model="email" />
                </div>
                <div class="form-input">
                    <label>Message</label>
                    <textarea maxlength="300" spellcheck="true" required v-model="message"></textarea>
                </div>
                <div class="form-input">
                    <button type="submit">Send</button>
                </div>
            </form>
        </div>
    </div>
    <div class="social-networks-container">
        <SocialNetworks :line-position="linePosition"/>
    </div>
</template>

<style lang="scss" scoped>
.contact-container {
    width: 100%;
    height: auto;
    min-height: calc(100vh - 82px);
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-left: 200px;
    padding-right: 200px;
    align-items: center;
    justify-content: center;
    border-bottom: 10px solid #F3F9F8;

    h1 {
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 70px;
        text-align: center;
        color: #F3F9F8;
    }

    .form-container {
        width: 50%;
        display: flex;
        flex-direction: column;
        gap: 30px;

        .form-input {
            display: flex;
            flex-wrap: wrap;
            padding-top: 15px;
            justify-content: center;
        }

        label {
            width: 100%;
            font-family: 'Roboto';
            font-size: 22px;
            font-weight: 100;
            text-align: left;
            color: #F3F9F8;
        }

        input,
        textarea {
            font-family: 'Roboto';
            font-size: 22px;
            font-weight: 100;
            background-color: transparent;
            border: 1px solid #F29F05;
            color: #F3F9F8;
            text-align: justify;
        }

        input {
            width: 100%;
            height: 1.5em;
        }
        
        textarea {
            width: 100%;
            height: 9em;
        }

        button {
            font-family: 'Roboto';
            font-weight: 600;
            font-size: 24px;
            color: #F3F9F8;
            background-color: #F29F05;
            height: 60px;
            width: 179px;
            justify-self: center;
        }
    }
}

.social-networks-container {
    width: 100%;
    height: 1px;
    transform: translateY(-364px);
}
</style>