var thumbnailInstance = (
  <Grid>
    <Col sm={6}>
      <Thumbnail
        caption="图片标题 #1"
        src="http://s.cn.bing.net/az/hprichbg/rb/TheLuxorHotel_ZH-CN12121725266_1920x1080.jpg"/>
    </Col>
    <Col sm={6}>
      <Thumbnail
        href="#"
        caption="图片标题 #2"
        src="http://s.cn.bing.net/az/hprichbg/rb/TheLuxorHotel_ZH-CN12121725266_1920x1080.jpg"/>
    </Col>
  </Grid>
);

React.render(thumbnailInstance, mountNode);
