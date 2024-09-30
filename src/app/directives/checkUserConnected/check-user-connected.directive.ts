import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { UserService } from '../../services/user/user.service';

@Directive({
  selector: '[appCheckUser]',
  standalone: true
})
export class CheckUserConnectedDirective {

  constructor(private viewContainer: ViewContainerRef, private templateRef: TemplateRef<any>, private userService: UserService) { }

  @Input() set appCheckUser(params: { userId: number, negate?: boolean }) {
    const { userId, negate = false } = params;
    this.updateView(userId, negate);
  }

  private updateView(userId: number , negate: boolean) {
    console.log("🚀 ~ CheckUserConnectedDirective ~ updateView ~ negate:", negate)

    if (userId === this.userService.getUserConnected().id && !negate || userId !== this.userService.getUserConnected().id && negate) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }

}
