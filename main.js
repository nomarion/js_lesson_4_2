'use strict';

const SAME_NUMBER_ERROR_MESSAGE = 'Все цифры одинаковые!';
const REPEAT_NUMBER_ERROR_MESSAGE = 'Есть повторения цифр!';
const DIFFERENT_NUMBER_MESSAGE = 'Все цифры разные!';
const NOT_THREE_DIGIT_NUMBER_ERROR_MESSAGE = 'Надо трехзначное число! Попробуй еще раз!';
const EXIT_MESSAGE = 'До новых встреч!'
const INPUT_NUMBER_MESSAGE = 'Введите трехзначное число:'

const threeDigitNumberCheck = () => {
    let userInputNumber = prompt(INPUT_NUMBER_MESSAGE);
    if(userInputNumber !== null) {
        userInputNumber = Number(userInputNumber.trim().replace('-', ''));
        if(Number.isInteger(userInputNumber)) {
            if(userInputNumber > 99 && userInputNumber < 1000) {
                const set = new Set();

                for(const item of String(userInputNumber)) {
                    set.add(item);
                }

                if(set.size === 1) {
                    alert(SAME_NUMBER_ERROR_MESSAGE);
                    return
                }

                if(set.size === 2) {
                    alert(REPEAT_NUMBER_ERROR_MESSAGE);
                    return;
                }

                alert(DIFFERENT_NUMBER_MESSAGE);
                return;
            }
            alert(NOT_THREE_DIGIT_NUMBER_ERROR_MESSAGE);
            return threeDigitNumberCheck();

        }
        alert(NOT_THREE_DIGIT_NUMBER_ERROR_MESSAGE);
        return threeDigitNumberCheck();
    }
    alert(EXIT_MESSAGE);
}

threeDigitNumberCheck();
