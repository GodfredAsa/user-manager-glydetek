import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'user-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  @Input() firstName: string;
  @Input() lastName: string;
  @Input() preferredName: string;
  @Input() gender: string;
  @Input() email: string;
  @Input() createdAt: string;
  @Input() updatedAt: string;

  maleImage: string = "https://t4.ftcdn.net/jpg/01/21/66/41/360_F_121664192_EN0bgz7xpmRDncDNAFAkww3N7l6hzmG4.jpg"
  femaleImage: string = "https://static.vecteezy.com/system/resources/previews/035/180/784/non_2x/woman-face-silhouette-illustration-11-vector.jpg"


  ngOnInit(): void {

    this.getGenderImage(this.gender)

  }

  getGenderImage(gender: string) : string{
    return gender === "Male" ? this.maleImage :  this.femaleImage
  }


}
