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

function convertMarkdownToHtml(markdownText) {
  var converter = new showdown.Converter();
  return converter.makeHtml(markdownText);
}

function loadMarkdown(url, divId) {
  var text = getContentsOfFileFromURL(url);
  var html = convertMarkdownToHtml(text);
  document.getElementById(divId).innerHTML = html;
}

url = "https://raw.githubusercontent.com/pharo-open-documentation/pharo-wiki/master/General/Baselines.md";
loadMarkdown(url, "post");
