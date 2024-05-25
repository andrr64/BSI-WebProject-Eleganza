import bcryptjs from 'bcryptjs';
import { UserAccount } from '../models/user.account.model.js';
import { UserData } from '../models/user.data.model.js';
import { serverForbidden, serverInternalError, serverNotFound, serverOk } from './response.controller.js';
import { MESSAGE, serverLog } from './server.log.controller.js';
import { serverProcess } from './server.process.controller.js';

/**
 * Mengambil data pengguna berdasarkan ID.
 * @param {Object} req - Objek request dari client.
 * @param {Object} res - Objek response yang akan dikirimkan kembali ke client.
 */
export const getUserData = async (req, res) => {
    await serverProcess(res, async () => {
        const data = await UserData.findById(req.params.id);
        if (!data) return serverNotFound(res);
        serverOk(res, data);
    }, 'get user data');
};

/**
 * Mengupdate data pengguna berdasarkan ID pengguna.
 * @param {Object} req - Objek request dari client.
 * @param {Object} res - Objek response yang akan dikirimkan kembali ke client.
 */
export const updateUserData = async (req, res) => {
    await serverProcess(res, async () => {
        const { cart, address, password } = req.body;
        const { id } = req.params;

        const validUser = await UserAccount.findById(id);
        if (!validUser) return serverNotFound(res);

        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if (!validPassword) return serverForbidden(res);

        const userData = await UserData.findOneAndUpdate(
            { _id: validUser.data_ref },
            { cart, address },
            { new: true }
        );
        
        if (!userData) return serverInternalError(res, 'Something went wrong');

        serverOk(res, userData);
    }, 'update user data');
};
