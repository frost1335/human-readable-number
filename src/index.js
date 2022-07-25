module.exports = function toReadable(number) {
    let num = String(number).split("");
    let res = [];

    let hun = {
        1: "one hundred",
        2: "two hundred",
        3: "three hundred",
        4: "four hundred",
        5: "five hundred",
        6: "six hundred",
        7: "seven hundred",
        8: "eight hundred",
        9: "nine hundred",
    };

    let ten = {
        2: "twenty",
        3: "thirty",
        4: "forty",
        5: "fifty",
        6: "sixty",
        7: "seventy",
        8: "eighty",
        9: "ninety",
    };

    let teen = {
              1: "eleven",
        2: "twelve",
        3: "thirteen",
        4: "fourteen",
        5: "fifteen",
        6: "sixteen",
        7: "seventeen",
        8: "eighteen",0: "ten",
  
        9: "nineteen",
    };

    let lett = {
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
    };


    if(number === 0){
        res.unshift('zero')
    }
    else if (Number(num[num.length - 2]) === 1) {
        res.unshift(teen[!!num[num.length - 1] && num[num.length - 1]]);
        if (!!num[num.length - 3]) {
            res.unshift(hun[num[num.length - 3]]);
        }
    } else {
        if (num[num.length - 1]) {
            res.unshift(lett[num[num.length - 1]]);
        }
        if (Number(num[num.length - 2]) !== 0 && !!num[num.length - 2]) {
            res.unshift(ten[num[num.length - 2]]);
        }
        if (!!num[num.length - 3]) {
            res.unshift(hun[num[num.length - 3]]);
        }
    }

    ret = res.join(" ");

    return ret.replace(/\s$/gm, "");
};
