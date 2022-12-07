/* eslint-disable import/prefer-default-export */
import Cookies from 'js-cookie';
import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useUser = defineStore('user', () => {
  const userRiotID = ref('');
  const userLoggedIn = computed(() => userRiotID.value !== '');

  async function checkUserLoggedIn() {
    const csrf = Cookies.get('csrftoken') || '';
    const whoamiResponse = await fetch('http://localhost:8000/whoami', {
      method: 'GET',
      credentials: 'include', 
      mode: 'cors',
      headers: {
        'X-CSRFToken': csrf
      },
    })

    console.log(whoamiResponse)
    if (whoamiResponse.status === 200 && !whoamiResponse.redirected) {
      userRiotID.value = await whoamiResponse.text();
    } else {
      userRiotID.value = ''
    }
  }

  return { checkUserLoggedIn, userLoggedIn, userRiotID, }
});
