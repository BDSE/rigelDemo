import adder from '../../src/main/webapp/resources/js/modules/adder';
import Obj2 from '../../src/main/webapp/resources/js/modules/obj2';

describe('Test', function () {
    it('should return Hello World From adder', function () {
        assert.equal(adder.sayHelloFromAdder(), "Hello World From Adder");
    });
});
