setFields();

function setFields()
{
    let filmName = localStorage.getItem("filmName");
    let filmDate = localStorage.getItem("filmDate");

    switch (filmName)
    {
        case 'blackAdam':
            document.getElementById("bannerTitle").innerHTML='Black Adam (2D NAPISY)';
            document.getElementById("bannerDesc").innerHTML='Blisko 5000 lat, po tym jak został obdarowany mocami egipskich bogów i zniewolony, Black Adam zostaje uwolniony ze swojego ziemskiego grobu, gotowy wyzwolić swoją wyjątkową formę sprawiedliwości we współczesnym świecie.';
            document.getElementById("bannerDate").innerHTML=filmDate;
            break;
        case 'biletDoRaju':
            document.getElementById("bannerTitle").innerHTML='Bilet do raju (2D NAPISY)';
            document.getElementById("bannerDesc").innerHTML='Rozwiedziona para wyrusza w podróż na wyspę Bali, aby odwieść córkę od podjęcie błędnej ich zdaniem decyzji o wyjściu za mąż.';
            document.getElementById("bannerDate").innerHTML=filmDate;
            document.getElementById("filmImg").src = 'assets/films/biletdoR.jpg';
            break;
        case 'dcLiga':
            document.getElementById("bannerTitle").innerHTML='DC LIGA SUPER-PETS (2D DUBBING)';
            document.getElementById("bannerDesc").innerHTML='Gdy Liga Sprawiedliwości zostaje uprowadzona Superpies Krypto, nieodłączny towarzysz Supermana, organizuje grupę zwierząt ze schroniska, z którymi ruszy im na ratunek.';
            document.getElementById("bannerDate").innerHTML=filmDate;
            document.getElementById("filmImg").src = 'assets/films/DLIGa.jpg';
            break;
        case 'halloween':
            document.getElementById("bannerTitle").innerHTML='Halloween. Finał. (2D NAPISY)';
            document.getElementById("bannerDesc").innerHTML='Laurie Strode po raz ostatni staje do walki z wcieleniem zła, Michaelem Myersem. Tylko jedno z nich przeżyje.';
            document.getElementById("bannerDate").innerHTML=filmDate;
            document.getElementById("filmImg").src = 'assets/films/halloween.png';
            break;
        case 'egzorcyzmyAnn':
            document.getElementById("bannerTitle").innerHTML='Egzorcyzmy Siostry Ann (2D DUBBING)';
            document.getElementById("bannerDesc").innerHTML='Przerażająca historia siostry Ann, młodej zakonnicy, pierwszej w historii kobiety, której Kościół katolicki zezwolił wykonania obrzędu egzorcyzmu.';
            document.getElementById("bannerDate").innerHTML=filmDate;
            document.getElementById("filmImg").src = 'assets/films/egzorcyzmy_maly.png';
            break;
        case 'samuraj':
            document.getElementById("bannerTitle").innerHTML='Jak zostałem samurajem (2D NAPISY)';
            document.getElementById("bannerDesc").innerHTML='Hank marzy o zostaniu samurajem, dlatego wybiera się na zamieszkaną tylko przez koty wyspę, by tam odbyć szkolenie.';
            document.getElementById("bannerDate").innerHTML=filmDate;
            document.getElementById("filmImg").src = 'assets/films/samuraj_maly.png';
            break;
        case 'dzikaNoc':
            document.getElementById("bannerTitle").innerHTML='Dzika Noc (3D NAPISY)';
            document.getElementById("bannerDesc").innerHTML='Kiedy pewna, bogata rodzina zostaje zakładnikami w Wigilię, przestępcy nie są przygotowani na niespodziewanego bojownika. Święty ...';
            document.getElementById("bannerDate").innerHTML=filmDate;
            document.getElementById("filmImg").src = 'assets/films/DzikaNoc.png';
            break;
        case 'wielkiKrokodyl':
            document.getElementById("bannerTitle").innerHTML='Wielki Zielony Krokodyl Domowy (2D DUBBING)';
            document.getElementById("bannerDesc").innerHTML='Kiedy rodzina Primmów przeprowadza się do Nowego Jorku, ich  syn, Josh z trudem przystosowuje się do ...';
            document.getElementById("bannerDate").innerHTML=filmDate;
            document.getElementById("filmImg").src = 'assets/films/WielkiKrokodyl.png';
            break;
        case 'dziwnySwiat':
            document.getElementById("bannerTitle").innerHTML='Dziwny Świat (2D DUBBING)';
            document.getElementById("bannerDesc").innerHTML='Bohaterowie rozpoczynają podróż do miejsca, w którym nic nie jest takie, jakie mogłoby się początkowo wydawać.';
            document.getElementById("bannerDate").innerHTML=filmDate;
            document.getElementById("filmImg").src = 'assets/films/DziwnySwiat.png';
            break;
        case 'bella':
            document.getElementById("bannerTitle").innerHTML='Bella i Sebastian Nowe Pokolenie (2D DUBBING)';
            document.getElementById("bannerDesc").innerHTML='Wielki powrót familijnej serii o przyjaźni psa i dziecka – Belli i Sebastiana. Dziesięcioletni chłopiec niechętnie ...';
            document.getElementById("bannerDate").innerHTML=filmDate;
            document.getElementById("filmImg").src = 'assets/films/Bella.png';
            break;
        default:
            document.getElementById("bannerTitle").innerHTML='error';
            document.getElementById("bannerDesc").innerHTML='error';
            document.getElementById("bannerDate").innerHTML='error';
            document.getElementById("filmImg").src = '';
            break;
    }
}

// $( ".seat" ).click(function() {
//     // alert( "Handler for .click() called." );
//     $(".seat").addClass("seatReserve");
// });

