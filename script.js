// const favorite = (prompt('My favourite fruit?'));

// if (favorite === apple) {
//   console.log('apple is my favorite favourite');
// } else if (favorite === 327) {
//   console.log('pineapple is also my favorite number');
// } else {
//   console.log(
//     `Bu meva mening yoqtirgan mevam emas. Kiritgan mevangiz: ${favorite}
//   `);
// }

// const uzoqYolgaAvtomobileKerak = true;
// const avtomobilegaYonolgiKerak = false;
// // console.log (uzoqYolgaAvtomobileKerak && avtomobilegaYonolgiKerak);
// // console.log (uzoqYolgaAvtomobileKerak || avtomobilegaYonolgiKerak);
// const

// let dolphinsScore1 = 96;

// let dolphinsScore2 = 108;

// let dolphinsScore3 = 88;

// let koalasScore1 = 88;

// let koalasScore2 = 91;

// let koalasScore3 = 110;

// const dolphins = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;

// const koalas = (koalasScore1 + koalasScore2 + koalasScore3) / 3;

// // console.log(dolphins)

// // console.log(koalas)

// // console.log (Math.floor(dolphins))

// // console.log (Math.floor(koalas))

// // if(koalas>dolphins){
// //     console.log(`koalas win`)
// // }

// // else {
// //     console.log(`dolphins win`)
// // }

// // else if (dolphins===koalas) {
// //     console.log(`draw`);
// // }

// const day = "monday";

// switch (day) {
//   case "monday": // day === 'monday'
//     console.log("Vazifalarni tekshirish");
//     console.log("Katta uyga borib kelish");
//     break;
//   case "tuesday":
//     console.log("Wifi ornatish");
//     break;
//   case "wednestday":
//     break;
//   case "thursday":
//     console.log("Proyektni tugatish");
//      break;
//   case "friday":
//     console.log("Jumaga borish");
//     break;
//   case "sturday":
//     console.log("Dars otish");
//     console.log("Uylarni remont qilish");
//     break;
//   case "sunday":
//     console.log("Uy ishlari");
//   default:
//     console.log("You entered wrong day!");
// }

// if ( day=='monday' ){
//   console.log('Vazifalarni tekshirish');
// }
// else if(day=='tuesday'){
//   console.log('Wifi ornatish');
// }
// else if( day=='wednestday'){
//    console.log('Katta uyga borib kelish');
// }
// else if(day=='thursday'){
//   console.log('Proyektni tugatish');
// }
// else if(day=='friday'){
//   console.log('Jumaga borish');
// }
// else if(day=='sturday'){
//   console.log('Dars otish');
//     console.log('Uylarni remont qilish');
// }
// else if(day=='sunday'){
//   console.log('Uy ishlari');
// }
// else
// console.log('notogri kunni kiritdingiz');

const dokon = "Telefon dokoni";

switch (dokon) {
  case "Samsung S1":
    console.log("Hajmi kichikroq va arzon");
    console.log("Narxi 70$");
    break;
  case "Samsung S2":
    console.log("Samsung S1ga qaraganda yaxshiroq");
    console.log("ammo biroz qimmat");
    console.log("Narxi 90$");
    break;
  case "Samsung S3":
    console.log("Kamera tiniq va yaxshi ishlaydi");
    console.log("Narxi 110$");
    break;
  case "Samsung S22 Ultra":
    console.log("Samsung telefonlari orasida eng yaxshisi");
    console.log("Kamerasi 108mp va juda tiniq");
    console.log("Suvdaham ishlay oladi");
    console.log("Narxi 1400$");
    break;
  case "Iphone X":
    console.log("Samsung ga qaraganda farq qiladi");
    console.log("Narxi qimmat ammo yaxshi ishlaydi");
    console.log("Narxi 200$");
    break;
  case "Iphone 14 Pro Max":
    console.log("Iphone telefonlari orasida eng yaxshisi");
    console.log("Kamerasi 108mp va juda tiniq");
    console.log("Suvdaham ishlay oladi");
    console.log("Narxi 1500$");
    break;
  case "Redmi S10":
    console.log("Samsung va Iphonedan juda arzon va yaxshi ishlaydi");
    console.log("Narxi 80$");
    break;
  case "Redmi 10 Pro":
    console.log("S10 ga qaraganda yaxshiroq va narxi qimmatroq");
    console.log("Narxi 120$");
    break;
}

if (dokon === "Samsumg S1") {
  console.log("Hajmi kichikroq va arzon");
  console.log("Narxi 70$");
} else if (dokon === "Samsung S2") {
  console.log("Samsung S1ga qaraganda yaxshiroq");
  console.log("ammo biroz qimmat");
  console.log("Narxi 90$");
} else if (dokon === "Samsung S3") {
  console.log("Kamera tiniq va yaxshi ishlaydi");
  console.log("Narxi 110$");
} else if (dokon === "Samsung S22 Ultra") {
  console.log("Samsung telefonlari orasida eng yaxshisi");
  console.log("Kamerasi 108mp va juda tiniq");
  console.log("Suvdaham ishlay oladi");
  console.log("Narxi 1400$");
} else if (dokon === "Iphone X") {
  console.log("Samsung ga qaraganda farq qiladi");
  console.log("Narxi qimmat ammo yaxshi ishlaydi");
  console.log("Narxi 200$");
} else if (dokon === "Iphone 14 Pro Max") {
  console.log("Iphone telefonlari orasida eng yaxshisi");
  console.log("Kamerasi 108mp va juda tiniq");
  console.log("Suvdaham ishlay oladi");
  console.log("Narxi 1500$");
} else if (dokon === "Redmi S10") {
  console.log("Samsung va Iphonedan juda arzon va yaxshi ishlaydi");
  console.log("Narxi 80$");
} else if (dokon === "Redmi 10 Pro") {
  console.log("S10 ga qaraganda yaxshiroq va narxi qimmatroq");
  console.log("Narxi 120$");
} else {
  console.log(`Sizda telefon xarid qilish uchun mablag' yetarli emas.`);
}
