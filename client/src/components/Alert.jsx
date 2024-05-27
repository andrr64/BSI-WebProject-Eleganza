import Swal from "sweetalert2"

export const ALERT = {
    FAIL: 'error',
    WARNING: 'warning',
    SUCCESS: 'success'
} 

export function showAlert(alertType, title, message = '') {
    Swal.fire({
        icon: alertType, 
        title: title,
        message: message,
    })
}