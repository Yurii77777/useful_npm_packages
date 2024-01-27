const randomize = require('randomatic');

// randomize(pattern, length, options);

// a: Lowercase alpha characters (abcdefghijklmnopqrstuvwxyz')
// A: Uppercase alpha characters (ABCDEFGHIJKLMNOPQRSTUVWXYZ')
// 0: Numeric characters (0123456789')
// !: Special characters (~!@#$%^&()_+-={}[];\',.)
// *: All characters (all of the above combined)
// ?: Custom characters (pass a string of custom characters to the options)

// Генерація унікальних інвойсів для оплати
// for (let i = 0; i < 10; i++) {
//   const invoice = randomize('aA0', 34);
//   console.log('[invoice]', invoice);
// }

// Генеруємо цифрови код підтвердження облікового запису
for (let i = 0; i < 10; i++) {
  const code = randomize('0', 6);
  console.log('[code]', code);
}
