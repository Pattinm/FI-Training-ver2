function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5wyoPgeTVVS":
        Script1();
        break;
      case "6ZfM6fnpYgK":
        Script2();
        break;
  }
}

function Script1()
{
  function getQueryVariable(variable) {
        //window.alert("getQuery function started");
          var query = window.location.search.substring(1);
          var vars = query.split("&");
          for (var i=0;i<vars.length;i++) {
                var pair = vars[i].split("=");
                if(pair[0] == variable){return pair[1];}
              }
         return(false);
   };
var player = GetPlayer();
var pID = getQueryVariable("ID");
//window.alert("pID is " + pID);
player.SetVar("FIFDparticipantIDTwo",pID);
//alert("Welcome back, " + player.GetVar("FIFDparticipantIDTwo") + ".");

}

function Script2()
{
  var player=GetPlayer();
var returnedParticipantID=player.GetVar("FIFDparticipantIDTwo");
var customURL="http://adelaide.qualtrics.com/jfe/form/SV_3UD4OxJjOjuvsMJ?ID=" + returnedParticipantID;
//window.alert("Custom URL is " + customURL);
window.open(customURL);

}

