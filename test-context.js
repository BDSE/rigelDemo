
//Import test files here
var context = require.context('./test', true, /-test\.js$/);
context.keys().forEach(context);

//import JS code here
import adder from './src/main/webapp/resources/js/modules/adder';
import array from './src/main/webapp/resources/js/modules/array';
import counter from './src/main/webapp/resources/js/modules/counter';
import imgViewer from './src/main/webapp/resources/js/modules/image-viewer';
import module1 from './src/main/webapp/resources/js/modules/module1';
import module2 from './src/main/webapp/resources/js/modules/module3';
import module3 from './src/main/webapp/resources/js/modules/module3';
import obj1 from './src/main/webapp/resources/js/modules/obj1';
import obj2 from './src/main/webapp/resources/js/modules/obj2';