$(document).ready(function() {
    $(".seat").click(function(event) {
        if($(this).hasClass('seatReserve'))
        {
            $(this).removeClass("seatReserve");
            removeRow(event.target.id);
            sumTickets();
            // alert("removeRow1");
        }
        else
        {
            $(this).addClass("seatReserve");
            addRow(event.target.id, $(event.target).text());
            sumTickets();
            // alert("event.target.id:"+event.target.id);
        }
    });
});

let newRow = "<tr><td colspan='5'> Brak danych </td></tr>";

// $(document).ready(function ()
// {
  // $("tblData tbody").append(newRow);

let seatDisabled = [11];
let seatRow1 = [12,13,14,15,16,17,18,19,110,111,112];
let seatRow2 = [20,21,22,23,24,25,26,27,28,29,210,211,212];
let seatNormalRow1 = [30,31,32,33,34,35,36,37,38,39,310,311,312];
let seatRow3 = [40,41,42,43,44,45,46,47,48,49,410,411,412];
let seatVipRow1 = [50,51,52,53,54,55,56,57,58,59,510,511,512];
let seatNormalRow2 = [60,61,62,63,64,65,66,67,68,69,610,611,612,613,614,615,616,616];

let sum = 0;

function addRow(targetId, placeValue) {
    let id = parseInt(targetId);

    if (jQuery.inArray(id, seatDisabled) !== -1)
    {
        let row = "1";
        let place = placeValue;
        let ticket = "Miejsce dla niepełnosprawnych";
        let price = "17.90zł";
        sum = sum + 17.90;
        let dynamicTr = "<tr id='"+id+"r"+"'><td>" + row + "</td><td>" + place + "</td><td>" + ticket + "</td><td class='price'>" + price + "</td><tr>";
        $("#tblData").append(dynamicTr);
    }
    else if(jQuery.inArray(id, seatRow1) !== -1)
    {
        let row = "1";
        let place = placeValue;
        let ticket = "Ulgowy";
        let price = "17.90zł";
        sum = sum + 17.90;
        let dynamicTr = "<tr id='"+id+"r"+"'><td>" + row + "</td><td>" + place + "</td><td>" + ticket + "</td><td class='price'>" + price + "</td><tr>";
        $("#tblData").append(dynamicTr);
    }
    else if(jQuery.inArray(id, seatRow2) !== -1)
    {
        let row = "2";
        let place = placeValue;
        let ticket = "Ulgowy";
        let price = "17.90zł";
        sum = sum + 17.90;
        let dynamicTr = "<tr id='"+id+"r"+"'><td>" + row + "</td><td>" + place + "</td><td>" + ticket + "</td><td class='price'>" + price + "</td><tr>";
        $("#tblData").append(dynamicTr);
    }
    else if(jQuery.inArray(id, seatNormalRow1) !== -1)
    {
        let row = "3";
        let place = placeValue;
        let ticket = "Normalny";
        let price = "21.90zł";
        sum = sum + 21.90;
        let dynamicTr = "<tr id='"+id+"r"+"'><td>" + row + "</td><td>" + place + "</td><td>" + ticket + "</td><td class='price'>" + price + "</td><tr>";
        $("#tblData").append(dynamicTr);
    }
    else if(jQuery.inArray(id, seatRow3) !== -1)
    {
        let row = "4";
        let place = placeValue;
        let ticket = "Ulgowy";
        let price = "17.90zł";
        sum = sum + 17.90;
        let dynamicTr = "<tr id='"+id+"r"+"'><td>" + row + "</td><td>" + place + "</td><td>" + ticket + "</td><td class='price'>" + price + "</td><tr>";
        $("#tblData").append(dynamicTr);
    }
    else if(jQuery.inArray(id, seatVipRow1) !== -1)
    {
        let row = "5";
        let place = placeValue;
        let ticket = "VIP";
        let price = "25.90zł";
        sum = sum + 25.90;
        let dynamicTr = "<tr id='"+id+"r"+"'><td>" + row + "</td><td>" + place + "</td><td>" + ticket + "</td><td class='price'>" + price + "</td><tr>";
        $("#tblData").append(dynamicTr);
    }
    else if(jQuery.inArray(id, seatNormalRow2) !== -1)
    {
        let row = "6";
        let place = placeValue;
        let ticket = "Normalny";
        let price = "21.90zł";
        sum = sum + 21.90;
        let dynamicTr = "<tr id='"+id+"r"+"'><td>" + row + "</td><td>" + place + "</td><td>" + ticket + "</td><td class='price'>" + price + "</td><tr>";
        $("#tblData").append(dynamicTr);
    }
}

function removeRow(targetId)
{
    let id = parseInt(targetId);

    if (jQuery.inArray(id, seatDisabled) !== -1)
    {
        sum = sum - 17.90;
    }
    else if(jQuery.inArray(id, seatRow1) !== -1)
    {
        sum = sum - 17.90;
    }
    else if(jQuery.inArray(id, seatRow2) !== -1)
    {
        sum = sum - 17.90;
    }
    else if(jQuery.inArray(id, seatNormalRow1) !== -1)
    {
        sum = sum - 21.90;
    }
    else if(jQuery.inArray(id, seatRow3) !== -1)
    {
        sum = sum - 17.90;
    }
    else if(jQuery.inArray(id, seatVipRow1) !== -1)
    {
        sum = sum - 25.90;
    }
    else if(jQuery.inArray(id, seatNormalRow2) !== -1)
    {
        sum = sum - 21.90;
    }

    $("#"+targetId+"r").remove();
}


function sumTickets()
{
    $("#sum").text(Math.abs(sum.toFixed(1))+" zł");
}
