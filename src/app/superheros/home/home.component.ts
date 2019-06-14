import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  contents = [
    {
      content: `The Avengers Initiative was the brainchild of S.H.I.E.L.D. Director Nick Fury. He first approached Tony Stark with the idea, following Tony’s defeat of Obadiah Stane and his subsequent public announcement that he was Iron Man. Fury kept his eye on several potential members, as Bruce Banner struggled with life as the Hulk, the Asgardian Thor appeared on Earth, and Steve Rogers, AKA World War II hero Captain America, was discovered alive decades after his apparent death. In the meantime, some of S.H.I.E.L.D.’s most skilled members, Black Widow (Natasha Romanoff), and Hawkeye (Clint Barton), were making a name for themselves and impressing Fury.

      Once the Asgardian trickster god Loki arrived on Earth and absconded with the massively powerful object known as the Tesseract—possessing Hawkeye and turning him into his brainwashed pawn in the process—Fury found it necessary to finally bring together his potential super team, calling in Romanoff, Banner, Rogers and Stark. Captain America and Iron Man, assisted by Black Widow, were able to capture Loki, but during their flight back to S.H.I.E.L.D., Thor arrived, attempting to bring his brother back to Asgard to face justice. A fight ensued between Thor and Iron Man, but Captain America broke it up, and the group all returned with their prisoner, Loki, to the S.H.I.E.L.D. Helicarrier.`,
      img: 'assets/img/history1.jpg'
    },
    {
      content: `The Avengers Initiative was the brainchild of S.H.I.E.L.D. Director Nick Fury. He first approached Tony Stark with the idea, following Tony’s defeat of Obadiah Stane and his subsequent public announcement that he was Iron Man. Fury kept his eye on several potential members, as Bruce Banner struggled with life as the Hulk, the Asgardian Thor appeared on Earth, and Steve Rogers, AKA World War II hero Captain America, was discovered alive decades after his apparent death. In the meantime, some of S.H.I.E.L.D.’s most skilled members, Black Widow (Natasha Romanoff), and Hawkeye (Clint Barton), were making a name for themselves and impressing Fury.

      Once the Asgardian trickster god Loki arrived on Earth and absconded with the massively powerful object known as the Tesseract—possessing Hawkeye and turning him into his brainwashed pawn in the process—Fury found it necessary to finally bring together his potential super team, calling in Romanoff, Banner, Rogers and Stark. Captain America and Iron Man, assisted by Black Widow, were able to capture Loki, but during their flight back to S.H.I.E.L.D., Thor arrived, attempting to bring his brother back to Asgard to face justice. A fight ensued between Thor and Iron Man, but Captain America broke it up, and the group all returned with their prisoner, Loki, to the S.H.I.E.L.D. Helicarrier.`,
      img: 'assets/img/history1.jpg'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
