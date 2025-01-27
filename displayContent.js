document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.sidebar a');
    const contents = document.querySelectorAll('.content');

    
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            loadPDF();
            const targetContent = document.getElementById(this.getAttribute('data-content'));

            contents.forEach(content => content.classList.remove('active'));
            targetContent.classList.add('active');
        });
    });
});

function loadPDF() {
    document.querySelector('.home').style.display = 'none';
    document.querySelector('.note').style.display = 'none';
}
