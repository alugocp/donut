function disable(){
  alert("Unfortunately your browser cannot run this app :(");
  document.getElementById("upload").classList.add("disabled");
  document.getElementById("files").disabled="disabled";
}

import("./index.js").catch(e => disable());
