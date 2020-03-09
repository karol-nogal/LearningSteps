export const calculator = (num1, operator, num2) => {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                return 'Nie mozna dzielic przez zero'
            }
            return num1 / num2;
        default:
            return 'Nie znany operator'
    }
}

export const uppercaseFirstLetter = (string) => {
    if (typeof string === 'string') {
        const trimmedString = string.trim()
        const firstLetterUpperCase = trimmedString.charAt(0).toUpperCase();
        return firstLetterUpperCase + trimmedString.slice(1);
    } else {
        return 'to nie jest string'
    }
}

export const createInitials = (obj) => {
    if (obj.name && obj.surname) {
        return obj.name.charAt(0).toUpperCase() + obj.surname.charAt(0).toUpperCase();
    }

    if (obj.name) {
        return obj.name.charAt(0).toUpperCase();
    }

    if (obj.surname) {
        return obj.surname.charAt(0).toUpperCase();
    }

    return 'XX';
}

export const negativeSum = (array) => array.filter(el => el < 0).reduce((prev, curr) => prev + curr, 0);

export const evenSum = (array) => array.filter((el, index) => index % 2 === 0).reduce((prev, curr) => prev + curr, 0);