const btnsave = document.getElementById('savebtn');
const btnset = document.getElementById('getbtn');
const btnAdd = document.getElementById('addBtn');
const btnAll = document.getElementById('workspacebtn');
const workspacediv = document.getElementById('workspaces');


// var gettingAll;
var workspaces = {};
var tabsInfo = {};
var workspacesArr = [];

//to save tabs
btnsave.addEventListener('click', () => {
    var input = document.getElementById('input_name').value;
    workspacesArr.push(input);
    console.log(input);
    window.alert(input + " has been created");
    chrome.tabs.query({},function(tabs){     
    // console.log("tabs",tabs);
    tabsInfo = tabs.map(tab=>({
        // "title" : tab.title
        "url":tab.url
    }));
    // console.log('tabsInfo', tabsInfo);
    chrome.storage.sync.set({'key': tabsInfo}, () => {
      console.log('saved');
    });
  });
});

//to get tabs array in a promise in console
btnset.addEventListener('click', () => {
    chrome.storage.sync.get('key', () => {
      for(var i=0;i<tabsInfo.length; i++){
        // console.log(tabsInfo[i].url);
        chrome.tabs.create({'url': tabsInfo[i].url}, callback1);
      }
    });
});

function callback1(){
    console.log('displayed');
};

//chrome.tabs.executeScript(null,{file: "content.js"}); 

//add button to display second section
btnAdd.addEventListener('click', () => {
  console.log('wokring');
  document.getElementById('all_workspace').style.display = 'none';
  document.getElementById('create_workspace').style.display = 'block';
});

//all button to display first section
btnAll.addEventListener('click', () => {
  document.getElementById('all_workspace').style.display = 'block';
  document.getElementById('create_workspace').style.display = 'none';
  printBtn();
});

//to get all the workspaces (currently static)
// var arr =['w1','w2','w3','w4','w5'];
function printBtn() {
  for(var i=0; i<workspacesArr.length; i++)
  {
      var btn = document.createElement("button"); 
      btn.className = "button"
      var t = document.createTextNode(workspacesArr[i]);
      btn.appendChild(t);
      workspacediv.appendChild(btn);
      console.log(workspacesArr[i]);
  }
} 
