import { toast } from 'react-toastify';

const DURATION = 2500;

export function successToast(message: string) {
    toast.success(message, {
        position: toast.POSITION.BOTTOM_RIGHT,
        theme: 'dark',
        autoClose: DURATION,
        type: toast.TYPE.SUCCESS
    });
}

export function errorToast(message: string) {
    toast.success(message, {
        position: toast.POSITION.BOTTOM_RIGHT,
        theme: 'dark',
        autoClose: DURATION,
        type: toast.TYPE.ERROR
    });
}

export function inforToast(message: string) {
    toast.success(message, {
        position: toast.POSITION.BOTTOM_RIGHT,
        theme: 'dark',
        autoClose: DURATION,
        type: toast.TYPE.INFO
    });
}

export function warningToast(message: string) {
    toast.success(message, {
        position: toast.POSITION.BOTTOM_RIGHT,
        theme: 'dark',
        autoClose: DURATION,
        type: toast.TYPE.WARNING
    });
}
