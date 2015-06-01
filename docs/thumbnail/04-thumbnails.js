// 响应式属性参见 AvgGrid

var thumbnailInstance = (
  <Thumbnails sm={3}>
    <Thumbnail
      standalone
      src="http://s.cn.bing.net/az/hprichbg/rb/TheLuxorHotel_ZH-CN12121725266_1920x1080.jpg"/>
    <Thumbnail
      src="http://s.cn.bing.net/az/hprichbg/rb/TheLuxorHotel_ZH-CN12121725266_1920x1080.jpg"/>

    <Thumbnail
      href="#"
      src="http://s.cn.bing.net/az/hprichbg/rb/TheLuxorHotel_ZH-CN12121725266_1920x1080.jpg"/>
  </Thumbnails>
);

React.render(thumbnailInstance, mountNode);
