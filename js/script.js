// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus: Aggiungere un’immagine presa anch’essa da un data
// Altro possibile Bonus:
// gestire una funzione con un evento nel modo Vue.

// istanza vue
var container = new Vue ({
  el: '#container',
  data: {
      msg: 'Ciao, sono un messaggio inserito dal data di Vue ! Non ci credi? allora clicca il bottone, se mento cambierà colore anche "Messaggio"!',
      avatar: 'sunburn300.png',
      classi: ' '
   },
   methods: {
      // javascript puro
      changeColor: function () {
         if (this.classi === 'red') {
            this.classi = 'blue';
         } else if (this.classi === 'blue') {
            this.classi = ' ';
         } else {
            this.classi = 'red';
         }
      }
   }
});
