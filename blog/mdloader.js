function getContentsOfFileFromURL(url) {
  var result = null;
  $.ajax({
    url: url,
    type: 'get',
    dataType: 'text',
    async: false,
    success: function(data) {
      result = data;
    }
  });
  return result;
}

function getJsonFromURL(url) {
  jsonString = getContentsOfFileFromURL(url);
  return JSON.parse(jsonString);
}

function convertMarkdownToHtml(markdownText) {
  var converter = new showdown.Converter();
  return converter.makeHtml(markdownText);
}

function loadMarkdown(url, divId) {
  var text = getContentsOfFileFromURL(url);
  var html = '<div id="post">' + convertMarkdownToHtml(text) + '</div>';
  document.getElementById(divId).innerHTML = html;
}

function onContentReloaded() {
  Prism.highlightAll();
}

function openPost(postId) {
  url = `https://raw.githubusercontent.com/olekscode/Blog/master/posts/${postId}.md`;
  loadMarkdown(url, "container");
  onContentReloaded();
}

function openListOfPosts() {
  url = "https://raw.githubusercontent.com/olekscode/Blog/master/metadata/posts.json";
  json = getJsonFromURL(url);

  html = '<h1>Published Posts</h1>'
  listItems = ""

  for (const [key, value] of Object.entries(json)) {
    listItems += `<li><a href="pleaseEnableJavaScript.html" onClick="window.open('?post=${key}', '_self'); return false;">${value}</a></li>`;
  }

  html += `\n<ul id="list-of-posts">${listItems}</ul>`
  document.getElementById('container').innerHTML = html;
  return false;
}

function routeBasedOnSearchParameter() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  postId = urlParams.get('post');

  if (postId) {
    openPost(postId);
  }
  else {
    openListOfPosts();
  }
}

$('#allPostsButton').click(openListOfPosts);
routeBasedOnSearchParameter();
