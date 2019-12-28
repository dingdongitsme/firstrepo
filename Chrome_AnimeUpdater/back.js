

//     https://kissanime.ru/Anime/K-On/Episode-008?id=26507&s=default

//     4 = title

function find(url) {
  var name = url.split("/")[4];
  console.log(name);
  chrome.bookmarks.search("kissanime*", function(nodes) {
    for (var i = 0; i<nodes.length; i++)
    {
      console.log(nodes[i]);
    }
  })
  

}

/*

  chrome.bookmarks.search("kissanime", function(nodes) {
    for (var i = 0; i<nodes.length; i++)
    {
      //console.log(nodes[i]);
    }
  })


function updateBookmark(bookmark, newURL) {}

https://stackoverflow.com/questions/3689423/google-chrome-plugin-how-to-get-domain-from-url-tab-url

*/
chrome.browserAction.setBadgeText({text: 'ON'});
chrome.tabs.onUpdated.addListener(function (tabId , info) {

  if (info.status === 'complete') {

    chrome.tabs.get(tabId, function(tab) 
    {
      var domain = tab.url.split("/")[2];
      console.log(domain);
      if (domain == "kissanime.ru")
      {
        find(tab.url);
      }
       
      
      //console.log(stuff); // open "backgroundpage" in plugings menu


    })    
    //printTree()



  }
});
/*
chrome.bookmarks.search("kiss",function(items){
      var source = [];
      for(var i = 0;i<items.length;i++)
      {
          source[i] = items[i];
          console.log(source[i].title);

      }
      //console.log(source[0].title);
      //alert(source[0].title);   
      //doSomethingWithResult(source); 
   });

   */