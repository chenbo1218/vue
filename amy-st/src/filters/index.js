export function winOrLoseFilter(value) {
    if (!value) {
        return '<a class="el-button el-button--success el-button--mini is-round"><!----><!----><span>赢</span></a>';
    } else {
        return '<a class="el-button el-button--danger el-button--mini is-round"><!----><!----><span>输</span></a>';
    }
}

export function onlineStatusFilter(value) {
    if (value) {
        return '<a class="el-button el-button--success el-button--mini is-round"><!----><!----><span>在线</span></a>';
    } else {
        return '<a class="el-button el-button--info el-button--mini is-round"><!----><!----><span>离线</span></a>';
    }
}

export function payStatus(value) {
    if (value === 0) {
        return '<a class="el-button el-button--info el-button--mini is-round"><!----><!----><span>未支付</span></a>';
    } else if (value === 1) {
        return '<a class="el-button el-button--success el-button--mini is-round"><!----><!----><span>已支付</span></a>';
    }
}

export function moneyFilter(number, optype = 0) {
    if (optype && optype === 1) {
        number = 0 - number;
    }
    let flag = number > 0;
    number = number || 0;
    let places = 2; //! isNaN((places = Math.abs(places))) ? places : 2
    let symbol = '¥'; // symbol !== undefined ? symbol : ''
    let thousand = ','; // thousand || ','
    let decimal = '.'; // decimal || '.'
    var negative = number < 0 ? '-' : '';
    var i = parseInt((number = Math.abs(+number || 0).toFixed(places)), 10) + '';
    var j = (j = i.length) > 3 ? j % 3 : 0;

    let result =
        symbol +
        negative +
        (j ? i.substr(0, j) + thousand : '') +
        i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + thousand) +
        (places
            ? decimal +
            Math.abs(number - i)
                .toFixed(places)
                .slice(2)
            : '');

    return !flag ? '<span style="color:red">' + result + '</span>' : result;
}

export function momontFilter(val, type) {
    if (type === 'unix') {
        return moment.unix(val).fromNow();
    } else if (type === 'unixEx') {
        return moment.unix(val).format('YYYY-MM-DD HH:mm:ss');
    } else {
        return moment(val).fromNow();
    }

}

export function payType(val) {
    switch (val) {
        case 1:
            return '微信';
        case 2:
            return '支付宝';
        case 3:
            return '银行卡';
    }
}
