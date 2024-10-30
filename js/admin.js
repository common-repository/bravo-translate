
function BRAVOTRAN_create() {
    document.getElementById("BRAVOTRANbutton").style.display='none';
    document.getElementById("BRAVOTRANgif").style.display='inline';
    textTo=document.getElementById("textToId").value.trim();
    yourT=document.getElementById("YourTrId").value.trim();
    if(textTo.length<2) {
      alert(document.getElementById("BRAVOTRAN_min_char_message").value);
      document.getElementById("BRAVOTRANbutton").style.display='inline';
    document.getElementById("BRAVOTRANgif").style.display='none';
      return;
    }
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("BRAVOTRAN_table_container").innerHTML=this.responseText;
        document.getElementById("BRAVOTRANbutton").style.display='inline';
        document.getElementById("BRAVOTRANgif").style.display='none';
        document.getElementById("BRAVOTRANgif").value='';
        document.getElementById("textToId").value='';
        document.getElementById("YourTrId").value='';
    }
  };
  xhttp.open("GET", "/wp-json/bravo-translate/BRAVOTRAN_create?textTo="+textTo+"&yourTranslation="+yourT, true);
  xhttp.send();
}

function BRAVOTRAN_edit(id){
    document.getElementById("BRAVOTRANbutton").style.display='none';
    text=document.getElementById("forID"+id).innerHTML;;
    document.getElementById("textToId").value=text;
    text=document.getElementById("toID"+id).innerHTML;
    document.getElementById("YourTrId").value=text;
    document.getElementById("BRAVOTRANbutton_edit").style.display='inline';
    document.getElementById("BRAVOTRAN_edit_hidden").value=id;
    document.getElementById("textToId").focus();
  };
  function BRAVOTRAN_edit_ajax(id) {
    id=document.getElementById("BRAVOTRAN_edit_hidden").value;
    document.getElementById("BRAVOTRANbutton_edit").style.display='none';
    document.getElementById("BRAVOTRANgif").style.display='inline';
    textTo=document.getElementById("textToId").value.trim();
    if(textTo.length<2) {
      alert(document.getElementById("BRAVOTRAN_min_char_message").value);
      document.getElementById("BRAVOTRANbutton_edit").style.display='inline';
    document.getElementById("BRAVOTRANgif").style.display='none';
      return;
    }
    yourT=document.getElementById("YourTrId").value.trim();
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("BRAVOTRAN_table_container").innerHTML=this.responseText;
        document.getElementById("BRAVOTRANbutton").style.display='inline';
        document.getElementById("BRAVOTRANgif").style.display='none';
        document.getElementById("BRAVOTRANgif").value='';
        document.getElementById("textToId").value='';
        document.getElementById("YourTrId").value='';
    }
  };
  xhttp.open("GET", "/wp-json/bravo-translate/BRAVOTRAN_update?textTo="+textTo+"&yourTranslation="+yourT+"&id="+id, true);
  xhttp.send();
}
function BRAVOTRANdismiss(){
document.getElementById("message").style.display="none";
}

function BRAVOTRAN_delete(id) {
    document.getElementById("BRAVOTRANbutton").style.display='none';
    document.getElementById("BRAVOTRANbutton_edit").style.display='none';
    document.getElementById("textToId").focus();
    document.getElementById("textToId").value='';
    document.getElementById("YourTrId").value='';
    document.getElementById("BRAVOTRANgif").style.display='inline';

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("BRAVOTRAN_table_container").innerHTML=this.responseText;
        document.getElementById("BRAVOTRANbutton").style.display='inline';
        document.getElementById("BRAVOTRANgif").style.display='none';
    }
  };
  xhttp.open("GET", "/wp-json/bravo-translate/BRAVOTRAN_delete?ID="+id, true);
  xhttp.send();
}
function BRAVOTRAN_dismissInfo(){
  var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
      document.getElementById("messageInfo").style.display="none";
  }
};
xhttp.open("GET", "/wp-json/bravo-translate/BRAVOTRAN_dismiss", true);
xhttp.send();
}