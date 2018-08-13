{

/* ========================
    Inicialização Firebase
======================== */

var config = {
    apiKey: "AIzaSyA6gjh3d_Fv5moAHbgpCElccrFWY0-9w4M",
    authDomain: "aulanotificacao-a48c4.firebaseapp.com",
    databaseURL: "https://aulanotificacao-a48c4.firebaseio.com",
    projectId: "aulanotificacao-a48c4",
    storageBucket: "aulanotificacao-a48c4.appspot.com",
    messagingSenderId: "374454005682"
  };
firebase.initializeApp(config);

/* ========================
    Variáveis
======================== */
const FIREBASE_AUTH = firebase.auth();
const BTN_LOGAR = document.getElementById('logar');
const BTN_SAIR = document.getElementById('sair');

/* ========================
    Eventos
======================== */
BTN_LOGAR.addEventListener('click',logar);
BTN_SAIR.addEventListener('click',sair);
FIREBASE_AUTH.onAuthStateChanged(estadoAutenticacaoAlterado);

/* ========================
    Funções 
======================== */

function sair(){
    FIREBASE_AUTH.signOut();
}

function estadoAutenticacaoAlterado(usuario){
    if(usuario){
        console.log(usuario);
        BTN_LOGAR.setAttribute('hidden', 'true');
        BTN_SAIR.removeAttribute('hidden');
    } else {
        console.log('Ninguem Logado ');
        BTN_SAIR.setAttribute('hidden', 'true');
        BTN_LOGAR.removeAttribute('hidden');
    }
}

function logar(){
    FIREBASE_AUTH.signInWithPopup( 
        new firebase.auth.GoogleAuthProvider()
    )
}





}