import { serverInternalError } from "./response.controller.js";
import { MESSAGE, serverLog } from "./server.log.controller.js";

/**
 * Wrapper untuk menangani proses server dengan logging dan error handling.
 * @param {Object} res - Objek response untuk dikirim kembali ke client.
 * @param {Function} process - Fungsi async yang menjalankan logika utama.
 * @param {string} requestDescription - Deskripsi dari request untuk logging.
 */
export const serverProcess = async (res, process, requestDescription = '') => {
    try {
        serverLog(MESSAGE.STARTOF_REQUEST, `New request: ${requestDescription}`);
        await process();
    } catch (error) {
        serverLog(MESSAGE.FAILURE, error.message);
        serverInternalError(res, error.message);
    } finally {
        serverLog(MESSAGE.ENDOF_REQUEST);
    }
}
