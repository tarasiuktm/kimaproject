var classes = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    for (j = 0; j < a.length; j++) document.getElementById('cells').innerHTML +=
        '<a a_num="' + a[j] + '" class="img' + a[j] + '"> </a>';
}

function StartTheGame(button) {
    button.onclick = '';
    startTimer();
    shuffle(classes);
    setTimeout(closeImage, 2000);
    checkCouples();
    document.getElementById('start_button').style.background = 'url(img/but2.png) no-repeat';
    document.getElementById('restart').style.background = 'url(img/but1.png) no-repeat';

}

function restart() {
    window.location.reload();
}

var cells = document.getElementsByTagName("a");

function closeImage() {
    for (var x = 0; x < cells.length; x++) {
        cells[x].className += " hidden";
    }
}

function startTimer() {
    var my_timer = document.getElementById("my_timer");
    var sec = my_timer.innerHTML;
    if (sec == 0) {
        alert("Время вышло");
        window.location.reload();
        return;
    }
    sec--;
    document.getElementById("my_timer").innerHTML = +sec;
    setTimeout(startTimer, 1000);
}

function checkCouples() {
    var check = false,
        tmp,
        tmp_num = 0,
        clicks = 0,
        open = 0,
        cells = document.getElementsByTagName("a");

    for (var i = 0; i < cells.length; i++) {
        cells[i].addEventListener('click', function(elem) {
            clicks++;
            var picture = elem.target;
            picture.className = picture.className.replace('hidden', '');
            setTimeout(function() {
                if (check) {
                    check = false;
                    if (picture.getAttribute('a_num') == tmp_num) {
                        open++;
                        if (open == 8) {
                            var finishSecond = +document.getElementById("my_timer").innerHTML;
                            var result = 120 - finishSecond;
                            var userName = document.getElementById("name").value;
                            localStorage.setItem(userName, result);
                            alert('Поздравляем! Вы сделали это за ' + result + ' секунд!');
                            window.location.reload();
                            return;
                        }
                    } else {
                        tmp.className += ' hidden';
                        picture.className += ' hidden';
                    }
                } else {
                    tmp_num = picture.getAttribute('a_num');
                    tmp = picture;
                    check = true;
                }
            }, 100);
        });
    };
}