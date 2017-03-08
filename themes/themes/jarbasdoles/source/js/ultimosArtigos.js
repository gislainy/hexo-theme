//Inicializar o firebase
var config = {
  apiKey: "AIzaSyA2Y7pBEXK-HS-vEU7RJnnyBfoD4o8Aw9Q",
  authDomain: "jarbasdoles-7f14c.firebaseapp.com",
  databaseURL: "https://jarbasdoles-7f14c.firebaseio.com",
  storageBucket: "jarbasdoles-7f14c.appspot.com",
  messagingSenderId: "645633373677"

};
firebase.initializeApp(config);
//  post.body.replace(/(<[^>]*>)/g, '').substring(0, 250)
function carregarUltimosArtigos() {
  var sliderPrincipalHoda5 = document.querySelector('.sliderPrincipalHoda5');
  var databaseRef = firebase.database().ref('posts').limitToFirst(5);
  var loader = document.querySelector('.showbox');
  var index = 0;
  databaseRef.on('value', function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      var post = childSnapshot.val();
      if (post.status === 1) {
        var interna = document.createElement("div");
        if (index === 0) {
          interna.className = 'sliderHoda5 sliderHoda5Active';
          index++;
        }
        else interna.className = 'sliderHoda5';
        interna.innerHTML = `
                <div class="slideHoda5">
                  <div class="android-card-container mdl-grid">
                    <div class="mdl-cell mdl-cell--12-col mdl-card mdl-shadow--3dp">
                      <div class="mdl-card__media hoda5Image">
                        <img src="`+ post.image + `">
                      </div>
                      <div class="mdl-card__title hoda5TileArtigo">
                        <h4 class="mdl-card__title-text">`+ post.title + `</h4>
                      </div>
                      <div class="mdl-card__supporting-text">
                        <span class="mdl-typography--font-light mdl-typography--subhead">
                        `+ post.body.replace(/(<[^>]*>)/g, '').substring(0, 100) + `...
                        </span>
                      </div>
                      <div class="mdl-card__actions">
                        <a class="android-link mdl-button mdl-js-button mdl-typography--text-uppercase" href="/blog/#/post/`+ childSnapshot.key + `" data-upgraded=",MaterialButton">
                   Ver mais
                   <i class="material-icons">chevron_right</i>
                 </a>
                      </div>
                    </div>
                    </div>`
        sliderPrincipalHoda5.appendChild(interna);
      }
    });
  });
}
carregarUltimosArtigos();