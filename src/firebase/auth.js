import { createUserWithEmailAndPassword , GoogleAuthProvider, GithubAuthProvider, signInWithEmailAndPassword, signInWithPopup, sendPasswordResetEmail, updatePassword } from "firebase/auth";
import { auth } from "./firebase";

export const doCreateUserWithEmailAndPassword = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
}

export const doSignInWithEmailAndPassword = async (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
}

export const doSignInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);

    return result;
}

export const doSignInWithGithub = async () => {
    const provider = new GithubAuthProvider();
    const res = await signInWithPopup(auth, provider);

    return res;
}

export const doSignOut = () => {

    return auth.signOut;
};

// export const doPasswordReset = (email) => {
//     return sendPasswordResetEmail(auth, email);
// }

// export const doPasswordChange = (password) => {
//     return updatePassword(auth.currentUser, password);
// }

// export const doSendEmailVerification= (email) => {
//     return sendPasswordResetEmail(auth.currentUser, {
//         url: `${window.location.origin}/home`
//     });
// }