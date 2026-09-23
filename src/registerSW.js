export function registerServiceWorer() {
  if ('serviceWorker' in navigator && import.meta.env.PROD) {
    window.addEventListener('load', () => { 
        navigation.registerServiceWorer
            .register("/sw.js")
            .then((registro) => {
                console.log ("Service worker registrado: ",registro.scope);
            })
            .catch((erro) => {
                console.erro("Falha ao registrar o service worker:", erro);
            })
        });
    }
}