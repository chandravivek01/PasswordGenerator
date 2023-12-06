import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  length = 0;
  letters = false;
  numbers = false;
  symbols = false;
  password = '';

  onButtonClick() {
    
    const letter = 'abcdefghijklmnopqrstuvwxyz';
    const number = '0123456789';
    const symbol = '!@#$%^&*';

    let validChars = '';
    if ( this.letters )
      validChars += letter;

    if ( this.numbers )
      validChars += number;
    
    if ( this.symbols )
      validChars += symbol;

    let generatedPassword  = '';
    for ( let i=0; i<this.length; i++ ) {

      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }
    this.password = generatedPassword;
  }

  onChangeUseLetters() {
      this.letters = !this.letters;
  }

  onChangeUseNumbers() {
    this.numbers = !this.numbers;
  }

  onChangeUseSymbols() {
    this.symbols = !this.symbols;
  }

  onChangeLength(event : any ) {

    
    const parsedValue = parseInt(event.target.value);

    if ( !isNaN(parsedValue) ) {
      this.length = parsedValue;
    }
    else
      this.length = 0;
  }
}
