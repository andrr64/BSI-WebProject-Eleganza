export function formatRupiah(amount: number) {
    // Konversi jumlah ke string dengan dua desimal
    let amountStr = amount.toFixed(2);
    
    // Pisahkan bagian desimal jika ada
    let parts = amountStr.split('.');
    let integerPart = parts[0];
    let decimalPart = parts.length > 1 ? '.' + parts[1] : '';

    // Tambahkan koma sebagai pemisah ribuan
    let rupiahFormatted = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    // Gabungkan bagian desimal kembali
    return 'IDR ' + rupiahFormatted + decimalPart;
}