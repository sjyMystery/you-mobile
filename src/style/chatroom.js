import * as fontSize from './fontSize'
import * as device from './device'

export const messageCellHeight = 40;
export const endLineBlankWidth = 50;
export const avatarWidth = 40;
export const avatarHeight = 40;
export const messageCellPaddingH = 0;
export const messageFontSize = fontSize.xlarge;
export const messageCellBorderWith = 4;
export const messageCellRadius = 7;
export const messageCellMargin = 5;
export const messageCellPaddingV = 4;
export const avatarBorderWidth = 5;

export const messageMaxWidth = device.width
    - avatarWidth * 2
    - messageCellPaddingH * 2
    - messageCellBorderWith * 2
    - messageCellMargin * 6
    - avatarBorderWidth * 2;

var contentSize = device.width
    - avatarWidth
    - messageCellPaddingH * 2
    - messageCellBorderWith * 2
    - endLineBlankWidth
    - messageCellMargin * 6
    - avatarBorderWidth * 2;
var maxContentLength = contentSize / messageFontSize;

function fucCheckLength(strTemp) {
    var i, sum;
    sum = 0;
    for (i = 0; i < strTemp.length; i++) {
        if ((strTemp.charCodeAt(i) >= 0) && (strTemp.charCodeAt(i) <= 255))
            sum = sum + 1;
        else
            sum = sum + 2;
    }
    return sum;
}

export const blankSize = (content) => {
    var size = fucCheckLength(content);
    var temp = contentSize - size / 2 * messageFontSize + endLineBlankWidth;
    console.log('length:', size, 'length', content.length, 'temp:', temp);
    console.log('contentSIze:', contentSize);
    console.log('max:', maxContentLength);
    return (temp > endLineBlankWidth) ? temp : endLineBlankWidth
};