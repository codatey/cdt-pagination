/*
cdt-Pagination 1.0
Author: Mustapha Bouh
Link: https://github.com/codatey/cdt-paginaton
This work is licensed under the terms of the MIT license.
For a copy, see <https://opensource.org/licenses/MIT>.
*/
if(typeof paginationConfig != "object") {
  var paginationConfig = {
    text: {
      page: "الصفحة",
      of : "من"
    },
    perPage: 8
  };
}
String.prototype.regexIndexOf = function(regex, startpos) {
  var indexOf = this.substring(startpos || 0).search(regex);
  return (indexOf >= 0) ? (indexOf + (startpos || 0)) : indexOf;
}

function getParam(name) {
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    url = window.location.href,
    results = regex.exec(url);
  if(!results) return null;
  if(!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
var locationURL = location.href,
  currentPageNo = 1,
  perPage = paginationConfig.perPage,
  distPageNo,
  postLabel,
  isIndex;
initPagination();

function paginationResuts(e) {
  var blogPager = document.getElementById("blog-pager");
  if(blogPager) {
    blogPager.innerHTML = e
  }
}

function initPagination() {
  if(!Boolean(getParam('q')) && locationURL.indexOf(".html") == -1) {
    if(locationURL.indexOf("#PageNo=") != -1) {
      currentPageNo = parseInt(locationURL.substring(locationURL.indexOf("#PageNo=") + 8, locationURL.length));
    }
    var head = (document.head || document.getElementsByTagName("head")[0]),
      script = document.createElement('script');
    if(locationURL.indexOf("/search/label/") == -1) {
      isIndex = true;
      perPage = parseInt(getParam('max-results')) || perPage;
      script.src = "/feeds/posts/summary?max-results=1&alt=json-in-script&callback=totalResults";
    } else {
      isIndex = false
      if(locationURL.regexIndexOf(/\?[a-z-]+=/g) != -1) {
        postLabel = locationURL.substring(locationURL.indexOf("/search/label/") + 14, locationURL.regexIndexOf(/\?[a-z-]+=/g));
        perPage = getParam('max-results') || 20;
      } else {
        postLabel = locationURL.substring(locationURL.indexOf("/search/label/") + 14, locationURL.match(/\?|#|&|$/).index);
        perPage = 20
      }
      script.src = "/feeds/posts/summary/-/" + postLabel + "?alt=json-in-script&callback=totalResults&max-results=1";
    }
    head.appendChild(script);
  } else {
    console.log('the pagination dont work in this page');
  }
}

function totalResults(e) {
  var totaldata = parseInt(e.feed.openSearch$totalResults.$t, 10);
  if(totaldata > perPage) {
    loopinitPagination(totaldata)
  } else {
    paginationResuts('');
  }
}

function loopinitPagination(totalPosts) {
  var html = '',
    space = ' ',
    pagination = {
      expectedPages: Math.ceil(totalPosts / perPage)
    };
  html += "<span class='showPageOf'>" + paginationConfig.text.page + space + currentPageNo + space + paginationConfig.text.of + space + pagination.expectedPages + "</span>";
  for(var i = 1; i <= pagination.expectedPages; i++) {
    var cond = (i <= 6 && currentPageNo < 6) || i <= 3 || i >= pagination.expectedPages - 2 || (i >= currentPageNo - 2 && i <= currentPageNo + 2);
    if(cond) {
      if(currentPageNo == i) {
        html += '<span class="pageNum current">' + i + '</span>'
      } else if(i == 1) {
        if(isIndex) {
          html += '<span class="pageNum"><a href="/">1</a></span>'
        } else {
          html += '<span class="pageNum"><a href="/search/label/' + postLabel + '?max-results=' + perPage + '">1</a></span>'
        }
      } else {
        html += '<span class="pageNum"><a href="#" onclick="redirectPage(' + i + ');return false">' + i + '</a></span>'
      }
    }
    if(currentPageNo > 6 && i == 3) {
      html += '<span class="pageNum delimiter">...</span>'
    }
    if(currentPageNo < pagination.expectedPages - 5 && i == pagination.expectedPages - 3) {
      html += '<span class="pageNum delimiter">...</span>'
    }
  }
  paginationResuts(html);
}

function redirectPage(numberpage) {
  distPageNo = numberpage;
  var jsonstart = (numberpage - 1) * perPage,
    head = (document.head || document.getElementsByTagName("head")[0]),
    script = document.createElement('script');
  if(isIndex) {
    script.src = "/feeds/posts/summary?start-index=" + jsonstart + "&max-results=1&alt=json-in-script&callback=getTimestamp"
  } else {
    script.src = "/feeds/posts/summary/-/" + postLabel + "?start-index=" + jsonstart + "&max-results=1&alt=json-in-script&callback=getTimestamp";
  }
  head.appendChild(script);
}

function getTimestamp(e) {
  var post = e.feed.entry[0],
    timestamp = encodeURIComponent((post.published.$t.substring(0, 19) + post.published.$t.substring(23, 29))),
    url2Go;
  if(isIndex) {
    url2Go = "/search?updated-max=" + timestamp + "&max-results=" + perPage + "#PageNo=" + distPageNo
  } else {
    url2Go = "/search/label/" + postLabel + "?updated-max=" + timestamp + "&max-results=" + perPage + "#PageNo=" + distPageNo
  }
  location.href = url2Go
}