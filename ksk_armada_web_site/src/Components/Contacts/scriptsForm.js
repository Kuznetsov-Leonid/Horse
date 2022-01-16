let a = document.forms["form"]["first_name"].value;
                let с = document.forms["form"]["email"].value;
                let d = document.forms["form"]["tel"].value;
                let b = document.forms["form"]["check"].value;
                if (a == "") {
                    alert("Укажите ваше имя");
                    return false;
                } else if (с == "") {
                    alert("Укажите ваш Е-mail");
                    return false;
                } else if (d == "") {
                    alert("Укажите ваш телефон");
                    return false;
                } else if (b == false) {
                    alert('Подтвердите, что согласны получать сообщения от КСК Армада.');
                    return false;
                } else {
                    alert("Что-то пошло не так, ошибка отправки.");
                }
    
    