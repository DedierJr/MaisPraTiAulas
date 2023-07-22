    function validationForm(){
        let validationTitle = document.forms["register"]["title"].value;
        let validationAlbum = document.forms["register"]["album"].value;
        let validationArtist = document.forms["register"]["artist"].value;
        let validationGenre = document.forms["register"]["genre"].value;

        if(validationTitle == ""){
            alert("O Código deve ser preenchido;")
            return false;
        }
        if(validationAlbum == ""){
            alert("O Título deve ser preenchido;")
            return false;
        }
        if(validationArtist == ""){
            alert("O Diretor deve ser preenchido;")
            return false;
        }
        if(validationGenre == ""){
            alert("A data de lançamento deve ser preenchida;")
            return false;
        }
        alert("A validação ocorreu de forma correta")
    }

    function insert() {
        let title = document.forms["register"]["title"].value
        let album = document.forms["register"]["album"].value
        let artist = document.forms["register"]["artist"].value
        let genre = document.forms["register"]["genre"].value

        let insert = window.document.getElementById("insertRow")

        insert.innerHTML = `
        <td>${title}</td>
        <td>${album}</td>
        <td>${artist}</td>
        <td>${genre}</td>
        `
    }