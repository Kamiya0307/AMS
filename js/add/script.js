const fileInput = document.getElementById("img_upload_button");
fileInput.addEventListener("change", handleFiles, false);

function handleFiles() {
  const files = fileInput.files;
	if (4 < files.length){
		alert('画像の枚数が４枚より多いため最初の４枚が選択されます。');
	}
	const imageLength = 4 < files.length ? 4 : files.length;
  for (let i = 0; i < imageLength; i++) {
    console.log(files[i]);
		previewFile(files[i],i);
  }
}

let imgBox = [];
imgBox.push(document.getElementById("img1"));
imgBox.push(document.getElementById("img2"));
imgBox.push(document.getElementById("img3"));
imgBox.push(document.getElementById("img4"));

function previewFile(file,index) {
  const reader = new FileReader();

  reader.onload = function (e) {
    const imageUrl = e.target.result;
		imgBox[index].src = imageUrl;
  }

  // いざファイルをURLとして読み込む
  reader.readAsDataURL(file);
}