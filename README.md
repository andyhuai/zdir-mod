# Zdir
Zdir是一款使用PHP开发的目录列表程序，无需数据库，体积小巧，功能完善。

![](https://imgurl.org/upload/1806/349f3b54028d58d6.png)



### 环境要求

* PHP >= 5.6(建议PHP 7.2)
* 文件索引依赖于`curl`组件
* 如果需要获得更高级的文件管理功能，依赖于Fileinfo, iconv, zip, tar and mbstring组件（非必须）

### 说明

* 基于原版进行精简去掉了视频、music、pdf查看预览，去掉了二维码，去掉了文件管理，只保留最基本的文件索引工鞥
* 资源文件放到 `resource` 目录下，和程序文件分开来放，避免混乱和误删。
* 去掉了无用菜单



### 感谢

Zdir的诞生离不开以下开源项目，在此表示感谢。

* [tinyfilemanager](https://github.com/prasathmani/tinyfilemanager)
* [parsedown](https://github.com/erusev/parsedown)
* [LayUI](https://github.com/sentsin/layui)