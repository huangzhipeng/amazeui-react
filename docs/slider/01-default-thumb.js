var data = [
{
  thumb: 'http://7jpqbr.com1.z0.glb.clouddn.com/bing-1.jpg',
  img: 'http://7jpqbr.com1.z0.glb.clouddn.com/bing-1.jpg'
},
{
  thumb: 'http://7jpqbr.com1.z0.glb.clouddn.com/bing-2.jpg',
  img: 'http://7jpqbr.com1.z0.glb.clouddn.com/bing-2.jpg'
},
{
  thumb: 'http://7jpqbr.com1.z0.glb.clouddn.com/bing-3.jpg',
  img: 'http://7jpqbr.com1.z0.glb.clouddn.com/bing-3.jpg'
},
{
  thumb: 'http://7jpqbr.com1.z0.glb.clouddn.com/bing-4.jpg',
  img: 'http://7jpqbr.com1.z0.glb.clouddn.com/bing-4.jpg'
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
