const btnsave = document.getElementById('saveTabBtn');
const btnset = document.getElementById('openTabBtn');


var gettingAll;

//to save tabs
btnsave.addEventListener('click', () => {
    gettingAll = chrome.windows.getAll({populate: true});
    chrome.storage.sync.set({'value': gettingAll}, () => {
        alert('workspace saved');
    })
});

//to get tabs array in a promise in console
btnset.addEventListener('click', () => {
    chrome.storage.sync.get('gettingAll', () => {
        console.log(gettingAll);
    })
});



// chrome.tabs.query({windowId: 1}, function(){
//     alert('done');
// });


