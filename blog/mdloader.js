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
  var html = convertMarkdownToHtml(text);
  document.getElementById(divId).innerHTML = html;
}

function openPost(postId) {
  url = `https://raw.githubusercontent.com/olekscode/Blog/master/posts/${postId}.md`;
  loadMarkdown(url, "container");
}

function openListOfPosts() {
  url = "https://raw.githubusercontent.com/olekscode/Blog/master/metadata/posts.json";
  json = getJsonFromURL(url);

  html = '<h1>Published Posts</h1>'
  listItems = ""

  for (const [key, value] of Object.entries(json)) {
    listItems += `<li><a href="pleaseEnableJavaScript.html" onClick="openPost('${key}'); return false">${value}</a></li>`;
  }

  html += `\n<ul>${listItems}</ul>`
  document.getElementById('container').innerHTML = html;
  return false;
}

$('#allPostsButton').click(openListOfPosts);
openListOfPosts();
