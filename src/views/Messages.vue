<template>
    <div>
        <h1>Welcome to Your Clash, !</h1>
    </div>

    <p id="messages">
        <h3>Your Messages With {{ friend }}</h3>
    </p>

    <el-card class="box-card" v-for="message in messages">
        <template #header>
            <div class="card-header">
                <el-row>
                    <el-col>
                        <span>{{ message.friend1__riot_id === friend ? `${friend}` : 'me' }}</span>
                    </el-col>
                    <el-col>
                        <span>{{ message.send_time }}</span>
                    </el-col>
                </el-row>
            </div>
        </template>
        <div>{{ message.message_text }}</div>
    </el-card>

    <el-input
        v-model="messageText"
        :rows="2"
        type="textarea"
        placeholder="Write a message to your friend"
    />
    <el-button @click="send">Send!</el-button>

</template>

<script  setup lang="ts"> 
import Cookies from 'js-cookie';
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
const friend = route.params.friend as string

const messageText = ref('');

interface Message {
    friend1__riot_id: string;
    friend2__riot_id: string;
    message_text: string;
    send_time: string;
}

const messages = ref<Message[]>([])
async function send() {

    const data = new FormData();
    data.append('friend', friend)
    data.append('message_text', messageText.value)

    const response = await fetch('http://localhost:8000/send_message/', {

        method: 'POST',

        credentials: 'include', 

        mode: 'cors',

        headers: {
            'X-CSRFToken': Cookies.get('csrftoken')
        },

        body: data,

    })

    if (response.status === 200) {
        messages.value.push({
            friend1__riot_id: '',
            friend2__riot_id: friend, 
            message_text: `${messageText.value}`,
            send_time: new Date().toISOString(),
        })

        messageText.value = '';
    }

}

fetch(`http://localhost:8000/show_messages/?friend=${friend}`, {

    method: 'GET',

    credentials: 'include', 

    mode: 'cors',

    headers: {
        'X-CSRFToken': Cookies.get('csrftoken')
    },

})
    .then((resp) => resp.json())
    .then((data) => messages.value = data)

</script>
