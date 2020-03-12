<p align="center"><a href="#" target="_blank"><img width="140" src="/logo.png"></a></p>

# CDT Blogger pagination
Modern Blogger numbered pagination
## Usage
``` xml
<style>
/*<![CDATA[*/
#blog-pager.active{overflow:hidden;font-size:14px}
#blog-pager.active span{float:right;line-height:35px;transition:all .3s ease}
#blog-pager span.showPageOf{font-size:12px;color:#757575;margin-left:10px}
#blog-pager span.pageNum{width:35px;background:#eee;text-align:center;border-radius:50%;margin-left:3px}
#blog-pager span.pageNum:not(.current):not(.delimiter):hover{background:#d6d6d6}
#blog-pager span.pageNum a{display:block;color:#545454}
#blog-pager span.pageNum.current{background:#d33;color:#fff}
/*]]>*/
</style>
```
``` xml
<script>
//<![CDATA[
var paginationConfig = {
  // settings
};
//]]>
</script>
<script src='https://cdn.jsdelivr.net/gh/codatey/cdt-pagination@1.2.1/dist/cdt-pagination.min.js'/>
```
# Settings
| Option         | Type    | Default          |
|----------------|---------|------------------|
| selector       | string  | 'blog-pager'     |
| text_page      | string  | 'الصفحة'         |
| text_of        | string  | 'من'             |
| text_prev      | string  | 'السابق'         |
| text_next      | string  | 'التالي'         |
| text_firstPage | string  | 'الصفحة الأولى'  |
| text_lastPage  | string  | 'الصفحة الأخيرة' |
| perPage        | number  | 8                |
| showPageOf     | boolean | true             |
| showNav        | boolean | false            |
| showFirstPage  | boolean | false            |
| showLastPage   | boolean | false            |
