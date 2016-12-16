requirejs.config({
    baseUrl:"https://dl.dropboxusercontent.com/u/57683747/syncmetadevelop/js",
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
        describe('ATTRIBUTE GUI Test', function(){
            it('ATTRIBUTE - wrapper should exists', function(){
                expect($('#wrapper').length).to.be.equal(1);
            })
        });
        mocha.run();
    });