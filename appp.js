//1-misol
//Savol :  Berilgan massiv elementlari orasidan qatnashgan sonlar yigindishini toping 
// funksiya ypozing .[1, 2, "Salom", true, "xary"]
//Javob

/*
const array = [ 1, "salom", 2, "xary", 5];
const number = array.filter(Element => typeof Element === "number")
const sum = number.reduce( (totol, value) => totol +value, 0);
console.log(sum); 
*/


//2-misol
//Savol : Berilgan yozuvning so'zlarini  bosh hariflariga almashtiradigan funksiya yozing/
// lorem imsum.
//Javob
 
/*
function capitalizeWords(str) {
    let words = str.split(" ");

    let capitalizedWords = words.map(word => {
        if (word.length > 0) {
            return word[0].toLocaleUpperCase() + word.slice(1);
        } else {
            return word;
        }
    });

    return capitalizedWords.join(" ");
}

let soz = "lorem ipsum";
let natija = capitalizeWords(soz);

console.log(natija);

*/


//3-misol
//Savol : Ixtioriy berilgan yozuvni plindromlikka tekshiradigan funksiya yozing 
//plandrom -> to'g'ri  o'qilsa ham teskari oqilsa ham bir xil oqiladigan son
//Javob
