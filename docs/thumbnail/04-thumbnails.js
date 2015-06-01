// 响应式属性参见 AvgGrid

var thumbnailInstance = (
  <Thumbnails sm={3}>
    <Thumbnail
      standalone
      src="http://7jpqbr.com1.z0.glb.clouddn.com/bing-1.jpg"/>
    <Thumbnail
      src="http://7jpqbr.com1.z0.glb.clouddn.com/bing-2.jpg"/>

    <Thumbnail
      href="#"
      src="http://7jpqbr.com1.z0.glb.clouddn.com/bing-3.jpg"/>
  </Thumbnails>
);

React.render(thumbnailInstance, mountNode);
