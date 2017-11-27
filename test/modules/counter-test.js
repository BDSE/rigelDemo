// Sample test file using mocha and chai.
import CounterObj from '../../src/main/webapp/resources/js/modules/counter';
import Obj2 from '../../src/main/webapp/resources/js/modules/obj2';

var counterObj1 = new CounterObj();
var counterObj2 = new CounterObj(5);
describe('Counter Object', function () {
    describe("sayHello Method", function () {
        var result = counterObj1.sayHello("Amar");
        it('should return Hello There Amar', function () {
            assert.equal(result, "Hello There Amar");
        });
        it('Should return a string value', function () {
            assert.typeOf(result, 'string', 'we have a string');
        });
    });
    describe("inc method", function () {
        var x = 5;
        for (var i = 0; i < 4; i++) {
            counterObj1.inc();
        }
        var result = counterObj1.inc(x);
        it("should increment by " + x, function () {
            assert.equal(result, i + x);
        });
    });
    describe("dec method", function () {
        counterObj2.dec(2);
        var result = counterObj2.dec();
        it("should decrement", function () {
            assert.equal(result, 2);
        });
    });
    describe("setcounter", function () {
        counterObj2.setCounter(7);
        var result = counterObj2.getCounter();
        it("should retrieve counter", function () {
            assert.equal(result, 7);
        });
    });
});
