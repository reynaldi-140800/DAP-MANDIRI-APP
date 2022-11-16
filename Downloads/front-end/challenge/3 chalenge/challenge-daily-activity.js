function kegiatan (jam){
    if (jam > 24){
        return 'hanya ada 24 jam sehari'

    } else if (jam <=0){
        return 'tidak boleh negatif'
    }
    else{
        if (jam >= 4 && jam <=5){
            return 'bangun pagi'
        }else if (jam >= 6 && jam <= 7){
            return 'Mandi dan Sarapan'
        }else if (jam >=8 && jam <=11){
            return 'berangkat sekolah'
        }else if (jam ==  12){
            return 'pulang sekolah'
        }else{
            return 'waktu bebas istirahat'
        }
    }
}
console.log(kegiatan(10))







