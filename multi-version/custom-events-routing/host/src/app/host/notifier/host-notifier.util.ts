import { HostNotification } from './host-notifier.interface';

export class RoutingNotifier {
  static notify(hostNotification: HostNotification) {
    document.dispatchEvent(
      new CustomEvent('notifyMf', {
        detail: hostNotification,
      })
    );
  }
}
