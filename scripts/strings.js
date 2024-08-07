function checkSpam(str) {
    let lowerStr = str.toLowerCase();
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}
  
alert( checkSpam('buy ViAgRA now') );
alert( checkSpam('free xxxxx') );
alert( checkSpam("innocent rabbit") );

function truncate(str, maxlength) {
    return (str.length > maxlength) ?
    str.slice(0, maxlength - 1) + '…' : str;
}

truncate("What I'd like to tell on this topic is:", 20) == "What I'd like to te…"
truncate("Hi everyone!", 20) == "Hi everyone!"

function extractCurrencyValue(str) {
    return +str.slice(1);
}

alert( extractCurrencyValue('$120') === 120 );