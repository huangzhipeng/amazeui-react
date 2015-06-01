var data = [
  {
    img: 'http://7jpqbr.com1.z0.glb.clouddn.com/bing-1.jpg',
    desc: '这是标题标题标题标题标题标题标题0'
  },
  {
    img: 'http://7jpqbr.com1.z0.glb.clouddn.com/bing-2.jpg',
    desc: '这是标题标题标题标题标题标题标题1'
  },
  {
    img: 'http://7jpqbr.com1.z0.glb.clouddn.com/bing-3.jpg',
    desc: '这是标题标题标题标题标题标题标题2'
  },
  {
    img: 'http://7jpqbr.com1.z0.glb.clouddn.com/bing-4.jpg',
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
