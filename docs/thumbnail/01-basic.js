var thumbnailInstance = (
  <Grid>
    <Col sm={4}>
      <Thumbnail
        standalone
        src="http://7jpqbr.com1.z0.glb.clouddn.com/bing-1.jpg"/>
    </Col>
    <Col sm={4}>
      <Thumbnail
        src="http://7jpqbr.com1.z0.glb.clouddn.com/bing-2.jpg"/>
    </Col>
    <Col sm={4}>
      <Thumbnail
        href="#"
        src="http://7jpqbr.com1.z0.glb.clouddn.com/bing-3.jpg"/>
    </Col>
  </Grid>
);

React.render(thumbnailInstance, mountNode);
