var onSelect = function(index, direction) {
  console.log('激活的幻灯片编号：', index, '，滚动方向：', direction);
};

var sliderIntance = (
  <Slider onSelect={onSelect}>
    <Slider.Item>
      <img
        src="http://s.cn.bing.net/az/hprichbg/rb/TheLuxorHotel_ZH-CN12121725266_1920x1080.jpg"/>
    </Slider.Item>
    <Slider.Item><img
      src="http://s.cn.bing.net/az/hprichbg/rb/MovingWalkway_ZH-CN9842297711_1920x1080.jpg"/></Slider.Item>
    <Slider.Item>
      <img
        src="http://global.bing.com/az/hprichbg/rb/UchisarCastle_EN-US10838608428_1920x1080.jpg"/></Slider.Item>
    <Slider.Item>
      <img
        src="http://global.bing.com/az/hprichbg/rb/DumbartonOaksGardens_EN-US12360736195_1920x1080.jpg"/></Slider.Item>
  </Slider>
);

React.render(sliderIntance, mountNode);
