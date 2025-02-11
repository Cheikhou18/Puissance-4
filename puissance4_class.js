// je dois faire une classe des deux joueurs :
// avec chacun leur couleur, et leur id
// indicateur quand c'est au tour du joueur
// verification des cellules si elles sont vides ou s'il y a le pion du joueur
// définir le nombre de case (ok)

class Jeux {
  round = true;
  constructor(x = 6, y = 5, joueur1, joueur2) {
    this._x = x;
    this._y = y;
  }

  create() {
    var div = document.getElementById("tableau");
    var tableau = document.createElement("table");

    for (var i = 0; i < this._x; i++) {
      var tr = tableau.insertRow();
      tr.className = "row";

      for (var j = 0; j < this._y; j++) {
        var td = tr.insertCell();

        td.className = "test";
      }
    }
    div.appendChild(tableau);
  }

  changeColor(tr) {
    for (let i = tr.childElementCount - 1; i >= 0; i--) {
      if (tr.childNodes[i].style.backgroundColor) {
      } else {
        if (this.round == true) {
          tr.childNodes[i].style.backgroundColor = "red";
          this.round = false;
          if (this.victoire()) {
            alert("Player 1 WIN !");
            break;
          }

          return;
        } else {
          tr.childNodes[i].style.backgroundColor = "yellow";
          this.round = true;
          if (this.victoire()) {
            alert("Player 2 WIN !");
            break;
          }
          return;
        }
      }
    }
  }

  victoire() {
    // Vérification horizontale
    let rows = document.getElementsByClassName("row");
    let col = rows[0].childNodes.length;

    // Vérification horizontale
    for (let i = 0; i < rows.length; i++) {
      for (let j = 0; j <= col - 4; j++) {
        let row1 = rows[i].childNodes[j];
        let row2 = rows[i].childNodes[j + 1];
        let row3 = rows[i].childNodes[j + 2];
        let row4 = rows[i].childNodes[j + 3];

        if (
          row1.style.backgroundColor !== "" &&
          row1.style.backgroundColor === row2.style.backgroundColor &&
          row1.style.backgroundColor === row3.style.backgroundColor &&
          row1.style.backgroundColor === row4.style.backgroundColor
        ) {
          console.log("Victoire verticale");
          return true;
        }
      }
    }

    // Vérification verticale
    for (let j = 0; j < col; j++) {
      for (let i = 0; i <= rows.length - 4; i++) {
        let col1 = rows[i].childNodes[j];
        let col2 = rows[i + 1].childNodes[j];
        let col3 = rows[i + 2].childNodes[j];
        let col4 = rows[i + 3].childNodes[j];

        if (
          col1.style.backgroundColor !== "" &&
          col1.style.backgroundColor === col2.style.backgroundColor &&
          col1.style.backgroundColor === col3.style.backgroundColor &&
          col1.style.backgroundColor === col4.style.backgroundColor
        ) {
          console.log("Victoire horizontale");
          return true;
        }
      }
    }

    //Verification diagonale descente
    for (let i = 0; i <= rows.length - 4; i++) {
      for (let j = 0; j <= col - 4; j++) {
        let diago1 = rows[i].childNodes[j];
        let diago2 = rows[i + 1].childNodes[j + 1];
        let diago3 = rows[i + 2].childNodes[j + 2];
        let diago4 = rows[i + 3].childNodes[j + 3];

        if (
          diago1.style.backgroundColor !== "" &&
          diago1.style.backgroundColor === diago2.style.backgroundColor &&
          diago1.style.backgroundColor === diago3.style.backgroundColor &&
          diago1.style.backgroundColor === diago4.style.backgroundColor
        ) {
          console.log("Victoire diagonale");
          return true;
        }
      }
    }

    //Verification diagonale montante
    for (let i = 3; i < rows.length; i++) {
      for (let j = 0; j <= col - 4; j++) {
        let diago1 = rows[i].childNodes[j];
        let diago2 = rows[i - 1].childNodes[j + 1];
        let diago3 = rows[i - 2].childNodes[j + 2];
        let diago4 = rows[i - 3].childNodes[j + 3];

        if (
          diago1.style.backgroundColor !== "" &&
          diago1.style.backgroundColor === diago2.style.backgroundColor &&
          diago1.style.backgroundColor === diago4.style.backgroundColor &&
          diago1.style.backgroundColor === diago3.style.backgroundColor
        ) {
          console.log("Victoire diagonale");
          return true;
        }
      }
    }

    return false;
  }
}

export default Jeux;
