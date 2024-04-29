let msg="It's just javascript, bro"
document.getElementById("mesage").innerHTML=msg;

function msgs(){
  if (msg == "It's just javascript, bro"){
    msg="Software engineer go brrr"
    document.getElementById("mesage").innerHTML=msg;
    return
  }
  else if (msg == "Software engineer go brrr"){
    msg="What? Never seen a clean chromebook before?"
    document.getElementById("mesage").innerHTML=msg;
    return
  }
  else if (msg == "What? Never seen a clean chromebook before?"){
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
