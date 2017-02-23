import { Component } from '@angular/core';
import { PhotoServices } from '../services/photo.services';

@Component({
  moduleId: module.id;
  selector: 'user',
  templateUrl: 'user.component.html',
  providers: [PhotoServices]
})
export class UserComponent  {
   name: string;
   email: string;
   address: address;
   hobbies: string[];
   showhobby:boolean;
   photo: photo;


   constructor(private PhotoServices: PhotoServices){
       console.log('constructor');
       this.name = 'Tony Wu';
       this.email = 'wgltony@hotmail.com';
       this.address = {
         street: '3005 whatever ave',
         city: 'New York',
         state: 'NY'
     }
       this.hobbies = ['Programming','Table Tennies','Movies'];
       this.showhobby = false;

       this.PhotoServices.getPhoto().subscribe(photo => {
         console.log(photo);
         this.photo = photo;
       })
  }

  toggleHobby(){
    if(this.showhobby)
      this.showhobby=false;
    else
      this.showhobby=true;
  }

  addHobby(newhobby: string){
    this.hobbies.push(newhobby);

  }

  deleteHobby(i: number){
    this.hobbies.splice(i,1);
  }

}

  interface address{
    street: string;
    city: string;
    state: string;
  }

  interface photo{
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;

  }
