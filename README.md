<p align="center"><a href="#" target="_blank"><img width="140" src="/logo.png"></a></p>

# CDT Blogger pagination
Modern Blogger numbered pagination
## Usage
``` xml
<link href='https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' rel='stylesheet' type='text/css'/>

<style>
/*<![CDATA[*/
#blog-pager.active{font-size:0}
#blog-pager.active span{display:inline-block;white-space:nowrap;font-size:1rem;line-height:35px;margin-left:5px}
#blog-pager span.showPageOf{margin-left:15px;font-size:14px;color:#666}
#blog-pager span.pageNum{background:#fff;border-radius:3px;text-align:center;box-shadow:0 0 0 1px #f0f0f0}
#blog-pager span.pageNum.current{background:#2196F3;color:#fefefe;cursor:default;padding:0 10px}
#blog-pager span.pageNum a{color:#757575;display:block;padding:0 10px}
#blog-pager span.pageNum a:hover{color:#545454;background:#f0f0f0}
#blog-pager span.inStyle{cursor:default;padding:0 5px}
/*]]>*/
</style>

<script>
/*<![CDATA[*/
var paginationConfig = {
  perPage: 10,
  showFirstPage: true,
  showLastPage: true,
  showNav: true,
  text_prev: "<i class='fa fa-angle-right'></i>",
  text_next: "<i class='fa fa-angle-left'></i>",
  text_lastPage: "<i class='fa fa-angle-double-left'></i>",
  text_firstPage: "<i class='fa fa-angle-double-right'></i>"
}
/*]]>*/
</script>
<script src='https://cdn.jsdelivr.net/gh/codatey/cdt-pagination@1.2.2/dist/cdt-pagination.min.js'/>
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
