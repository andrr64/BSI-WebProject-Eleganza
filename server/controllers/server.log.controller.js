export const MESSAGE = {
    OK                  : 'OK        ',
    WARNING             : 'WARNING   ',
    FAILURE             : 'FAILURE   ',
    ACCEPT              : 'ACCEPT    ',
    SENDING             : 'SENDING   ',
    STARTOF_REQUEST     : 'STARTOFREQ',
    ENDOF_REQUEST       : 'ENDOFREQ  '
}

export const serverLog = (level, message) => {
    console.log(`${level}\t: ${message ? message : level}`);
}