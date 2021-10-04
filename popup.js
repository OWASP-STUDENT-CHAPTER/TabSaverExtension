const btnsave = document.getElementById('saveTabBtn');
const btnopen = document.getElementById('openTabBtn');

var workspaces = {};
var order = [];

// JUST TRYING

// btnsave.addEventListener('click', () => {
//     chrome.tabs.getAllInWindow(function)
//     chrome.tabs.getAllInWindow(() => {
//         var workspaceTabs = [];
//                 for (i = 0; i < tabs.length; i++) {
//                     var tab = {
//                         url: tabs[i].url,
//                         pinned: tabs[i].pinned,
//                         active: false
//                     }
//                     workspaceTabs.push(tab);
//                 }
//     });
//     console.log(workspacesTab);
// });

/*
function save(windowId){
    chrome.tabs.getAllInWindow(windowId);
};


btnsave.addEventListener('click', () => {
    save(1);
});
*/
