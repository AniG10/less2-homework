// 1.ციკლის საშუალებით გამოიტანეთ რიცხვები 5დან - 100მდე

for (let i = 5; i <= 100; i++) {
  console.log(i);
}

// 2.მოცემულია მასივი:
// let array1= [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];
// ციკლის საშუალებით გამოიტანეთ მხოლოდ ის რიცხვები რომლებიც მეტია 0 ზე და ნაკლებია 10ზე:

let array1 = [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];

for (let i = 0; i < array1.length; i++) {
  if (array1[i] > 0 && array1[i] < 10) {
    console.log(array1[i]);
  }
}

// 3.მოცემულია მასივი:
// let array2= [1, 2, 3, 4, 5] ციკლის საშუალებით გამოთვალეთ რიცხვების ჯამი:

let array2 = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < array2.length; i++) {
  sum += array2[i];
}
console.log(sum);

// 4.მოცემულია მასივი
// let array3= [1, 2, 3, 4, 5];
// ციკლის საშუალებით გამოთვალეთ საშუალო არითმტიკული (ჯამი გავყოთ ელემნტების რაოდენობაზე):

let array3 = [1, 2, 3, 4, 5];
let sum2 = 0;

for (let i = 0; i < array3.length; i++) {
  sum2 += array3[i];
}
let average = sum2 / array3.length;
console.log(average);

// 5.მოცემულია ობიექტი:
// let user = {
//   firstname: "giorgi",
//   lastname: "smith",
//   age: 25,
//   studentstatus: "active"
// };
// ამოიღეთ user ცვლადის სტუდენტის სტატუსი:

let user = {
  firstname: "giorgi",
  lastname: "smith",
  age: 25,
  studentstatus: "active",
};

console.log(user.studentstatus);

// 6.მოცემულია ობიექტი:
// let user2 = {
//     name: 'anna',
//     age:  20,
//     studentstatus: 'active'
// დაწერეთ შემდეგი პირობები:
// თუ უსერის ასაკი ნაკლებია 18ზე და სტუდენტის სტატუსი აქტიურია დაიბეჭდოს ტექსტი:  hello user;
// თუ უსერის სახელი უდრის ლევანს მაშინ დაიბეჭდოს ტექსტი: hello levani;
// თუ უსერის სტუდენტის სტატუსი აქტიურია ან უსერის ასაკი ნაკლებია 25ზე დაიბეჭდოს ტექსტი: is active;
// ყველა დანარჩენ შემთხვევაში დაილოგოს ტექსტი:error
// ეს ამოცანა უდნა შეასრულოთ ორივე if- ის ჩანაწერით; ( სტადარტული და ახალი ჩანაწერებით):

let user2 = {
  name: "anna",
  age: 20,
  studentstatus: "active",
};

// სტანდარტული if

if (user2.age < 18 && user2.studentstatus === "active") {
  console.log("hello user");
} else if (user2.name === "levani") {
  console.log("hello levani");
} else if (user2.studentstatus === "active" || user2.age < 25) {
  console.log("is active");
} else {
  console.log("error");
}

// ახალი ჩანაწერი

user2.age < 18 && user2.studentstatus === "active"
  ? console.log("hello user")
  : user2.name === "levani"
  ? console.log("hello levani")
  : user2.studentstatus === "active" || user2.age < 25
  ? console.log("is active")
  : console.log("error");

// 7. მოცემულია მასივი:
// let array6 = [ 2, 3, 5, 1 0,25,24,11, 100,6,7, 10 ]
// ამოიღეთ მხოლოდ ლუწი რიცხვები:

let array6 = [2, 3, 5, 10, 25, 24, 11, 100, 6, 7, 10];

for (let i = 0; i < array6.length; i++) {
  if (array6[i] % 2 === 0) {
    console.log(array6[i]);
  }
}

// 8. მოცემულია მასივი
// let users = [
//     {username: 'giorgi', status: false},
//     {username: 'levani', status: false},
//     {username: 'anna', status: true}
// ]
// კონსოლში გამოიტანეთ მარტო ის ობიექტი, რომლის status property-ის მნიშვნელობა არის true:

let users = [
  { username: "giorgi", status: false },
  { username: "levani", status: false },
  { username: "anna", status: true },
];

for (let i = 0; i < users.length; i++) {
  if (users[i].status === true) {
    console.log(users[i]);
  }
}

// 9.Მოცემული მასივიდან ამოიღეთ მხოლოდ ციფრები, რომლებიც 5-ის ჯერადია:
// Let array7 = [32, 14, null, ‘40’, 50]:

let array7 = [32, 14, null, "40", 50];

for (let i = 0; i < array7.length; i++) {
  if (typeof array7[i] === "number" && array7[i] % 5 === 0) {
    console.log(array7[i]);
  }
}

// 10.Მოცემული მასივიდან კონსოლში გამოიტანეთ მხოლოდ 30-ზე მეტი რიცხვები:
// let array8 = [ [2, 3, 5, 11], [1, 35, 11], [12, 36, 24] ]:

let array8 = [
  [2, 3, 5, 11],
  [1, 35, 11],
  [12, 36, 24],
];

for (let i = 0; i < array8.length; i++) {
  for (let j = 0; j < array8[i].length; j++) {
    if (array8[i][j] > 30) {
      console.log(array8[i][j]);
    }
  }
}
