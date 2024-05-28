export const isValidEmail = (email) => {
    // Regex untuk memeriksa format alamat email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
    /*
    ^       : Mulai dari awal string.
    [^\s@]+ : Setidaknya satu karakter yang bukan spasi atau '@' untuk nama pengguna.
    @       : Tanda '@'.
    [^\s@]+ : Setidaknya satu karakter yang bukan spasi atau '@' untuk domain.
    \.      : Tanda titik.
    [^\s@]+ : Setidaknya satu karakter yang bukan spasi atau '@' untuk bagian setelah titik (misalnya, .com, .org, dll.).
    $       : Akhir dari string.
    */
}
  