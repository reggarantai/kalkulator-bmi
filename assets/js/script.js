function hitung(){
  $('#hasil').hide();

  var hasil = 'Kamu <strong>Obesitas</strong> tingkat 3',
  className = 'bg-danger-2 text-white',
  tinggi = $('#tinggi').val() / 100,
  berat = $('#berat').val(),
  bmi = (berat / ( tinggi * tinggi )).toFixed(1);

  if(bmi < 18.5){
    hasil = 'Berat badan kamu <strong>Kurang</strong>';
    className = 'bg-orange text-white';
  }
  if(bmi >= 18.5 && bmi < 23){
    hasil = 'Berat badan kamu <strong>Normal</strong>';
    className = 'bg-success text-white';
  }
  if(bmi >= 23 && bmi < 30){
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

  $('#tinggi').change(function(){
    validate()
  });
  $('#tinggi').keyup(function(){
    validate()
  });
  $('#berat').change(function(){
    validate()
  });
  $('#berat').keyup(function(){
    validate()
  });

});
