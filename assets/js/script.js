// Author: Regga @reggarantai
// https://regga.id/coding/

// CLASSIFICATION OF OVERWEIGHT AND OBESITY BY BMI
// https://www.nhlbi.nih.gov/files/docs/guidelines/ob_gdlns.pdf

function hitung(){
  $('#hasil').hide();
  console.log('HITUNF');
  var hasil = 'Kamu <strong>Obesitas</strong> tingkat 3',
  className = 'bg-danger-2 text-white',
  tinggi = $('#tinggi').val() / 100,
  berat = $('#berat').val(),
  bmi = (berat / ( tinggi * tinggi )).toFixed(1);

  if(bmi < 18.5){
    hasil = 'Berat badan kamu <strong>Kurang</strong>';
    className = 'bg-orange text-white';
  }
  if(bmi >= 18.5 && bmi < 25){
    hasil = 'Berat badan kamu <strong>Normal</strong>';
    className = 'bg-success text-white';
  }
  if(bmi >= 25 && bmi < 30){
    hasil = 'Berat badan kamu <strong>Berlebih</strong>';
    className = 'bg-warning text-dark';
  }
  if(bmi >= 30 && bmi < 35){
    hasil = 'Kamu <strong>Obesitas</strong> tingkat 1';
    className = 'bg-warning-2 text-white';
  }
  if(bmi >= 35 && bmi < 40){
    hasil = 'Kamu <strong>Obesitas</strong> tingkat 2';
    className = 'bg-danger text-white';
  }

  $('#hasil').html(
      '<div class="'+className+'"><p>Nilai BMI/IMT kamu: <strong>'+bmi+'</strong></p><hr>'
      + '<h3>'+hasil+'</h3></div>'
  ).fadeIn();
}

function validate(){
  $('#tinggi').val() > 50 && $('#berat').val() > 30 ? hitung() : $('#hasil').html('');
}

$(document).ready(function(){

  var tinggi = $('#tinggi').val(),
  berat = $('#berat').val();

  $('#tinggi, #berat').keyup(function(){
    tinggi = $('#tinggi').val();
    berat = $('#berat').val();
    validate();
  });

  $('#tinggi, #berat').change(function(){

    // Untuk menghindari dobel proses karena pengaruh keyup, maka perlu diset kondisi
    var change = true,
    tinggiSaatIni = $('#tinggi').val(),
    beratSaatIni = $('#berat').val();

    if(
      ($(this).attr('id') == 'tinggi' && tinggiSaatIni == tinggi)
      || ($(this).attr('id') == 'berat' && beratSaatIni == berat)
    ) {
      change = false;
    }

    if(change){
      validate()
    }
  });

});
