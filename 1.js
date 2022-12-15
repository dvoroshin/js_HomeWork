let celsius = parseFloat(prompt(`Введите значение температуры в градусах Цельсия:`));
let fareengate = (9 / 5) * celsius + 32;
alert(`Значение температуры в градусах Фаренгейта: ${fareengate.toFixed(2)}`);