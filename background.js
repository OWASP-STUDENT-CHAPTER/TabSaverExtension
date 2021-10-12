const btnsave = document.getElementById('savebtn');
const btnset = document.getElementById('getbtn');
const btnAdd = document.getElementById('addbtn')
const btnAll = document.getElementById('workspaceBtn');

// var gettingAll;
var workspaces = {};
var tabsInfo = {};

//to save tabs
btnsave.addEventListener('click', () => {
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

btnAdd.addEventListener('click', () => {
  document.getElementById('all_workspace').style.display = 'none';
  document.getElementById('create_workspace').style.display = 'block';
})

btnAll.addEventListener('click', () => {
  document.getElementById('all_workspace').style.display = 'block';
  document.getElementById('create_workspace').style.display = 'none';
})

