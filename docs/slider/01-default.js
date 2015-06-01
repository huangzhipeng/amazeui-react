var onSelect = function(index, direction) {
  console.log('激活的幻灯片编号：', index, '，滚动方向：', direction);
};

var sliderIntance = (
  <Slider onSelect={onSelect}>
    <Slider.Item>
      <img
        src="http://7jpqbr.com1.z0.glb.clouddn.com/bing-1.jpg"/>
    </Slider.Item>
    <Slider.Item><img
      src="http://7jpqbr.com1.z0.glb.clouddn.com/bing-2.jpg"/></Slider.Item>
    <Slider.Item>
      <img
        src="http://7jpqbr.com1.z0.glb.clouddn.com/bing-3.jpg"/></Slider.Item>
    <Slider.Item>
      <img
        src="http://7jpqbr.com1.z0.glb.clouddn.com/bing-4.jpg"/></Slider.Item>
  </Slider>
);

React.render(sliderIntance, mountNode);
