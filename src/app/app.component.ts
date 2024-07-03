import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public date = new Date();
  public numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  public writers = [
    {
      name: 'William Shakespeare',
      nationality: 'English',
      birthDate: '1564-04-23',
      famousWorks: ['Hamlet', 'Romeo and Juliet', 'Macbeth']
    },
    {
      name: 'Leo Tolstoy',
      nationality: 'Russian',
      birthDate: '1828-09-09',
      famousWorks: ['War and Peace', 'Anna Karenina', 'The Death of Ivan Ilyich']
    },
    {
      name: 'Mark Twain',
      nationality: 'American',
      birthDate: '1835-11-30',
      famousWorks: ['The Adventures of Tom Sawyer', 'Adventures of Huckleberry Finn', 'The Prince and the Pauper']
    },
    {
      name: 'Jane Austen',
      nationality: 'English',
      birthDate: '1775-12-16',
      famousWorks: ['Pride and Prejudice', 'Sense and Sensibility', 'Emma']
    },
    {
      name: 'Gabriel García Márquez',
      nationality: 'Colombian',
      birthDate: '1927-03-06',
      famousWorks: ['One Hundred Years of Solitude', 'Love in the Time of Cholera', 'Chronicle of a Death Foretold']
    },
    {
      name: 'Franz Kafka',
      nationality: 'Austrian-Hungarian',
      birthDate: '1883-07-03',
      famousWorks: ['The Metamorphosis', 'The Trial', 'The Castle']
    },
    {
      name: 'Homer',
      nationality: 'Ancient Greek',
      birthDate: 'circa 8th century BC',
      famousWorks: ['The Iliad', 'The Odyssey']
    },
  ];


  constructor() {
  }


}
