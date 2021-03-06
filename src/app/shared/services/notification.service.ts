import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Injectable({
    providedIn: 'root'
})
export class NotificationService {

    constructor(private toastr: ToastrService) { }

    showSuccess(title, message): void {
        this.toastr.success(message, title);
    }
    showError(title, message): void {
        this.toastr.error(message, title);
    }

    showInfo(title, message): void {
        this.toastr.info(message, title);
    }

    showWarning(title, message): void {
        this.toastr.warning(message, title);
    }
}
