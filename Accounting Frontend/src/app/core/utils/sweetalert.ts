class Csweetalert {

  Error(message): void {
    Swal.fire({
      icon: 'error',
      title: 'Hata!',
      text: message
    });
  }

  Logout(confirm): void {
    Swal.fire({
      title: 'Çıkış Yapmak İstediğine Emin misin?',
      icon: 'question',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Çıkış Yap',
      denyButtonText: 'İptal'
    }).then((result) => {
      if (result.isConfirmed) {
        confirm();
      }
    });
  }

  TimerSwal(operation: string): void {
    Swal.fire({
      title: operation,
      backdrop: 'rgba(0,0,0,0.8)',
      timer: 1500,
      timerProgressBar: true,
      showCancelButton: false,
      showCloseButton: false,
      allowOutsideClick: false,
      showConfirmButton: false,
      // tslint:disable-next-line:typedef
      onOpen(popup: HTMLElement) {
        Swal.showLoading();
      }
    });
  }
}

const sAlert = new Csweetalert();
export default sAlert;
