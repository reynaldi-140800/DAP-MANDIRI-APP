let tugas = 85
let uts = 90
let uas = 100

function buAgya (nilai){
    if (nilai >=80){
        return 'A'
    }else if (nilai >=70){
        return 'B'
    }else if (nilai >=55){
        return 'C'
    }else if (nilai >=40){
        return 'D'
    }else {
        return 'E'
    }
}

let nilai = ((1/4)*tugas +  (30/100)*uts + (45/100)*uas)

console.log(buAgya(nilai))


