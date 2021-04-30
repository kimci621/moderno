var slider = document.getElementById('slider');

noUiSlider.create(slider, {
  start: [10, 120],
  connect: true,
  step: 1,
  range: {
    'min': 0,
    'max': 600
  }
});

var RangeMin = document.getElementById('range-min');
var RangeMax = document.getElementById('range-max');
var inputs = [RangeMin, RangeMax];

slider.noUiSlider.on('update', function (values, handle) {
  inputs[handle].value = Math.round(values[handle]);
});
  
const setslider = (i, value) => {
  let arr = [null, null];
  arr[i] = value;
  console.log(arr);
  setslider.noUiSlider.set(arr);
};


inputs.forEach((el, index) => {
  el.addEventListener('change', (e) => {
    console.log(index);    
    setslider(index, e.currentTarget.value);
  });
});