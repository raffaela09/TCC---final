import { Component } from '@angular/core';
import { ETheme, Heart } from '../enums/ETheme.enums';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  constructor(){}
  public icon: string = Heart.ICON_HEART;
  public toggle(){
    const theme = document.body.classList.toggle('icon');

    if(theme) {
      return (this.icon = Heart.ICON_HEART);
    }
    return (this.icon = Heart.ICON_HEARTs)
  }

}
