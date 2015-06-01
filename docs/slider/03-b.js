var data = ['http://7jpqbr.com1.z0.glb.clouddn.com/bing-1.jpg',
'http://7jpqbr.com1.z0.glb.clouddn.com/bing-2.jpg',
'http://7jpqbr.com1.z0.glb.clouddn.com/bing-3.jpg',
'http://7jpqbr.com1.z0.glb.clouddn.com/bing-4.jpg'];

var themes = ['b1', 'b2', 'b3', 'b4'];

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
