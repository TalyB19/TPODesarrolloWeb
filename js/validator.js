function validarReg()
{
    var tipo, documento, apellido, nombre, email, date, password;

    tipo = document.getElementById("tipo").value;
    documento = document.getElementById("documento").value;
    apellido = document.getElementById("apellido").value;
    nombre = document.getElementById("nombre").value;
    email = document.getElementById("email").value;
    date = document.getElementById("date").value;
    password = document.getElementById("password").value;

    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    
    if(tipo === "" || documento === "" || apellido === "" || nombre === "" || email === "" || date === "" || password === "")
    {
        alert("Por favor complete todos los datos correctamente");
        return false;
    }

    else if(nombre.length>30)
    {
        alert("El nombre ingresado es muy largo");
        return false;
    }

    else if(password.length<=8)
    {
        alert("Verifique la contraseña, debe contener mas de 8 caracteres");
        return false;
    }

    else if(apellido.length>80)
    {
        alert("El apellido ingresado es muy largo");
        return false;
    }

    else if(email.length>80)
    {
        alert("El email ingresado es muy largo");
        return false;
    }

    else if(!emailRegex.test(email))
    {
        alert("El correo ingresado no es valido");
        return false;
    }

    else if(isNaN(documento))
    {
        alert("El documento ingresado no es valido");
        return false;
    }

    else if(!isNaN(nombre))
    {
        alert("El nombre ingresado no es valido");
        return false;
    }

    else if(!isNaN(apellido))
    {
        alert("El apellido ingresado no es valido");
        return false;
    }


}