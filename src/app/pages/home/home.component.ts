import { Component, OnInit, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private vcr: ViewContainerRef, private cfr: ComponentFactoryResolver) { }

  async loadcards() {
    this.vcr.clear();
    const { CardOneComponent } = await import('../../components/cards-one/card-one/card-one.component');
    this.vcr.createComponent(
      this.cfr.resolveComponentFactory(CardOneComponent)
    )
  }

  async loadcards2() {
    this.vcr.clear();
    const { CardTwoComponent } = await import('../../components/cards-two/card-two/card-two.component');
    this.vcr.createComponent(
      this.cfr.resolveComponentFactory(CardTwoComponent)
    )
  }

  async loadcards3() {
    this.vcr.clear();
    const { CardThreeComponent } = await import('../../components/cards-three/card-three/card-three.component');
    this.vcr.createComponent(
      this.cfr.resolveComponentFactory(CardThreeComponent)
    )
  }

  async blogcards(){
    this.vcr.clear();
    const { BlogCardsComponent } = await import('../../components/blog-cards/blog-cards.component');
    this.vcr.createComponent(
      this.cfr.resolveComponentFactory(BlogCardsComponent)
    )
  }

  ngOnInit(): void {
    this.loadcards();
    this.loadcards2();
    this.loadcards3();
    this.blogcards();
  }

}
