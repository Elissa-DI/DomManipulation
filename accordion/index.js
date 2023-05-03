const answer = document.getElementsByClassName('answer');
const question = document.getElementsByClassName('content');

for( i = 0; i < question.length; i++ ) {
    question.addEventListener('click', function() {
        this.classList.add('hide');
        console.log('clicked');
    })
}