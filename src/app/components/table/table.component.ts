import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component'

@Component({
  selector: 'ds-table',
  imports: [CardComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  
  cards:any[]=[
    {
      id: 1,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAA426AJJ4OnyrkKwqXP8Qeg4JXq1AvxD4cA&s",
      ocult: true
    },{
      id: 2,
      image: "https://i.redd.it/o0gas3wyos8a1.jpg",
      ocult: true
    },{
      id: 3,
      image: "https://tm.ibxk.com.br///2022/03/04/04100819438084.jpg?ims=1200x900",
      ocult: true
    },{
      id: 4,
      image: "https://s2-g1.glbimg.com/jVfkaZrxj3jIKs9ajnhXWV3YXxE=/0x0:1199x674/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/m/f/e4FakpTfKdUy7PcIcpww/tiringa1-00837436-0-t.webp",
      ocult: true
    },{
      id: 5,
      image: "https://s2-g1.glbimg.com/MVIpOVDJgHL5JQkPIkh6NbAtkzw=/0x0:620x794/984x0/smart/filters:strip_icc()/s.glbimg.com/jo/g1/f/original/2012/03/06/caters_monkey_snapper_03.jpg",
      ocult: true
    },{
      id: 6,
      image: "https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2023/11/deadpool-3-ryan-reynolds.jpg?w=1200&h=900&crop=1",
      ocult: true
    },{
      id: 1,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAA426AJJ4OnyrkKwqXP8Qeg4JXq1AvxD4cA&s",
      ocult: true
    },{
      id: 2,
      image: "https://i.redd.it/o0gas3wyos8a1.jpg",
      ocult: true
    },{
      id: 3,
      image: "https://tm.ibxk.com.br///2022/03/04/04100819438084.jpg?ims=1200x900",
      ocult: true
    },{
      id: 4,
      image: "https://s2-g1.glbimg.com/jVfkaZrxj3jIKs9ajnhXWV3YXxE=/0x0:1199x674/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/m/f/e4FakpTfKdUy7PcIcpww/tiringa1-00837436-0-t.webp",
      ocult: true
    },{
      id: 5,
      image: "https://s2-g1.glbimg.com/MVIpOVDJgHL5JQkPIkh6NbAtkzw=/0x0:620x794/984x0/smart/filters:strip_icc()/s.glbimg.com/jo/g1/f/original/2012/03/06/caters_monkey_snapper_03.jpg",
      ocult: true
    },{
      id: 6,
      image: "https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2023/11/deadpool-3-ryan-reynolds.jpg?w=1200&h=900&crop=1",
      ocult: true
    }
  ];

  virada:any={
    id:0,
    index:0
  }

  pontos:number=0

  movimentos:number=0

  action:boolean=false

  
  ngOnInit():void {
    this.shuffleArray(this.cards)
  };

  shuffleArray(arr:any[]):void {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  compare(index:number, id:number, ocult:boolean){
    if(ocult && !this.action){

      this.virar(index)
      this.movimentos++

      if(this.virada.id===0){
        this.virada.id=id;
        this.virada.index=index;

      }else if(this.virada.id===id && this.virada.index!=index){
        //window.alert(id);
        this.pontos++
        this.virada.id=0;
        this.virada.index=0;
      }else{
        
        this.action=true
        setTimeout(()=>{
          this.virar(index)
          this.virar(this.virada.index);
          this.virada.id=0;
          this.virada.index=0;
          this.action=false
        }, 1000)
        
      }
    }

    
  }

  virar(index:number):void{
    this.cards[index].ocult = this.cards[index].ocult ? false : true;
  }

}



