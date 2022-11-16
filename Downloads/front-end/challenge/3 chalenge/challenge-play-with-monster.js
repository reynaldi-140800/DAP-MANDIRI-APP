let nama ='aldi'
let peran = 'superhero'

function bermain(nama,peran){
    if (nama =='' && peran == ''){
        return 'nama dan peran harus diisi'
    }else if (peran == ''){
        return 'peran harus diisi'
    }else if (peran == 'superhero'){
        return 'Selamat Datang Superhero Saitama, Kalahkan Semua Monster Di Muka Bumi'
    }else if (peran == 'monster'){
        return 'Selamat Datang Monster Saitama, Hancurkan Semua Superhero Yang Ada'
    }else {
        return 'Selamat Datang Saitama, Pilih Peranmu Untuk Melanjutkan Game Ini'
    }
}

console.log(bermain(nama,peran))
