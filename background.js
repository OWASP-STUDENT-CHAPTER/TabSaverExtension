const btnsave = document.getElementById('savebtn');
const btnset = document.getElementById('getbtn');
const btnAdd = document.getElementById('addBtn')
const btnAll = document.getElementById('workspacebtn');

// var gettingAll;
var workspaces = {};
var tabsInfo = {};
var allWorkspaces = [];

//to save tabs
btnsave.addEventListener('click', () => {
  //get workspace name
  var input = document.getElementById('workspace_name');
  allWorkspaces.push(input);  

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


//all button to diaplce first section
btnAll.addEventListener('click', () => {
  document.getElementById('all_workspace').style.display = 'block';
  document.getElementById('create_workspace').style.display = 'none';
});

//display workspaces()
// showWorkspaces = function(allWorkspaces) {
//   for(i=0; i<allWorkspaces.length; i++)
//     print()
// }

var listBrand =['LEXUS','AUDI','MAYBACK','FERRARI','TOYOTA'];

function printBtn() {
  for(var i=0; i<listBrand.length; i++)
  {
    var btn = document.createElement("button");
    var t = document.createTextNode(listBrand[i]);
    btn.appendChild(t);
    document.body.appendChild(btn);
  }
} 