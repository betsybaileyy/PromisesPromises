function addAndSave(a, b, callback) {
    let sum = a + b;

    // .... save ths sum

    callback(sum);
}

function klajsdlfkj(lkjhsdfkjhsdkjfhkjsdhfkjsdhfkjhsd) {
    return () => {
        alert('Hello ' + lkjhsdfkjhsdkjfhkjsdhfkjsdhfkjhsd + '!');
    };
}

let hkjhfksdhfkjsh = klajsdlfkj('World');
hkjhfksdhfkjsh();