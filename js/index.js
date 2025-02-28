document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('container');
    const image = document.getElementById('image');

    container.addEventListener('mouseover', function() {
        image.src = 'assets/foto2.png';
    });

    container.addEventListener('mouseout', function() {
        image.src = 'assets/foto1.png';
    });
    });

    
    // Botão modal
    const modal = document.getElementById('myModal');
    const btn = document.getElementById('button');
    const span = document.getElementsByClassName('close')[0];

    btn.addEventListener('click', function() {
        modal.style.display = 'block';
    });

    span.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
    function openModal() {
    document.getElementById("myModal").style.display = "block";
    }

    function closeModal() {
        document.getElementById("myModal").style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == document.getElementById("myModal")) {
            document.getElementById("myModal").style.display = "none";
        }
    }