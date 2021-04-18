import { createApp } from "vue";
import App from "./App.vue";

//import ActiveUser from "./components/ActiveUser.vue"
//import UserData from "./components/UserData.vue"

const app = createApp(App);

app.mount("#app");


// Task 1:
// Add two components to the app:
// An ActiveUser component and an UserData component (CHECK)
// ActiveUser should output a username (h2) and age (h3) (CHECK)
// UserData should output two input fields => for name and age (CHECK)
// Optional: Add styling of your choice (FUCK IT)

// Task 2: Output both components side-by-side in your main App template

// Task 3: Add user data and ensure it contains a name and age
// User data should be output in ActiveUser
// It should be updated via the UserData component
