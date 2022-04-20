<template>
  <LoginForm @submit="signIn" />
</template>

<script setup>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const auth = getAuth();
const signIn = (d) => {
  signInWithEmailAndPassword(auth, d.email, d.password) // THIS LINE CHANGED
    .then((data) => {
      console.log("Successfully logged in!");
    })
    .catch((error) => {
      console.log(error, d);
      // switch (error.code) {
      //   case "auth/invalid-email":
      //     errMsg.value = "Invalid email";
      //     break;
      //   case "auth/user-not-found":
      //     errMsg.value = "No account with that email was found";
      //     break;
      //   case "auth/wrong-password":
      //     errMsg.value = "Incorrect password";
      //     break;
      //   default:
      //     errMsg.value = "Email or password was incorrect";
      //     break;
      // }
    });
};
</script>
