// function untuk niali random 1-50
function nialiRandom() {
  return Math.floor(Math.random() * 50) + 1;
}

// Array dengan 100 nilai random
let randomArray = [];
for (let i = 0; i < 100; i++) {
  randomArray.push(nialiRandom());
}

console.log("Array index 100:", randomArray);

// Array Ganjil Genap
let arrayGanjil = [];
let arrayGenap = [];
for (let i = 0; i < randomArray.length; i++) {
  if (randomArray[i] % 2 === 0) {
    arrayGenap.push(randomArray[i]);
  } else {
    arrayGanjil.push(randomArray[i]);
  }
}
console.log("Array Ganjil:", arrayGanjil);
console.log("Array Genap:", arrayGenap);

// Mencari MIN & MAX

// 1. Array Ganjil
let ganjilMin = arrayGanjil[0];
let ganjilMax = arrayGanjil[0];

for (let i = 1; i < arrayGanjil.length; i++) {
  if (arrayGanjil[i] < ganjilMin) {
    ganjilMin = arrayGanjil[i];
  }
  if (arrayGanjil[i] > ganjilMax) {
    ganjilMax = arrayGanjil[i];
  }
}

console.log("Nilai minimum Ganjil:", ganjilMin);
console.log("Nilai maksimum Ganjil:", ganjilMax);

// 2. Array Genap
let genapMin = arrayGenap[0];
let genapMax = arrayGenap[0];

for (let i = 1; i < arrayGenap.length; i++) {
  if (arrayGenap[i] < genapMin) {
    genapMin = arrayGenap[i];
  }
  if (arrayGenap[i] > genapMax) {
    genapMax = arrayGenap[i];
  }
}

console.log("Nilai minimum Genap:", genapMin);
console.log("Nilai maksimum Genap:", genapMax);

// Menghitung total dan rata-rata

// 1. Array Ganjil
let totalGanjil = 0;
for (let i = 0; i < arrayGanjil.length; i++) {
  totalGanjil += arrayGanjil[i];
}
let rataRataGanjil = totalGanjil / arrayGanjil.length;

console.log("Total Ganjil:", totalGanjil);
console.log("Rata-rata Ganjil:", rataRataGanjil);

// 2. Array Genap
let totalGenap = 0;
for (let i = 0; i < arrayGenap.length; i++) {
  totalGenap += arrayGenap[i];
}
let rataRataGenap = totalGenap / arrayGenap.length;

console.log("Total Genap:", totalGenap);
console.log("Rata-rata Genap:", rataRataGenap);

// Perbandingan niali MIN, MAX, Total, RataRata

// Membandingkan nilai minimum
let minSeluruh = ganjilMin < genapMin ? ganjilMin : genapMin;
console.log("Nilai minimum secara keseluruhan:", minSeluruh);

// Membandingkan nilai maksimum
let maxSeluruh = ganjilMax > genapMax ? ganjilMax : genapMax;
console.log("Nilai maksimum secara keseluruhan:", maxSeluruh);

// function untuk totalHitung
function totalHitung(ganjil, genap) {
  let total = 0;
  for (let i = 0; i < ganjil.length; i++) {
    total += ganjil[i];
  }
  for (let i = 0; i < genap.length; i++) {
    total += genap[i];
  }
  return total;
}

// Membandingkan total
let totalSeluruh = totalHitung(arrayGanjil, arrayGenap);
console.log("Total secara keseluruhan:", totalSeluruh);

// Membandingkan rata-rata
let jumlahSeluruh = arrayGanjil.length + arrayGenap.length;
let rataRataSeluruh = totalSeluruh / jumlahSeluruh;
console.log("Rata-rata secara keseluruhan:", rataRataSeluruh);
