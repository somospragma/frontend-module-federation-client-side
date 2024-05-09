import { MfNotification } from './mf-notifier.interface';

export class RoutingNotifier {
  static notify(mfNotification: MfNotification) {
    document.dispatchEvent(
      new CustomEvent('notifyHost', {
        detail: mfNotification,
      })
    );
  }
}
