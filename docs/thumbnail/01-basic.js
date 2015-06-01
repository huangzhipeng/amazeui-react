var thumbnailInstance = (
  <Grid>
    <Col sm={4}>
      <Thumbnail
        standalone
        src="http://s.cn.bing.net/az/hprichbg/rb/TheLuxorHotel_ZH-CN12121725266_1920x1080.jpg"/>
    </Col>
    <Col sm={4}>
      <Thumbnail
        src="http://s.cn.bing.net/az/hprichbg/rb/TheLuxorHotel_ZH-CN12121725266_1920x1080.jpg"/>
    </Col>
    <Col sm={4}>
      <Thumbnail
        href="#"
        src="http://s.cn.bing.net/az/hprichbg/rb/TheLuxorHotel_ZH-CN12121725266_1920x1080.jpg"/>
    </Col>
  </Grid>
);

React.render(thumbnailInstance, mountNode);
