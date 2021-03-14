function hitung(){
  $('#hasil').hide();

  var hasil = 'Kamu <strong>Obesitas</strong>',
  className = 'bg-danger text-white',
  tinggi = $('#tinggi').val() / 100,
  berat = $('#berat').val(),
  bmi = (berat / ( tinggi * tinggi )).toFixed(1);

  if(bmi < 18.5){
    hasil = 'Berat badan kamu <strong>Kurang</strong>';
  }else if(bmi >= 18.5 && bmi < 23){
    hasil = 'Berat badan kamu <strong>Normal</strong>';
    className = 'bg-success text-white';
  }else if(bmi >= 23 && bmi < 30){
    hasil = 'Berat badan kamu <strong>Berlebih</strong>';
    className = 'bg-warning text-dark';
  }

  $('#hasil').html(
      '<div class="'+className+'"><p>Nilai BMI/IMT kamu: <strong>'+bmi+'</strong></p><hr>'
      + '<h3>'+hasil+'</h3></div>'
  ).fadeIn();
}

$(document).ready(function(){

  $('#tinggi').change(function(){
    if($(this).val() > 50 && $('#berat').val() > 30) {
      hitung();
    }else{
      $('#hasil').html('');
    }
  });
  $('#tinggi').keyup(function(){
    if($(this).val() > 50 && $('#berat').val() > 30) {
      hitung();
    }else{
      $('#hasil').html('');
    }
  });

  $('#berat').change(function(){
    if($(this).val() > 30 && $('#tinggi').val() > 50) {
      hitung();
    }else{
      $('#hasil').html('');
    }
  });
  $('#berat').keyup(function(){
    if($(this).val() > 30 && $('#tinggi').val() > 50) {
      hitung();
    }else{
      $('#hasil').html('');
    }
  });

});
