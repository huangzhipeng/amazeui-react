var data= [{img:"http://s.cn.bing.net/az/hprichbg/rb/TheLuxorHotel_ZH-CN12121725266_1920x1080.jpg",desc:"这是标题标题标题标题标题标题标题0"},{img:"http://s.cn.bing.net/az/hprichbg/rb/MovingWalkway_ZH-CN9842297711_1920x1080.jpg",desc:"这是标题标题标题标题标题标题标题1"},{img:"http://global.bing.com/az/hprichbg/rb/UchisarCastle_EN-US10838608428_1920x1080.jpg",desc:"这是标题标题标题标题标题标题标题2"},{img:"http://global.bing.com/az/hprichbg/rb/DumbartonOaksGardens_EN-US12360736195_1920x1080.jpg",desc:"这是标题标题标题标题标题标题标题3"}]

var themes = ['c1', 'c2', 'c3', 'c4'];

var sliderIntance = (
  <div>
    {themes.map(function(t, i) {
      return (
        <div key={i} className="am-margin-bottom">
          <h4>主题 <code>{t}</code></h4>
          <Slider theme={t}>
            {data.map(function(item, k) {
              return (
                <Slider.Item key={k}>
                  <img src={item.img} />
                  <div className="am-slider-desc">{item.desc}</div>
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
