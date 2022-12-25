    //SOURCE : https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript

    sendMail = () => {
        let email = document.getElementById('email').value;
        let mailformat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(email.length < 10){
            document.getElementById("ERR").innerHTML = "L'adresse mail saisie est trop petite."
        }
        else if(email.length > 64){
            document.getElementById("ERR").innerHTML = "L'adresse mail saisie est trop grande."
        }else if(email.match(mailformat)){
            const formData = new FormData();
            formData.append("email", email);
            formData.append("service", detail['service']);
            formData.append("from-planetName", detail['from']['planetName']);
            formData.append("from-categoryName", detail['from']['categoryName']);
            formData.append("to-planetName", detail['to']['planetName']);
            formData.append("to-categoryName", detail['to']['categoryName']);
            formData.append("distance", detail['distance']+2);
            formData.append("adults", detail['adults']);
            formData.append("child", detail['child']);
            formData.append("weekInFrench", detail['date']['weekInFrench']);
            formData.append("day", detail['date']['day']);
            formData.append("monthInFrench", detail['date']['monthInFrench']);
            formData.append("time", detail['date']['time']);
            formData.append("total", detail['total']);
            document.getElementById("ERR").innerHTML = "Une confirmation a bien été envoyé à <b>"+email+"</b>."
            
            fetch(`mail.php`, {
                method: 'POST',
                body: formData, // Fetch API can deal with FormData instances automatically
            })
        }else{
            document.getElementById("ERR").innerHTML = "L'adresse mail est invalide."
        }




    }