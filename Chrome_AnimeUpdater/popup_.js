
//     https://kissanime.ru/Anime/K-On/Episode-008?id=26507&s=default

//     4 = title



//console.log(stuff); 
// open "backgroundpage" in plugings menu
// or "check popup" in context menu of icon


// https://developer.chrome.com/extensions/user_interface


function update(bookmark, url, name){
  console.log(bookmark.id);
  chrome.bookmarks.update(bookmark.id, {"url": url, "title":name}, function(result){});
}


// find bookmarks containing the name
// calls the update function when found
function find(url) 
{
  var name = url.split("/")[4];
  console.log("finding: " + name);
  chrome.bookmarks.search("kissanime.ru*", function(nodes) 
  {
    for (var i = 0; i<nodes.length; i++)
    {
      var bookmark = nodes[i];
      if (bookmark.url.match(name))
      {
        console.log("found bookmark  " + nodes[i].url);
        update(bookmark, url, name);
      }
    }
  })
}



//chrome.browserAction.setBadgeText({text: 'ON'});
//chrome.tabs.onUpdated.addListener(function (tabId , info) {
theButton.onclick = function(element) 
{
  chrome.tabs.getAllInWindow(null, function(tabs)
  {
    for (var i = 0; i<tabs.length; i++)
    {
      var tab = tabs[i];
      if (tab.url.match("kissanime.ru*")){
        console.log("found tab " + tab.url)
        find(tab.url);
      }
    }
  });
}
