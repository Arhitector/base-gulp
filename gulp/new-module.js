module.exports = new function () {
    var prompt = require('gulp-prompt');

    return function () {
        return gulp.src('/')
            .pipe(prompt.prompt([
                {
                    type: 'checkbox',
                    name: 'dir',
                    message: 'What folder do you need?',
                    choices: ['modules', 'blocks']
                },
                {
                    type: 'input',
                    name: 'moduleName',
                    message: 'What the name of module?'
                }
            ], function(res){
                var moduleName = res.moduleName,
                    modulePath = cfg.src.markups + '/' + res.dir + '/' + moduleName;
                moduleFiles = [cfg.htmlCompiler, cfg.cssBuilder, 'js', 'json'];
                if (!fs.existsSync(modulePath)){
                    fs.mkdirSync(modulePath);
                }
                if (cfg.htmlCompiler == 'jade') {
                    fs.writeFileSync(modulePath + '/' + moduleName + '.jade', '.m-' + moduleName);
                }
                else if (cfg.htmlCompiler == 'hbs') {
                    fs.writeFileSync(modulePath + '/' + moduleName + '.hbs', '<div class="m-' + moduleName + '">\n\n</div>');
                }
                fs.writeFileSync(modulePath + '/' + moduleName + '.' + cfg.cssBuilder, '.m-' + moduleName + '{\n\n}');
                fs.writeFileSync(modulePath + '/' + moduleName + '.js', '');
                fs.writeFileSync(modulePath + '/' + moduleName + '.json', '{}');
            }));

      // return gulp.src()
    };  
};