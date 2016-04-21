module.exports = new function () {
    var jade                = require('gulp-jade'),
        jadeInheritance     = require('gulp-jade-inheritance'),
        fs                  = require('fs');

    return function () {
        return gulp.src(cfg.src.markups + '/*.jade')
            .pipe(jadeInheritance({basedir: cfg.src.markups}))
            .pipe(jade({
                pretty: true,
                data: _.extend({
                        'env'		: NODE_ENV,
                        isProd		: cfg.isProd,
                        jsBundlePath: cfg.destTemplate.jsPath + '/' + cfg.jsBundle + '.js'
                    },
                    cfg.destTemplate,
                    {
                        getData: function (dataPath) {
                            return JSON.parse(fs.readFileSync('src/markups/' + dataPath).toString());
                        }
                    }
                )
            }))
            .on('error', notify.onError(function (error) {
                return "Error: " + error.message ;
            }))
            .pipe(gulp.dest(cfg.dest.html));
    };
};