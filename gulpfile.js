let gulp = require('gulp');
let sass = require('gulp-sass');
let rename = require('gulp-rename');
let browserSync = require('browser-sync');
let autoprefixer = require('gulp-autoprefixer');
let concat = require('gulp-concat');
let uglify = require('gulp-uglify');
let cssmin = require('gulp-cssmin');
// require('gulp') - значение переменной 
// можно записывать переменные в таком формате, лаконичнее
// let gulp = require('gulp'),
//    sass = require('gulp-sass');


// gulp.task(); - таски для галпа
gulp.task('script', function () {
  return gulp.src([
    'node_modules/slick-carousel/slick/slick.js',
    'node_modules/magnific-popup/dist/jquery.magnific-popup.js',
    'node_modules/mixitup/dist/mixitup.js',
    'node_modules/rateyo/src/jquery.rateyo.js',
    'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js',
    'node_modules/nouislider/distribute/nouislider.js',
  ])
    .pipe(concat('libs.min.js'))//конкатинация(concat)
    .pipe(uglify())//compress
    .pipe(gulp.dest('app/js'))//путь
});

gulp.task('maincss', function () {//таска с css
  return gulp.src([
    'node_modules/slick-carousel/slick/slick.css',
    'node_modules/magnific-popup/dist/magnific-popup.css',
    'node_modules/normalize.css/normalize.css',
    'node_modules/rateyo/src/jquery.rateyo.css',
    'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.css',
    'node_modules/nouislider/distribute/nouislider.css',
  ])
    .pipe(concat('libs.min.css'))//конкатинация(concat)
    .pipe(cssmin())//compress
    .pipe(gulp.dest('app/css'))//руть
});

gulp.task('browser-sync', function () {
  browserSync.init({
    server: {
      baseDir: "app/" // путь 
    }
  });
});


gulp.task('sass', function () {
  return gulp.src('app/scss/**/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }))// sass() - from sass to css compress
    .pipe(rename({ suffix: '.min' }))//add .min (naming)
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 8 versions']
    }))// подрубили автопрефиксер, если полезут ошибки то это нормально.
    .pipe(gulp.dest('app/css'))//путь преобразованных
    .pipe(browserSync.reload({ stream: true }))// .reload есть в параметрах пайпа, stream это json browserSync
});
// Тут мы прописали таску с галпом, таска вызывает функцию, которая указывает путь для галпа в наш scss файл, даллее методом pipe() _*надо посмотреть подробнее*_ и pipe преобразует такой структурой и scss в css. pipe() - это некая труба, предназначенная для преобразования каких-то данных в другие, т.е. заглатывает одни данные и выпускает преобразованные 

gulp.task('html', function () {
  return gulp.src('app/*.html')
    .pipe(browserSync.reload({ stream: true }))// обновляется html код
});
gulp.task('js', function () {
  return gulp.src('app/js/*.js')
    .pipe(browserSync.reload({ stream: true }))// обновляется js код
});

//автосинхронизация чтобы не писать каждый раз gulp sass
gulp.task('watch', function () {
  gulp.watch('app/scss/**/*.scss', gulp.parallel('sass'))
  gulp.watch('app/*.html', gulp.parallel('html'))
  gulp.watch('app/js/*.js', gulp.parallel('js'))

  // gulp.task('watch')- это имя таски
  // gulp.watch('') - за кем следить
  // gulp.parallel('') - если watch сработал запускается parallel и выполняет действия в его опциях
});

//запуск таски
gulp.task('default', gulp.parallel('sass', 'watch', 'browser-sync', 'script', 'maincss'))
