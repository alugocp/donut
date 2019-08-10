import * as wasm from "donut-web";

function upload(e){
  var file=e.target.files;
  if(file.length==1) file=file[0];
  else return disable();
  var reader=new FileReader();
  console.log(file);
  reader.onload=function(){
    var input=new Uint8Array(reader.result);
    var result=wasm.convert_to_donut(input);
    document.getElementById("donut").src="data:image/png;base64,"+result;
  }
  reader.readAsArrayBuffer(file);
}

document.getElementById("files").addEventListener("change",upload,false);
