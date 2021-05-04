var slider = document.getElementById('slider');

noUiSlider.create(slider, {
  start: [10, 120],
  connect: true,
  step: 1,
  range: {
    'min': 1,
    'max': 600
  }
});

var RangeMin = document.getElementById('range-min');
var RangeMax = document.getElementById('range-max');
var inputs = [RangeMin, RangeMax];

slider.noUiSlider.on('update', function (values, handle) {
  inputs[handle].value = Math.round(values[handle]);
});
  
var setslider = (i, value) => {
  let arr = [null, null];
  arr[i] = value;
  console.log(arr);
  slider.noUiSlider.set(arr);
};


inputs.forEach((el, index) => {
  el.addEventListener('change', (e) => {
    console.log(index);    
    setslider(index, e.currentTarget.value);
  });
});