import { MfNotification } from './mf-notifier.interface';

export class MfNotifier {
  static notify(mfNotification: MfNotification) {
    document.dispatchEvent(
      new CustomEvent('notifyHost', {
        detail: mfNotification,
      })
    );
  }
}
