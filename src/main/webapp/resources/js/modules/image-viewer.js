import imgURL from '../../images/fitbit-logo.png';
import obj from './obj2';

console.log(obj.showObj1());

console.log(imgURL);
const img1 = document.createElement('img');
img1.src = imgURL;

document.body.appendChild(img1);

const img2 = document.createElement('img');
img2.src = process.env.ASSET_PATH + "/resources/images/download-app-ios8.png";

document.body.appendChild(img2);

function testimg() {
    return "test image file";
}