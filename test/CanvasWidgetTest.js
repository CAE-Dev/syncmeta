requirejs.config({
    baseUrl:"https://cae-dev.github.io/syncmeta/js",
    paths: {
        chai : "lib/vendor/test/chai",
        mocha:'lib/vendor/test/mocha',
        WebConsoleReporter:'./../test/WebConsole'
    }
});
requirejs(['jquery','chai','WebConsoleReporter','mocha'],
    function($,chai, WebConsoleReporter){
        $('body').append($('<div id="mocha" style="display: none"></div>'));

        mocha.setup('bdd');
        mocha.reporter(WebConsoleReporter);
        //mocha.timeout(5000);

        var expect = chai.expect;
        describe('Canvas GUI Test', function(){
            it('CANVAS - canvas drawing panel should exists', function(){
                expect($('#canvas').length).to.be.equal(1);
            })
        });
        mocha.run();
    });