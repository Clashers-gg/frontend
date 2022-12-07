/* eslint-disable import/prefer-default-export */
import Cookies from 'js-cookie';
import { defineStore } from 'pinia';
import { computed, ref, watch } from 'vue';

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

    if (whoamiResponse.status === 200 && !whoamiResponse.redirected) {
      userRiotID.value = await whoamiResponse.text();
    } else {
      userRiotID.value = ''
    }
  }

  const userInfo = ref({ name: '', summonerLevel: '', profileIconId: ''});

  async function getUserInfo() {
    const csrf = Cookies.get('csrftoken') || '';
    const response = await fetch(`http://localhost:8000/get_player_info`, {
        method: 'GET',
        credentials: 'include', 
        mode: 'cors',
        headers: {
            'X-CSRFToken': csrf
        },
    })

    userInfo.value = await response.json();
  }

  watch(userRiotID, () => getUserInfo());

  return { checkUserLoggedIn, userInfo, userLoggedIn, userRiotID, }
});
