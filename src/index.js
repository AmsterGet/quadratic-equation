module.exports = function solveEquation(equation) {
    const symbolsMas = equation.split(' ');
    const rezMas = [];
    const a = +symbolsMas[0];
    const b = +(symbolsMas[3]+symbolsMas[4]);
    const c = +(symbolsMas[7]+symbolsMas[8]);
    const d = b*b-4*a*c;
    const x1 = Math.round((-b+Math.sqrt(d))/(2*a));
    const x2 = Math.round((-b-Math.sqrt(d))/(2*a));
    rezMas.push(x1);
    x1>x2 ? rezMas.unshift(x2): rezMas.push(x2);
    return rezMas;
};
