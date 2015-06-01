var data = [{img:"http://s.cn.bing.net/az/hprichbg/rb/TheLuxorHotel_ZH-CN12121725266_1920x1080.jpg",desc:'<h2 class="am-slider-title">远方 有一个地方 那里种有我们的梦想</h2><a class="am-slider-more">了解更多</a>'},{img:"http://s.cn.bing.net/az/hprichbg/rb/MovingWalkway_ZH-CN9842297711_1920x1080.jpg",desc:'<h2 class="am-slider-title">某天 也许会相遇 相遇在这个好地方</h2><a class="am-slider-more">了解更多</a>'},{img:"http://global.bing.com/az/hprichbg/rb/UchisarCastle_EN-US10838608428_1920x1080.jpg",desc:'<h2 class="am-slider-title">不要太担心 只因为我相信 终会走过这条遥远的道路</h2><a class="am-slider-more">了解更多</a>'},{img:"http://global.bing.com/az/hprichbg/rb/DumbartonOaksGardens_EN-US12360736195_1920x1080.jpg",desc:'<h2 class="am-slider-title">OH PARA PARADISE 是否那么重要 你是否那么地遥远</h2><a class="am-slider-more">了解更多</a>'}];


var sliderIntance = (
<Slider theme="d1">
  {data.map(function(item, k) {
    return (
      <Slider.Item key={k}>
        <img src={item.img} />
        <div
          className="am-slider-desc"
          dangerouslySetInnerHTML={{__html: item.desc}} />
      </Slider.Item>
    );
  })}
</Slider>);

React.render(sliderIntance, mountNode);
