var data = [
  {
    img: 'http://s.cn.bing.net/az/hprichbg/rb/TheLuxorHotel_ZH-CN12121725266_1920x1080.jpg',
    desc: '这是标题标题标题标题标题标题标题0'
  },
  {
    img: 'http://s.cn.bing.net/az/hprichbg/rb/MovingWalkway_ZH-CN9842297711_1920x1080.jpg',
    desc: '这是标题标题标题标题标题标题标题1'
  },
  {
    img: 'http://global.bing.com/az/hprichbg/rb/UchisarCastle_EN-US10838608428_1920x1080.jpg',
    desc: '这是标题标题标题标题标题标题标题2'
  },
  {
    img: 'http://global.bing.com/az/hprichbg/rb/DumbartonOaksGardens_EN-US12360736195_1920x1080.jpg',
    desc: '这是标题标题标题标题标题标题标题3'
  }
];

var sliderIntance = (
  <Slider>
    {data.map(function(item, i) {
      return (
        <Slider.Item key={i}>
          <img src={item.img} />
          <div className="am-slider-desc">
            {item.desc}
          </div>
        </Slider.Item>
      );
    })}
  </Slider>
);

React.render(sliderIntance, mountNode);
