var data = ['http://s.cn.bing.net/az/hprichbg/rb/TheLuxorHotel_ZH-CN12121725266_1920x1080.jpg',
'http://s.cn.bing.net/az/hprichbg/rb/MovingWalkway_ZH-CN9842297711_1920x1080.jpg',
'http://global.bing.com/az/hprichbg/rb/UchisarCastle_EN-US10838608428_1920x1080.jpg',
'http://global.bing.com/az/hprichbg/rb/DumbartonOaksGardens_EN-US12360736195_1920x1080.jpg'];

var themes = ['a1', 'a2', 'a3', 'a4', 'a5'];

var sliderIntance = (
  <div>
    {themes.map(function(t, i) {
      return (
        <div key={i} className="am-margin-bottom">
          <h4>主题 <code>{t}</code></h4>
          <Slider theme={t}>
            {data.map(function(item, i) {
              return (
                <Slider.Item key={i}>
                  <img src={item} />
                </Slider.Item>
              );
            })}
          </Slider>
        </div>
      );
    })}
  </div>
);

React.render(sliderIntance, mountNode);
