<p align="center"><a href="#" target="_blank"><img width="140" src="/logo.png"></a></p>

# Cdt Blogger pagination
Modern Blogger numbered pagination
## How to use
``` xml
<style>
//<![CDATA[
#blog-pager {
  padding: 13px 0
}

#blog-pager span {
  display: inline-block;
  margin-left: 5px;
  line-height: 40px;
  white-space: nowrap;
  transition: all .3s ease
}

#blog-pager .showPageOf {
  font-size: 14px;
  color: #757575;
  margin-left: 15px
}

#blog-pager .pageNum {
  background: #eee;
  width: 40px;
  text-align: center;
  border-radius: 50%
}

#blog-pager .pageNum a {
  display: block;
  color: #545454
}

#blog-pager .pageNum.current {
  background: #d33;
  color: #fefefe;
  cursor: default
}

#blog-pager .pageNum.delimiter {
  background: none;
  cursor: default;
  width: auto
}

#blog-pager .pageNum:not(.current):not(.delimiter):hover {
  background: #d6d6d6
}
//]]>
</style>
```
``` xml
<script>
//<![CDATA[
var paginationConfig = {
  text: {
    page: "Page",
    of : "of"
  },
  perPage: 8
};
//]]>
</script>
<script src='https://cdn.jsdelivr.net/gh/codatey/cdt-paginaton@1.0/dist/cdt-pagination.min.js'/>
```
