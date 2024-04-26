let msg="It's just javascript, bro"
document.getElementById("mesage").innerHTML=msg;

function msgs(){
  if (msg == "It's just javascript, bro"){
    msg="Bet you wish you could do this, huh"
    document.getElementById("mesage").innerHTML=msg;
    return
  }
  else if (msg == "Bet you wish you could do this, huh"){
    msg="Wanna do this? RTFM"
    document.getElementById("mesage").innerHTML=msg;
    return
  }
  else if (msg == "Wanna do this? RTFM"){
    msg="Oh, this? It's just web dev"
    document.getElementById("mesage").innerHTML=msg;
    return
  }
  else if (msg == "Oh, this? It's just web dev"){
    msg="It's just javascript, bro"
    document.getElementById("mesage").innerHTML=msg;
    return
  }
}
setInterval(msgs, 15000)