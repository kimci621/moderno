let gulp = require('gulp');
let sass = require('gulp-sass');
let rename = require('gulp-rename');
let browserSync = require('browser-sync');//это livereloader только через gulp
let autoprefixer = require('gulp-autoprefixer');
let concat = require('gulp-concat');
let uglify = require('gulp-uglify');
let cssmin = require('gulp-cssmin');
// let это обозначение переменной
// let gulp это имя переменной т.е. gulp имя переменной 
// require('gulp') - значение переменной 
// это все в JavaScript, привыкай чувак :3
// можно записывать переменные в таком формате, лаконичнее
// let gulp = require('gulp'),
//    sass = require('gulp-sass');
// т.е. в одно обозначение let записывать все переменные

// gulp.task(); - в таком виде записываются таски для галпа, далее будет пример и как нудно записывать всегда(стандарты общепринятые)
gulp.task('script', function(){//нужно так же проделать с css
    return gulp.src([
        'node_modules/slick-carousel/slick/slick.js',
        'node_modules/magnific-popup/dist/jquery.magnific-popup.js', // теперь эти 2 файла = 'script'
    ])
    .pipe(concat('libs.min.js'))//конкатинация(concat) сразу прописывает им название
    .pipe(uglify())//сжимает файлы
    .pipe(gulp.dest('test_app/js'))//кидает их в данную директорию
});// объеденяем и сжимаем все файлы js в один файл

gulp.task('maincss', function(){//таска с css
    return gulp.src([
        'node_modules/slick-carousel/slick/slick.css',
        'node_modules/magnific-popup/dist/magnific-popup.css',
        'node_modules/normalize.css/normalize.css',// теперь эти 3 файлa = 'maincss'
    ])
    .pipe(concat('libs.min.css'))//конкатинация(concat) сразу прописывает им название
    .pipe(cssmin())//сжимает файлы
    .pipe(gulp.dest('test_app/css'))//кидает их в данную директорию
});// подключаем все файлы js в один файл

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "test_app/"//указываем путь что релоадить
        }
    });
});// подрубаем browser sync


gulp.task('sass', function(){
    return gulp.src('test_app/scss/main.scss')
        .pipe(sass({outputStyle: 'compressed'}))// sass() - ф-ция преобразует  scss в css в формате compressed
        .pipe(rename({suffix: '.min'}))//меняет название преобразованного файла, в данном случае добавляет . min
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 8 versions']
        }))// подрубили автопрефиксер, если полезут ошибки то это нормально, выгло обновление, что-то убрали/переименовали и тд и тп
        .pipe(gulp.dest('test_app/css'))//куда отправлять sass() файлы  
        //ВСЕ ПЛАГИНЫ GULP МОЖНО НАЙТИ ПО НАЗВАНИЮ НА САЙТЕ С ПРИМЕРАМИ ИСПОЛЬЗОВАНИЯ(sass(), rename() и тд)
        .pipe(browserSync.reload({stream: true}))// .reload есть в параметрах пайпа, stream это json browserSync, теперь обновляется css
});
// Тут мы прописали таску с галпом, таска вызывает функцию, которая указывает путь для галпа в наш scss файл, даллее методом pipe() _*надо посмотреть подробнее*_ и pipe преобразует такой структурой и scss в css. pipe() - это некая труба, предназначенная для преобразования каких-то данных в другие, т.е. заглатывает одни данные и выпускает преобразованные 

gulp.task('html', function(){
    return gulp.src('test_app/*.html')
    .pipe(browserSync.reload({stream: true}))// Теперь обновляется html код
});
gulp.task('js', function(){
    return gulp.src('test_app/js/*.js')
    .pipe(browserSync.reload({stream: true}))// Теперь обновляется js код
});

//надо прописать автосинхронизация для того чтобы все работало на автомате и не писать каждый раз gulp sass в файле *.scss
gulp.task('watch', function(){
    gulp.watch('test_app/scss/main.scss', gulp.parallel('sass'))
    gulp.watch('test_app/*.html', gulp.parallel('html'))
    gulp.watch('test_app/js/*.js', gulp.parallel('js'))
    
    // gulp.task('watch')- это имя таски
    // gulp.watch('') - за кем следить
    // gulp.parallel('') - если watch сработал запускается parallel и выполняет действия в его опциях
});

//волшебная кнопока которая запустит все таски и браузер
gulp.task('default', gulp.parallel('sass', 'watch', 'browser-sync', 'script', 'maincss'))

//вендорные префиксы- что это? -ниже...
//---АВТОПРЕФИКСЕР--- display:-webkit-box; display:-ms-flexbox; и тд  и мп и есть вендорные префиксы, они указывают на браузеры в которых используются, а нужны для тестирования и внедрения новых технологий в новые версии браузеров, например -ms-flexbox не будет работать на хроме тк там -webkit-box, вообще все это display: flex;, автопрефиксер сам прописывает эти параметры чтобы на всех браузерах все отображалось нормально! это важно! 