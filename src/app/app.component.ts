import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

interface Book {
  title: string;
  author: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public bookForm: FormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    author: new FormControl('', Validators.required),
  })


  public books: Book[] = [
    {title: "To Kill a Mockingbird", author: "Harper Lee"},
    {title: "1984", author: "George Orwell"},
    {title: "The Great Gatsby", author: "F. Scott Fitzgerald"},
  ];

  public submit(): void {
    const obj: Book = {
      title: this.bookForm.value.title,
      author: this.bookForm.value.author
    }
    this.books.push(obj);
    this.bookForm.reset();
  }

}
