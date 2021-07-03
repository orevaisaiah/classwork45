// const naira = document.getElementById('naira');
// naira.addEventListener('input', nairaConverter);
// function nairaConverter(e){
//     let converterNaira = e.target.value;
//     document.getElementById('dollars').value = converterNaira / 493;
//     document.getElementById('pounds').value = converterNaira / 710;
//     document.getElementById('euros').value = converterNaira / 595;
// }

// const password1 = document.form.p1;
// const password2 = document.form.p2;

// const submitBtn = document.querySelector('#submit');
// submitBtn.addEventListener('click', function(e){
//     e.preventDefault()
//     if (password1.value !== password2.value){
//         alert('Password does not match');
//         return false;
//     }
//     else{
//         alert('form submitted');
//     }
// });
function checker(){
    const numb = document.querySelector('#number').value;
    if (isNaN(numb)){
        alert('Please Enter a number');
    }
    else{
        alert('form submitted');
        console.log('form submitted');
    }
}
