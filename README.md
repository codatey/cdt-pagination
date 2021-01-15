<p align="center"><a href="#" target="_blank"><img width="140" alt='cdt-pagination logo' src="logo.png"></a></p>

# Blogger cdt-pagination
Modern Blogger numbered pagination

## How to use
Put this code after the default pagination
``` html
<script>
    // optional to edit default settings
    var paginationConfig = {
        perPage: 10
    }
</script>
<script src='https://cdn.jsdelivr.net/gh/codatey/cdt-pagination@2.0.0/dist/cdt-pagination.min.js'></script>
```

## Options

| Configuration options          | Value type    | Default value      |
|-----------------|---------|--------------|
| `selector`        | <sub>String  | "blog-pager" |
| `text_page`       | <sub>String  | "الصفحة"     |
| `text_of`         | <sub>String  | "من"         |
| `perPage`         | <sub>Number  | 8            |
| `showPageOf`      | <sub>Boolean | false        |
| `showNav`         | <sub>Boolean | true         |
| `showNavPrev`     | <sub>Boolean | true         |
| `showNavNext`     | <sub>Boolean | true         |
| `showNavFirst`    | <sub>Boolean | true         |
| `showNavLast`     | <sub>Boolean | true         |
| `navPrevContent`  | <sub>String  | "السابق"     |
| `navNextContent`  | <sub>String  | "الموالي"    |
| `navFirstContent` | <sub>String  | "البداية"    |
| `navLastContent`  | <sub>String  | "النهاية"    |
| `showEllipsis`    | <sub>Boolean | true         |
| `showLastPage`    | <sub>Boolean | true         |
| `ellipsis`        | <sub>String  | "..."        |