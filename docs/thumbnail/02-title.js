var thumbnailInstance = (
  <Grid>
    <Col sm={6}>
      <Thumbnail
        caption="图片标题 #1"
        src="http://7jpqbr.com1.z0.glb.clouddn.com/bing-1.jpg"/>
    </Col>
    <Col sm={6}>
      <Thumbnail
        href="#"
        caption="图片标题 #2"
        src="http://7jpqbr.com1.z0.glb.clouddn.com/bing-2.jpg"/>
    </Col>
  </Grid>
);

React.render(thumbnailInstance, mountNode);
