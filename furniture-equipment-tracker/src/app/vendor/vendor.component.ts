import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { Vendor } from '../vendor';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent implements OnInit {
  vendors:Vendor[]=[];
  //vendors=new Vendor();
  constructor(private registrationService: RegistrationService,
    private router: Router) { }

  ngOnInit(): void {
    this.getRequests();
  }
  getRequests() {
    this.registrationService.getVendorRequestsList().subscribe((response:any)=>{
    this.vendors=response;
    console.log(response);
  })
  }
  updateDeliveryDate(id: number){
    this.router.navigate(['vendor',id]);
  }

}
