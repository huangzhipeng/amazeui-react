var data = [
{
  thumb: 'http://s.cn.bing.net/az/hprichbg/rb/TheLuxorHotel_ZH-CN12121725266_1920x1080.jpg',
  img: 'http://s.cn.bing.net/az/hprichbg/rb/TheLuxorHotel_ZH-CN12121725266_1920x1080.jpg'
},
{
  thumb: 'http://s.cn.bing.net/az/hprichbg/rb/MovingWalkway_ZH-CN9842297711_1920x1080.jpg',
  img: 'http://s.cn.bing.net/az/hprichbg/rb/MovingWalkway_ZH-CN9842297711_1920x1080.jpg'
},
{
  thumb: 'http://global.bing.com/az/hprichbg/rb/UchisarCastle_EN-US10838608428_1920x1080.jpg',
  img: 'http://global.bing.com/az/hprichbg/rb/UchisarCastle_EN-US10838608428_1920x1080.jpg'
},
{
  thumb: 'http://global.bing.com/az/hprichbg/rb/DumbartonOaksGardens_EN-US12360736195_1920x1080.jpg',
  img: 'http://global.bing.com/az/hprichbg/rb/DumbartonOaksGardens_EN-US12360736195_1920x1080.jpg'
}];

var sliderIntance = (
  <Slider directionNav={false}>
    {data.map(function(item, i) {
      return (
        <Slider.Item key={i} thumbnail={item.thumb}>
          <img src={item.img} />
        </Slider.Item>
      );
    })}
  </Slider>
);

React.render(sliderIntance, mountNode);
