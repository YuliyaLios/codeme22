// zadanie

const ekwipunek = {
  pieniądze: 120.5,
  sprzęt: ['kompas', ' latarka', ' śpiwór'],
  prowiant: ['jabłko', ' woda', ' batonik', ' batonik'],
};

function solution() {

    var story_start = '<p>W plecaku: ' + ekwipunek.pieniądze + 'zł.<br>' + ekwipunek.sprzęt + '<br>' + ekwipunek.prowiant + '</p>';
    document.getElementById('ekwipunek').innerHTML += story_start;

    ekwipunek.pieniądze -= 29.99;
    ekwipunek.sprzęt.push(' karimata');
    var story_next = "<p>Harcerz kupił karimatę za 29.99zł.</p><p>Już w plecaku: " + ekwipunek.pieniądze + 'zł.<br>' + ekwipunek.sprzęt + '<br>' + ekwipunek.prowiant + '</p>';
    document.getElementById('ekwipunek').insertAdjacentHTML('beforeend', story_next);

    ekwipunek.prowiant.pop();
    var story_end = "<p>Harcerz zjadł batonik.</p><p>Już: " + ekwipunek.pieniądze + 'zł.<br>' + ekwipunek.sprzęt + '<br>' + ekwipunek.prowiant + '</p>' 
    document.getElementById('ekwipunek').insertAdjacentHTML('beforeend', story_end);

    var ile_rzeczy = ekwipunek.sprzęt.length + ekwipunek.prowiant.length;
    document.getElementById('ekwipunek').insertAdjacentHTML('beforeend', "<p>Harcerz ma " + ile_rzeczy + " przedmiotów w plecaku.</p>");
    document.getElementById('story').remove();

    return ekwipunek;
  };

function kupno1() {

let kwota = document.getElementById('kwota');

let przedmiot = document.getElementById('przedmiot');

let output = document.getElementById('output');

  output.innerHTML = " "; //in case of data re-entry

  output.innerHTML += "<p>Harcerz chciał kupić: " + przedmiot.value + " za kwotę " + kwota.value + " zł. </p>";

  kupno = {przedmiot: przedmiot.value, kwota: kwota.value,};

  return kupno;
};

function kupno2() {

  let output2 = document.getElementById('output2');

  if (kupno.kwota < ekwipunek.pieniądze) {
    
    output2.innerHTML += "<p>Harcerz miał pieniądze na zakup.</p>";
    ekwipunek.sprzęt.push(przedmiot.value);
    var saldo = ekwipunek.pieniądze - kupno.kwota;
    output2.insertAdjacentHTML('beforeend', "<p>W podsumowaniu: " + saldo + 'zł.<br>' + ekwipunek.sprzęt + '<br>' + ekwipunek.prowiant + '</p>' );
  } else {
    output2.innerHTML = "<p>Harcerz nie ma pieniądze na zakup.</p>";
  }

  };