const extension = ['txt','doc','docx','pdf'];
var output = document.getElementById('output');

function fileInfo(){
    var fileName = document.getElementById('file').files[0].name;
    var fileSize = document.getElementById('file').files[0].size;
	
	var fileExtension = fileName.split('.').pop();
    
    var file_info = fileName+"\n"+fileSize+"\n"+fileExtension;
	var flag = 0; 
	if(fileSize <= 5120){
		for(const ext of extension){
			if( fileExtension == ext){	
					let file = document.querySelector("#file").files[0];
					let reader = new FileReader();
					reader.addEventListener('load', function(e) {
							let text = e.target.result;
							const data = text;
						fileCheck(data);
					});
					reader.readAsText(file);				
				
				flag = 1;
				break;
			}	
		}
		if(flag==0){
			alert("File extension not allowed");
		}
	}
	else{
		alert("file is too big");
	}	
}

function fileCheck(file){
	var fileName = document.getElementById('file').files[0].name;
	
	var str_arr = file.split('\n');
	var noOfLines = str_arr.length;
	
	var noOfCharacters = file.length;
	
	var str_letter = file;
	var noOfLetters = str_letter.replace(/[^A-Z]/gi, "").length;
	
	var str_wordArr = file.split(' ');
	var noOfWords = str_wordArr.length;
	
	var oneLetter = 0;
	var twoLetter = 0;
	
	var spl_char = file;
	var noOfSplChar = spl_char.match(/[^A-Z]/gi).length;
	
	const words = file.split(" ");
	const lengths = words.map(function(word){
		return word.length;
	});
	let counter={};
	lengths.forEach((leng)=>{
		counter[leng]=counter[leng] || 0;
		counter[leng]++;
	});
	
	var data= 'File Name: ' + fileName+ '<br>Number of Lines: '+ noOfLines +'<br>Number of Characters (Total): '+ noOfCharacters +'<br>Number of Letters: '+ noOfLetters +'<br>Number of other characters: '+ noOfSplChar +'<br>Number of Words: '+ noOfWords +'<br>';
	
	output.innerHTML = data;
	
	for(const k in counter){
		if(counter.hasOwnProperty(k)){
			let data1 =  ("Number of "+k+ " letter words: "+counter[k] + "<br>");
			output.innerHTML = output.innerHTML + data1;
		}
	}
	
}