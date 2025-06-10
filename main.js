'use strict';

const SAME_NUMBER = 'Все цифры одинаковые!';
const REPEAT_NUMBER = 'Есть повторения цифр!';
const DIFFERENT_NUMBER = 'Все цифры разные!';
const EXCEPTION = 'Надо трехзначное число! Попробуй еще раз!';
const dataSet = ['     123      ', '  000456  ', '   -0621   ', '-10', '001', ' 2 ', '3.2'];

const func = (value) => {
    const int = parseInt(value.replace('-', ''));
    if(int > 99 && int < 1000) {
        let set = new Set();

        for(const item of String(value)) {
            set.add(item);
        }

        if(set.size === 1) {
            console.log(SAME_NUMBER);
            return
        }

        if(set.size === 2) {
            console.log(REPEAT_NUMBER);
            return;
        }

        console.log(DIFFERENT_NUMBER);
        return;
    }
    console.log(EXCEPTION);
}

for(const item of dataSet) {
    func(item);
}
