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

export async function showQuestion(title, text, confirmButtonText){
    return Swal.fire({
        title,
        text,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText,
    }).then((result) => {
        return result.isConfirmed;
    });
}