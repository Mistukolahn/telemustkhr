function pushAlert(title, message, type, timer) {
    swal({
        title: title,
        text: message,
        type: type,
        timer: timer
    });
}

window.pushAlert = pushAlert;