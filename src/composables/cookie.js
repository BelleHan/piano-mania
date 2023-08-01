// Assuming you have a Pinia store named 'myStore' and it has a property 'counter'
import { useUserStore } from "@/stores/user-store";

const userStore = useUserStore();

// Function to set a cookie
function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${encodeURIComponent(value)};expires=${expires.toUTCString()};path=/`;
}

// Function to get the value of a cookie by name
function getCookie(name) {
    const cookieArr = document.cookie.split(';');
    for (let i = 0; i < cookieArr.length; i++) {
        const cookiePair = cookieArr[i].split('=');
        const cookieName = cookiePair[0].trim();
        if (cookieName === name) {
            return decodeURIComponent(cookiePair[1]);
        }
    }
    return null;
}

// Read the cookie and update the Pinia state on application load
const savedUser = getCookie('userName');
if (savedUser !== null) {
    // Assuming you have a Pinia action to set the counter value
    userStore.setUserName(savedUser);
}

// Save the Pinia state to a cookie whenever it changes
userStore.$subscribe(({ userName }) => {
    setCookie('userName', userName.toString(), 30); // Save the counter to a cookie for 30 days
});
