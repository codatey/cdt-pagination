/* cdt-pagination 1.3.1jmb */
var paginationConfig={showPageOf:!1};String.prototype.regexIndexOf=function(e,a){var t=this.substring(a||0).search(e);return t>=0?t+(a||0):t};var pgnFuncs={extend:function(e,a){for(var t in a)a.hasOwnProperty(t)&&(e[t]=a[t]);return e},getParam:function(e){e=e.replace(/[\[\]]/g,"\\$&");var a=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)"),t=window.location.href,n=a.exec(t);return n?n[2]?decodeURIComponent(n[2].replace(/\+/g," ")):"":null}},defaultConfig={selector:"blog-pager",text_page:"الصفحة",text_of:"من",perPage:8,showPageOf:!0,showLastPage:!0};if(void 0===paginationConfig)paginationConfig={};var distPageNo,postLabel,isIndex,cdtPagination=pgnFuncs.extend(defaultConfig,paginationConfig),locationURL=location.href,currentPageNo=1,perPage=cdtPagination.perPage;function paginationResults(e){var a=document.getElementById(cdtPagination.selector);a&&(a.innerHTML=e,a.setAttribute("data-loaded","1")),""!=e&&document.addEventListener("click",function(e){var a=e.target.getAttribute("data-page");if(e.target&&a)return redirectPage(a),e.preventDefault(),!1})}function initPagination(){if(setTimeout(void 0),pgnFuncs.getParam("q")||-1!=locationURL.indexOf(".html")||locationURL.regexIndexOf(/\/\d{4}/)>-1&&!(locationURL.indexOf("/search/label/")>-1)){var e=document.getElementById(cdtPagination.selector);e&&e.setAttribute("data-loaded","1")}else{pgnFuncs.getParam("page")&&(currentPageNo=parseInt(pgnFuncs.getParam("page"))||1);var a=document.head||document.getElementsByTagName("head")[0],t=document.createElement("script");-1==locationURL.indexOf("/search/label/")?(isIndex=!0,perPage=parseInt(pgnFuncs.getParam("max-results"))||perPage,t.src="/feeds/posts/summary?max-results=1&alt=json-in-script&callback=totalResults"):(isIndex=!1,-1!=locationURL.regexIndexOf(/\?[a-z-]+=/g)?(postLabel=locationURL.substring(locationURL.indexOf("/search/label/")+14,locationURL.regexIndexOf(/\?[a-z-]+=/g)),perPage=parseInt(pgnFuncs.getParam("max-results"))||20):(postLabel=locationURL.substring(locationURL.indexOf("/search/label/")+14,locationURL.match(/\?|#|&|$/).index),perPage=20),t.src="/feeds/posts/summary/-/"+postLabel+"?alt=json-in-script&callback=totalResults&max-results=1"),a.appendChild(t)}}function totalResults(e){var a=parseInt(e.feed.openSearch$totalResults.$t,10);a>perPage?loopinitPagination(a):paginationResults("")}function loopinitPagination(e){var a="",t=Math.ceil(e/perPage);cdtPagination.showPageOf&&(a+="<span class='showPageOf'>"+cdtPagination.text_page+" "+currentPageNo+" "+cdtPagination.text_of+" "+t+"</span>");for(var n=1;n<=t;n++){var s={a:1==n,b:cdtPagination.showLastPage&&n==t,c:n<6&&currentPageNo<6,d:n>=currentPageNo-2&&n<=currentPageNo+3,e:cdtPagination.showLastPage&&currentPageNo>t-5&&n>t-5},i=s.a||s.b||s.c||s.d||s.e;i&&(a+=currentPageNo==n?'<span class="pageNum current">'+n+"</span>":1==n?isIndex?'<a class="pageNum" href="/">1</a>':'<a class="pageNum" href="/search/label/'+postLabel+"?max-results="+perPage+'">1</a>':'<a class="pageNum" href="#" data-page="'+n+'">'+n+"</a>"),i||2!=n||(a+='<span class="pageNum delimiter">...</span>'),cdtPagination.showLastPage&&!i&&n==t-1&&(a+='<span class="pageNum delimiter">...</span>')}paginationResults(a)}function redirectPage(e){distPageNo=e;var a=(e-1)*perPage,t=document.head||document.getElementsByTagName("head")[0],n=document.createElement("script"),s="&start-index="+a;n.src=isIndex?"/feeds/posts/summary?max-results=1&start-index="+a+"&alt=json-in-script&callback=getTimestamp":"/feeds/posts/summary/-/"+postLabel+"?max-results=1"+s+"&alt=json-in-script&callback=getTimestamp",t.appendChild(n)}function getTimestamp(e){var a,t=e.feed.entry[0],n=encodeURIComponent(t.published.$t.substring(0,19)+t.published.$t.substring(23,29));a=isIndex?"/search?updated-max="+n+"&page="+distPageNo+"&max-results="+perPage:"/search/label/"+postLabel+"?updated-max="+n+"&page="+distPageNo+"&max-results="+perPage,location.href=a}initPagination();
