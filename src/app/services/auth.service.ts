import { Injectable, NgZone, inject } from "@angular/core";
import { Auth, deleteUser, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword,signOut,User} from "@angular/fire/auth";
import { createUserWithEmailAndPassword, updateProfile } from "@firebase/auth";
import { Observable, from } from "rxjs";
import { Router } from '@angular/router';


import { NbComponentStatus, NbToastrConfig, NbToastrService } from '@nebular/theme';
import { DataService } from "./data.service";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
     firebaseAuth = inject(Auth);
     UserData : any;

     codelist: any;
     isRegistrationVerified: Promise<boolean>;

     constructor(private auth: Auth, private router : Router, private toastrService: NbToastrService, public ngZone: NgZone, private dataService: DataService) {
        onAuthStateChanged(this.auth,(user: any)=>{
            if(user){
              this.UserData = user;
              localStorage.setItem('user', JSON.stringify(this.UserData));
              JSON.parse(localStorage.getItem('user')!);
            } else {
              localStorage.setItem('user', 'null');
              JSON.parse(localStorage.getItem('user')!);
            }
          })
     }
     
     Register(email: string, username: string, password: string, code: string) {
        this.isRegistrationVerified = this.activationCodeVerify(code);

        this.isRegistrationVerified.then((isValid) => { 
            if(isValid) {
                const promise = createUserWithEmailAndPassword(this.firebaseAuth, email, password)
                .then( (responde) => 
                    { updateProfile(responde.user, {displayName: username });
                    this.showToast('success', 'Registration complete!', 'Sign-up process completed successfully')
                    this.ngZone.run(() => {
                        setTimeout(() => 
                            {
                            this.sendEmailVerification()
                            this.router.navigate(['/home']);
                            },
                            3000);
                    });    
                    })
                .catch( (error) => 
                {
                    if(error.code = "auth/email-already-in-use") {
                        this.showToast('warning', 'E-mail already in use', 'Please log-in or reset password')
                    } else {
                        this.showToast('warning', 'Something went wrong!', 'Please try again later')
                    }
                })
            } else 
            {
               this.showToast('warning', 'The activation code is not valid', 'Something went wrong!')
            }
           
        }).catch( (e) => {
            this.showToast('warning', 'Something went wrong!', 'Please try again later')
        })
     }


    Login(email : string, password : string){
        return signInWithEmailAndPassword(this.auth, email, password)
        .then((result: any) => {
          this.UserData = result.user;
          this.ngZone.run(() => {
            setTimeout(() => {
              this.router.navigate(['/home']);
            }, 1000)
          });
        })
        .catch((error) => 
        {
          if(error.code = "auth/invalid-credential") {
            this.showToast('warning',  'Wrong credentials', 'Please check your e-mail and password');
          } else {
            this.showToast('warning',  'Something went wrong!', 'Please try again later')
          }
         
          
        });
      }

    Logout() {
      localStorage.clear();
      signOut(this.auth).then(()=>this.router.navigate(['/login']))
    }
    getAuthFire(){
        return this.auth.currentUser;
    }

    getAuthLocal(){
        const token = localStorage.getItem('user')
        const user = JSON.parse(token as string);
        return user;
    }

    get isLoggedIn(): boolean {
        const token = localStorage.getItem('user')
        const user = JSON.parse(token as string);
        return user !== null ? true : false;
      }

    showToast(status: NbComponentStatus, message: String, title: String) {
        this.toastrService.show(title, message, {status: status, preventDuplicates: true, limit: 3});
    }
    
    
    sendEmailVerification(){
        return sendEmailVerification(this.auth.currentUser as User );
      }

    async sendPasswordResetEmails(email : string){
        sendPasswordResetEmail(this.auth,email)
        .then(() => {
            this.ngZone.run(() => {
                this.showToast('success', 'Password reset email sent!', 'Check your inbox')
                setTimeout(() => 
                    {
                    this.router.navigate(['/login']);
                    },
                    3000);
            });    
        })
        .catch((error) => {
            window.alert(error.message);
            this.showToast('warning', 'Something went wrong!', 'Please try again later')
       });
     }

     async activationCodeVerify(inputCode: String): Promise<boolean> {
        var verified = false;
        this.codelist = await this.dataService.getActivationCodes();
        this.codelist.forEach(codelist => {
           if(inputCode == codelist.code) {
              verified = true;
           }
        });
        return verified;
      }

     
} 