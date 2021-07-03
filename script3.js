const naira = document.getElementById('naira');
naira.addEventListener('input', nairaConverter);
function nairaConverter(e){
    let converterNaira = e.target.value;
    document.getElementById('dollars').value = converterNaira / 493;
    document.getElementById('pounds').value = converterNaira / 710;
    document.getElementById('euros').value = converterNaira / 595;
}
