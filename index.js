
// function main(){
//     var inputText =  prompt("ダイアログに入力してください");
//     console.log(inputText);
//     var replaceText = replaced(inputText);
// }
var x = 1;
function newbox(){
    
    var input_data = document.createElement('input');
    input_data.type = 'text';
    input_data.id = 'inputform_' + x;
    input_data.placeholder = '置換前_' + x;
    var parent = document.getElementById('sometext');
    parent.appendChild(input_data);

    var output_data = document.createElement('input');
    output_data.type = 'text';
    output_data.id = 'outputform_' + x;
    output_data.placeholder = '置換後_' + x;
    var barlog = document.getElementById('anytext');
    barlog.appendChild(output_data);
    x++ ;

    var inputf = document.getElementById('inputa');

    
    // inputf.replace(sometext[i], anytext[i]);
    // console.log(inputf)

    // for (let i = 0; i < inputa.length ; ++i){
//     //inputa.replace(oldword[i], newword[i]);
//     result.push(inputa.replace(oldword[i], newword[i]))
// };
};

// function replace(inputword,oldword,newword){
//     //replaceの動きを呼ぶ
//     var p =(inputword.replace(oldword, newword));
//     // = new regExp('ab+c')
//     return p;
// }
function answer(){

var inputa = document.getElementById("inputa").value;
var oldword = document.getElementById("inputform_0").value;
var newword = document.getElementById("outputform_0").value;
// var result = inputa.replace(oldword, newword);
// console.log(result);


// var oldword = document.getElementById('inputform_ + i').value;
var oldword = [];
for (i = 0; i < x; i++) {
    oldword.push(document.getElementById('inputform_' + i).value);
}
// console.log(oldword);
var newword = [];
for (i = 0; i < x; i++) {
    newword.push(document.getElementById('outputform_' + i).value);
}
// var newword = document.getElementById('outputform_ + i').value;
var message = document.getElementById('result-message');

var trust = [];
for (let i = 0; i < x; i++){
    //inputa.replace(oldword[i], newword[i]);
    trust.push(inputa.replace(oldword[i], newword[i]));
    var inputa = inputa.replace(oldword[i], newword[i]);
};
console.log(trust)
var result = trust.slice(-1)[0];

// var result = inputa.replace(oldword, newword);
//function
resultmessage.innerHTML = result;
// for (var i = 0; i < oldword.value; i++){
//     console.log(oldword[i].value)
// }
}
//p = math f(x)={~}

//int型　　  111 + 222 = 333
//String型　111 + 222 = 111222



// let fragment = document.createDocumentFragment();

// let child1 = document.createElement('input');
// let child2 = document.createElement('input');

// fragment.append(child1);
// fragment.append(child2);

// div追加メソッド
// const div1 = document.getElementById("div1");
// // 要素の追加
// if (!div1.hasChildNodes()){
//     const p1 = document.createElement("p");
//     const text1 = document.createTextNode("テスト");
//     p1.appendChild(text1);
//     div1.appendChild(p1);
// }


// >> #document-fragment
// >>   <div>?</div>
// ?>>   <p>?Hello?</p>

// function newbox(){
//     var sometext_element = document.getElementById('sometext');
//     var anytext_element = document.getElementById('anytext');

//     var new_element1 = document.createDocumentFragment('input');
//     var new_element2 = document.createDocumentFragment('input');
//     new_element1.id = "worda"
//     new_element1.id = "wordb"
    
//     sometext_element.insertBefore( new_element1, null);
//     anytext_element.insertBefore( new_element2, null);
// // new_element.value = '追加テキスト';

// // textbox_element.insertBefore( new_element, p1_element);
// }

