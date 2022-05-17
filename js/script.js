var audi = {
    'id': '0',
    'regBr': '',
    'marka': '',
    'godiste': ''
}

var alfa = {
    'id': '0',
    'regBr': '',
    'marka': '',
    'godiste': ''
}
var bmw = {
    'id': '0',
    'regBr': '',
    'marka': '',
    'godiste': ''
}
var fijat = {
    'id': '0',
    'regBr': '',
    'marka': '',
    'godiste': ''
}
var opel = {
    'id': '0',
    'regBr': '',
    'marka': '',
    'godiste': ''
}

/* stack overflow */
function del_tr(remtr)  
{   
    while((remtr.nodeName.toLowerCase())!='tr')
        remtr = remtr.parentNode;

    remtr.parentNode.removeChild(remtr);
    
}
function del_id(id)  
{   
        del_tr(document.getElementById(id));
}
/* kraj stack overflow*/

document.getElementById('upisi').onclick = function(){
    var regBr = document.getElementById('reg').value;
    var godiste = document.getElementById('godiste').value;
    var selectField = document.getElementById('marka');
    var selectedOption = selectField.options.selectedIndex;
    var marka = selectField.options[selectedOption].innerHTML;
    
   if(regBr == "" || godiste == ""){
        alert("Morate popuniti sva polja!");
    } else if(godiste < 1970 || godiste > 2022){
        alert("Netacni podaci za godiste!");
    } else if(regBr.length < 9 || regBr.length > 10){
        alert("Pogresno unet registarski broj!");
    } else{
        if(marka == "Audi"){
            audi["regBr"] = regBr;
            audi["marka"] = marka;
            audi["godiste"] = godiste;
                if(audi.regBr==alfa.regBr || audi.regBr==bmw.regBr || audi.regBr==fijat.regBr || audi.regBr==opel.regBr){
                    alert("Auto sa tom registracijom vec postoji!");
                    audi["regBr"] = "";
                    audi["marka"] = "";
                    audi["godiste"] = "";
                } else { 
                            document.getElementById('audi').innerHTML += "<td>" + audi["regBr"] + "</td>" +
                                                                 "<td>" + audi["marka"] + "</td>" +
                                                                 "<td>" + audi["godiste"] + "</td>"+
                                                                 "<td><button class='izbrisi' onclick='del_tr(this);return false;'><i class='fa fa-times'></i></button></td>"; //onclick-stack overflow
                        }          
        } else if(marka == "Alfa Romeo"){
            alfa["regBr"] = regBr;
            alfa["marka"] = marka;
            alfa["godiste"] = godiste;
            if(alfa.regBr==audi.regBr || alfa.regBr==bmw.regBr || alfa.regBr==fijat.regBr || alfa.regBr==opel.regBr){
                alert("Auto sa tom registracijom vec postoji!");
                alfa["regBr"] = "";
                alfa["marka"] = "";
                alfa["godiste"] = "";
            } else {
                        document.getElementById('alfa').innerHTML += "<td>" + alfa["regBr"] + "</td>" +
                                                             "<td>" + alfa["marka"] + "</td>" +
                                                             "<td>" + alfa["godiste"] + "</td>"+
                                                             "<td><button class='izbrisi' onclick='del_tr(this);return false;'><i class='fa fa-times'></i></button></td>";
                    }
        } else if(marka =="BMW"){
            bmw["regBr"] = regBr;
            bmw["marka"] = marka;
            bmw["godiste"] = godiste;
            if(bmw.regBr==audi.regBr || bmw.regBr==alfa.regBr || bmw.regBr==fijat.regBr || bmw.regBr==opel.regBr){
                alert("Auto sa tom registracijom vec postoji!");
                bmw["regBr"] = "";
                bmw["marka"] = "";
                bmw["godiste"] = "";
            } else {
                        document.getElementById('bmw').innerHTML += "<td>" + bmw["regBr"] + "</td>" +
                                                                "<td>" + bmw["marka"] + "</td>" +
                                                                "<td>" + bmw["godiste"] + "</td>"+
                                                                "<td><button class='izbrisi' onclick='del_tr(this);return false;'><i class='fa fa-times'></i></button></td>";
                    }
        } else if(marka =="Fijat"){
            fijat["regBr"] = regBr;
            fijat["marka"] = marka;
            fijat["godiste"] = godiste;
            if(fijat.regBr==audi.regBr || fijat.regBr==alfa.regBr || fijat.regBr==bmw.regBr || fijat.regBr==opel.regBr){
                alert("Auto sa tom registracijom vec postoji!");
                fijat["regBr"] = "";
                fijat["marka"] = "";
                fijat["godiste"] = "";
            } else {
                        document.getElementById('fijat').innerHTML += "<td>" + fijat["regBr"] + "</td>" +
                                                          "<td>" + fijat["marka"] + "</td>" +
                                                          "<td>" + fijat["godiste"] + "</td>"+
                                                          "<td><button class='izbrisi' onclick='del_tr(this);return false;'><i class='fa fa-times'></i></button></td>";
                    }
        } else if(marka =="Opel"){
            opel["regBr"] = regBr;
            opel["marka"] = marka;
            opel["godiste"] = godiste;
            if(opel.regBr==audi.regBr || opel.regBr==alfa.regBr || opel.regBr==bmw.regBr || opel.regBr==fijat.regBr){
                alert("Auto sa tom registracijom vec postoji!");
                opel["regBr"] = "";
                opel["marka"] = "";
                opel["godiste"] = "";
            } else {
                        document.getElementById('opel').innerHTML += "<td>" + opel["regBr"] + "</td>" +
                                                         "<td>" + opel["marka"] + "</td>" +
                                                         "<td>" + opel["godiste"] + "</td>"+
                                                         "<td><button class='izbrisi' onclick='del_tr(this);return false;'><i class='fa fa-times'></i></button></td>";
                    }
        }
    }
    document.getElementById('reg').value = "";
    document.getElementById('godiste').value = "";
}