import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ForumService } from '../_services/forum.service';
import { StorageService } from '../_services/storage.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.page.html',
  styleUrls: ['./forum.page.scss'],
})
export class ForumPage implements OnInit {

  User: any
 
  postreponse: any
  reponse: any
  idquestion: any
  form: any = {
    question: null,
    reponse: null,

  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  id_question: any
  question1: any
  id: any;
  timestamp!: Date;
  user: any;
  // pour la barre de recherche:
  searchText: any;
  constructor(private route1 : ActivatedRoute,private forumService: ForumService, private route: Router, private serviceStorqge: StorageService) { }

  ngOnInit() {
    this.lesReponsesPArQuestion()

    // AFFICHAGE LISTE QUESTION
    this.User = this.serviceStorqge.getUser();
    console.log(this.User)
    this.lesReponses();

    // AFFICHAGE LISTE REPONSES
    this.forumService.getReponsesParQuestion(this.id).subscribe(data => {
      this.reponse = data;
    })

  }




  lesReponses(): void {
    this.forumService.getQuestion().subscribe(data => {
      this.question1 = data;
      console.log('question' + this.question1)
    })
  }

  lesReponsesPArQuestion(){
    this.id= this.route1.snapshot.params["id"]

    this.forumService.getReponsesParQuestion(this.id).subscribe(data=>{
      this.reponse = data.lenght;
      
      // console.log('fdghjkllllllllkj'+ this.reponse)
    })
  }

  onSubmit(): void {
    this.lesReponses()
    const { question } = this.form;

    this.forumService.PostQuestion(question, this.User.id).subscribe({
      next: data => {
       
        this.lesReponses()
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;

      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
      
    });


    // location.reload();
   
  }




  // POUR RECUPERER LA DATE SEPAREMENT
  getFormattedDate(timestamp: number): string {
    const date = new Date(timestamp);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  }
  // POUR RECUPERER L'HEURE SEPAREMENT
  getFormattedTime(timestamp: number): string {
    const date = new Date(timestamp);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }


  //LA METHODE PERMETTANT DE NAVIGER VERS LA PAGE DU DETAILS FORUM
  goToDetailForum(idQuestion: number) {
    return this.route.navigate(['/forum-details', idQuestion])
  }

}
