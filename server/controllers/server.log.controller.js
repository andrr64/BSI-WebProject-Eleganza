/*
    File: logger.js
    Deskripsi: Modul untuk mengelola pencatatan log pada server
*/

/*
    Konstanta: MESSAGE
    Deskripsi: Berisi pesan-pesan yang digunakan dalam pencatatan log
*/
export const MESSAGE = {
    OK                  : 'OK        ',
    WARNING             : 'WARNING   ',
    FAILURE             : 'FAILURE   ',
    ACCEPT              : 'ACCEPT    ',
    SENDING             : 'SENDING   ',
    STARTOF_REQUEST     : 'STARTOFREQ',
    ENDOF_REQUEST       : 'ENDOFREQ  ',
    VALIDATING          : 'VALIDATING'
}

/*
    Fungsi: serverLog
    Deskripsi: Mencetak pesan log ke konsol server dengan tingkat kepentingan tertentu
    Parameter: 
        - level: string, tingkat kepentingan pesan log (dapat berupa pesan dari konstanta MESSAGE atau pesan khusus)
        - message: string (opsional), pesan yang akan dicetak dalam log
    Return: Tidak ada
*/
export const serverLog = (level, message) => {
    const time = new Date();
    console.log(`${time.toISOString()} ${level}\t: ${message ? message : level}`);
}
