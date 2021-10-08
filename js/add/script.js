function previewImage1(obj)
{
	var fileReader = new FileReader();
	fileReader.onload = (function() {
		document.getElementById('img1').src = fileReader.result;
	});
	fileReader.readAsDataURL(obj.files[0]);
}
function previewImage2(obj)
{
	var fileReader = new FileReader();
	fileReader.onload = (function() {
		document.getElementById('img2').src = fileReader.result;
	});
	fileReader.readAsDataURL(obj.files[0]);
}
function previewImage3(obj)
{
	var fileReader = new FileReader();
	fileReader.onload = (function() {
		document.getElementById('img3').src = fileReader.result;
	});
	fileReader.readAsDataURL(obj.files[0]);
}
function previewImage4(obj)
{
	var fileReader = new FileReader();
	fileReader.onload = (function() {
		document.getElementById('img4').src = fileReader.result;
	});
	fileReader.readAsDataURL(obj.files[0]);
}